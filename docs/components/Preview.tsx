'use client';

import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react';
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

// One shared shell page for every Preview iframe: the head assets (icons,
// sdga-ui CSS) are fetched once and served from HTTP cache for all other
// instances, and content updates mutate the live document via postMessage
// instead of reloading it (which per-instance srcDoc forced on every
// content or direction change).
// Must match basePath in next.config.mjs ('/dga-ui' in prod, '' in dev).
const FRAME_SRC = (process.env.NODE_ENV === 'production' ? '/dga-ui' : '') + '/preview-frame.html';

// Bootstrap's JS is only needed by previews whose markup uses data-bs-*
// behaviors. Fetch its source once, shared module-wide by every Preview
// instance (and across client-side page navigations), and hand the code to
// each frame for inline execution — N previews cost one network request
// total instead of one per iframe.
const BOOTSTRAP_JS_URL =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
let bootstrapJs: Promise<string> | null = null;
function fetchBootstrapJs() {
  bootstrapJs ??= fetch(BOOTSTRAP_JS_URL).then(
    res => res.text(),
    () => {
      // Failed fetch (offline, CDN hiccup): clear so a later preview retries.
      bootstrapJs = null;
      return '';
    }
  );
  return bootstrapJs;
}

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
  // The frame can't receive content until its document (and message
  // listener) has loaded; before that, updates are held and the onLoad
  // handler sends the latest state.
  const frameReadyRef = useRef(false);

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

  // Push content and direction into the already-loaded frame. The frame is
  // blank until the first setContent arrives, so there's no flash of the
  // wrong direction, and later updates never reload the document.
  const postContent = () => {
    const frame = iframeRef.current?.contentWindow;
    if (!frame) return;
    frame.postMessage(
      { type: 'setContent', html: htmlContent, dir: direction },
      window.location.origin
    );
    if (htmlContent.includes('data-bs-')) {
      fetchBootstrapJs().then(code => {
        if (!code) return;
        iframeRef.current?.contentWindow?.postMessage(
          { type: 'execScript', code },
          window.location.origin
        );
      });
    }
  };

  useEffect(() => {
    if (frameReadyRef.current) postContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlContent, direction]);

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
          src={FRAME_SRC}
          onLoad={() => {
            frameReadyRef.current = true;
            postContent();
          }}
          style={{ width: VIEWPORT_WIDTH[viewport] }}
          className="block flex-none border-0 bg-white"
          title="Preview"
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
