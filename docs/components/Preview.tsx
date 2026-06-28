'use client';

import React, { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ArrowRightLeft, Monitor, Smartphone, Tablet } from 'lucide-react';

interface PreviewProps {
  children: React.ReactNode;
}

type Viewport = 'mobile' | 'tablet' | 'desktop';
type Direction = 'rtl' | 'ltr';

// Fixed reference widths for every mode, including desktop — the Preview
// is often embedded in a docs column narrower than a real desktop viewport,
// so "100%" there would never actually reach Bootstrap's lg/xl breakpoints.
const VIEWPORT_WIDTH: Record<Viewport, string> = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1366px',
};

const VIEWPORTS: { id: Viewport; label: string; icon: typeof Smartphone }[] = [
  { id: 'mobile', label: 'Mobile (375px)', icon: Smartphone },
  { id: 'tablet', label: 'Tablet (768px)', icon: Tablet },
  { id: 'desktop', label: 'Desktop (1380px)', icon: Monitor },
];

export function Preview({ children }: PreviewProps) {
  const [direction, setDirection] = useState<Direction>('ltr');
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [isMounted, setIsMounted] = useState(false);
  const [renderedHtml, setRenderedHtml] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  // Switching viewport is itself async (resize → measure → postMessage), so
  // a late reply from the *previous* viewport can otherwise arrive after the
  // new one and overwrite it with the wrong height. Every request below is
  // tagged with the viewport it's for, and replies that don't match the
  // current one are ignored. Kept in a ref so the message handler never
  // closes over a stale value without needing to resubscribe on every change.
  const viewportRef = useRef(viewport);

  // Avoid hydration mismatch — render markup only after mount.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // The iframe has no intrinsic height, so the embedded page reports its
  // own scrollHeight back via postMessage and we resize the iframe to fit.
  // Multiple <Preview> instances can be mounted on one page, and "message"
  // is a window-wide event, so we must check the message actually came from
  // *this* iframe — otherwise one preview's resize can clobber another's.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data?.type === 'resize' &&
        iframeRef.current &&
        event.source === iframeRef.current.contentWindow &&
        event.data.token === viewportRef.current
      ) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    viewportRef.current = viewport;
    iframeRef.current?.contentWindow?.postMessage({ type: 'requestResize', token: viewport }, '*');
  }, [viewport]);

  // children can arrive as an unresolved React Server Component reference
  // (React's "lazy" wrapper around a server-rendered subtree) rather than a
  // plain element, since this client component is used from a server-
  // rendered MDX page. renderToStaticMarkup can't resolve that outside the
  // normal render tree — it just silently returns an empty string. Letting
  // React render it for real, off-screen, resolves any shape correctly; we
  // just read back the settled DOM as HTML.
  const isStringContent = typeof children === 'string';
  const htmlContent = isStringContent ? (children as string) : renderedHtml;

  useEffect(() => {
    if (!isMounted || isStringContent || !hiddenRef.current) return;
    const el = hiddenRef.current;
    const capture = () => setRenderedHtml(el.innerHTML);
    capture();
    const observer = new MutationObserver(capture);
    observer.observe(el, { childList: true, subtree: true, attributes: true, characterData: true });
    return () => observer.disconnect();
  }, [isMounted, isStringContent, children]);

  // Bake the direction into the markup so there's no flash of the wrong
  // direction and no reliance on cross-frame postMessage timing.
  const srcDoc = useMemo(() => generateFullHTML(htmlContent, direction), [htmlContent, direction]);

  // When the simulated device frame is wider than the visible window, open
  // the scroll position on whichever side the content actually starts on —
  // the right edge for RTL, the left edge for LTR — instead of always
  // defaulting to the left edge regardless of direction.
  useLayoutEffect(() => {
    const el = scrollWrapperRef.current;
    if (!el) return;
    el.scrollLeft = direction === 'rtl' ? el.scrollWidth - el.clientWidth : 0;
  }, [direction, viewport]);

  if (!isMounted) {
    return (
      <div className="not-prose my-6 w-full max-w-full rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
        Loading preview...
      </div>
    );
  }

  return (
    <div className="not-prose my-6 w-full max-w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Toolbar — wraps on narrow screens instead of overflowing */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 bg-linear-to-b from-white to-gray-50 p-2">
        <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
          {VIEWPORTS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setViewport(id)}
              title={label}
              aria-label={label}
              aria-pressed={viewport === id}
              className={`flex items-center justify-center rounded-md p-1.5 transition-colors ${
                viewport === id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon size={16} strokeWidth={2} />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setDirection(prev => (prev === 'rtl' ? 'ltr' : 'rtl'))}
          title={direction === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'}
          className="ms-auto flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:border-gray-300"
        >
          <ArrowRightLeft size={14} />
          <span className="font-mono">{direction.toUpperCase()}</span>
        </button>
      </div>

      {/* Preview surface — its own scroll container, so a simulated device
          width never forces the surrounding page to overflow horizontally.
          justify-start (not center): centering an overflowing flex item
          clips its start side without any way to scroll back to it. Initial
          scroll position is set in the effect above, based on direction. */}
      <div ref={scrollWrapperRef} className="flex justify-start overflow-x-auto bg-gray-100 p-4">
        <iframe
          ref={iframeRef}
          srcDoc={srcDoc}
          style={{ width: VIEWPORT_WIDTH[viewport] }}
          className="block flex-none border-0 bg-white"
          title="Preview"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>

      {!isStringContent && (
        <div ref={hiddenRef} style={{ display: 'none' }} aria-hidden="true">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
      )}
    </div>
  );
}

function generateFullHTML(content: string, dir: Direction) {
  return `<!DOCTYPE html>
<html dir="${dir}" lang="${dir === 'rtl' ? 'ar' : 'en'}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SDGA UI Preview</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
      // Matches the React side's default viewport state, so the very first
      // automatic measurement (before any requestResize round-trip) is
      // already tagged correctly.
      var resizeToken = 'desktop';

      function notifyHeightChange() {
        // document.documentElement.scrollHeight is the wrong metric here:
        // the root <html> element's "auto" height stretches to fill the
        // iframe's *current* viewport when content is shorter than it, so
        // it just echoes back whatever height the iframe already has
        // instead of reporting the smaller true content height — which is
        // exactly why shrinking (e.g. tablet/mobile back to desktop) never
        // took effect. document.body has no such quirk.
        var height = document.body.scrollHeight;
        window.parent.postMessage({ type: 'resize', height: height, token: resizeToken }, '*');
      }

      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'requestResize') {
          resizeToken = event.data.token;
          notifyHeightChange();
        }
      });

      // Placeholder links ("#") shouldn't navigate or jump-scroll the preview.
      function preventPlaceholderLinks(e) {
        var target = e.target;
        while (target && target !== document) {
          if (target.tagName === 'A' && (target.getAttribute('href') === '#' || target.getAttribute('href') === 'javascript:void(0)')) {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
          target = target.parentElement;
        }
      }

      window.addEventListener('load', function() {
        notifyHeightChange();
        document.addEventListener('click', preventPlaceholderLinks, true);
        // ResizeObserver catches both content mutations AND the reflow that
        // happens when the parent changes the iframe's own width (switching
        // mobile/tablet/desktop) — a MutationObserver alone misses that case.
        new ResizeObserver(notifyHeightChange).observe(document.body);
      });
    </script>
    <style>
      * {
        box-sizing: border-box;
      }
      html, body {
        margin: 0;
        padding: 0;
        overflow-x: auto;
        overflow-y: hidden;
      }
      body {
        padding: 1rem;
        background: #F3F4F6;
        font-family: 'IBM Plex Sans Arabic', sans-serif;
        min-height: fit-content;
      }
    </style>
  </head>
  <body>
    ${content}
  </body>
</html>`;
}
