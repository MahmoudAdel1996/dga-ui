'use client';

import React, {
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  ArrowRightLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Copy,
  Eye,
  Lock,
  Monitor,
  Plus,
  RotateCcw,
  RotateCw,
  Share2,
  Shield,
  Smartphone,
  Tablet,
} from 'lucide-react';

interface PreviewProps {
  children: React.ReactNode;
}

type Viewport = 'mobile' | 'tablet' | 'desktop';
type Direction = 'rtl' | 'ltr';
type ViewMode = 'preview' | 'code';

const VIEWPORT_WIDTH: Record<Viewport, string> = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1366px',
};

const VIEWPORTS = [
  { id: 'mobile' as const, label: 'Mobile (375px)', short: '375px', icon: Smartphone },
  { id: 'tablet' as const, label: 'Tablet (768px)', short: '768px', icon: Tablet },
  { id: 'desktop' as const, label: 'Desktop (1366px)', short: 'Desktop', icon: Monitor },
];

const DEVICE_LABEL: Record<Viewport, string> = {
  mobile: 'Mobile',
  tablet: 'iPad',
  desktop: 'Desktop',
};

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/dga-ui' : '';
const FRAME_SRC = BASE_PATH + '/preview-frame.html';

const CSS_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css'
    : BASE_PATH + '/sdga-ui-local/css/dga-ui.css';

const BOOTSTRAP_JS_URL =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
let bootstrapJs: Promise<string> | null = null;
function fetchBootstrapJs() {
  bootstrapJs ??= fetch(BOOTSTRAP_JS_URL).then(
    res => res.text(),
    () => {
      bootstrapJs = null;
      return '';
    }
  );
  return bootstrapJs;
}

// Clean HTML Indenter & Formatter
function formatHtml(raw: string): string {
  if (!raw) return '';
  const lines = raw.trim().split('\n');
  if (lines.length > 2 && lines.some(l => l.startsWith('  ') || l.startsWith('\t'))) {
    return raw.trim();
  }

  let formatted = '';
  let indent = 0;
  const tab = '  ';
  const clean = raw.replace(/>\s+</g, '><').trim();

  const voidTags = new Set([
    'area',
    'base',
    'br',
    'col',
    'embed',
    'hr',
    'img',
    'input',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]);

  const tokens = clean.split(/(<[^>]+>)/g).filter(Boolean);

  for (const token of tokens) {
    if (token.startsWith('</')) {
      indent = Math.max(0, indent - 1);
      formatted += tab.repeat(indent) + token + '\n';
    } else if (token.startsWith('<!--')) {
      formatted += tab.repeat(indent) + token + '\n';
    } else if (token.startsWith('<') && !token.startsWith('<!')) {
      const match = token.match(/^<([a-zA-Z0-9-]+)/);
      const tagName = match ? match[1].toLowerCase() : '';
      const isSelfClosing = token.endsWith('/>') || voidTags.has(tagName);
      formatted += tab.repeat(indent) + token + '\n';
      if (!isSelfClosing) {
        indent++;
      }
    } else {
      const text = token.trim();
      if (text) {
        formatted += tab.repeat(indent) + text + '\n';
      }
    }
  }

  return formatted.trim() || raw.trim();
}

// Lightweight syntax colorizer for HTML lines
function highlightHtmlLine(line: string): React.ReactNode[] {
  if (line.trim().startsWith('<!--')) {
    return [
      <span key="comment" className="italic text-fd-muted-foreground/70">
        {line}
      </span>,
    ];
  }

  const parts: React.ReactNode[] = [];
  const regex = /(<\/?[a-zA-Z0-9-]+)|(\/?>)|([a-zA-Z0-9-]+)(?==)|(".*?"|'.*?')/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.slice(lastIndex, match.index));
    }

    const [full, tag, closeTag, attrName, attrVal] = match;
    if (tag) {
      parts.push(
        <span key={match.index} className="font-semibold text-blue-600 dark:text-blue-400">
          {tag}
        </span>
      );
    } else if (closeTag) {
      parts.push(
        <span key={match.index} className="font-semibold text-blue-600 dark:text-blue-400">
          {closeTag}
        </span>
      );
    } else if (attrName) {
      parts.push(
        <span key={match.index} className="text-amber-600 dark:text-amber-400">
          {attrName}
        </span>
      );
    } else if (attrVal) {
      parts.push(
        <span key={match.index} className="text-emerald-600 dark:text-emerald-400">
          {attrVal}
        </span>
      );
    } else {
      parts.push(full);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [line];
}

export function Preview({ children }: PreviewProps) {
  const [mode, setMode] = useState<ViewMode>('preview');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const [isMounted, setIsMounted] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const [renderedHtml, setRenderedHtml] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef(viewport);
  const frameReadyRef = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || isIntersecting) return;
    const el = containerRef.current;
    if (!el) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        },
        { rootMargin: '300px' }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setIsIntersecting(true);
    }
  }, [isMounted, isIntersecting]);

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

  const isStringContent = typeof children === 'string';
  const htmlContent = isStringContent ? (children as string) : renderedHtml;

  // Formatted HTML string memoized for performance
  const formattedCode = useMemo(() => formatHtml(htmlContent), [htmlContent]);

  useEffect(() => {
    if (!isMounted || isStringContent || !hiddenRef.current) return;
    const el = hiddenRef.current;
    const capture = () => {
      const current = el.innerHTML;
      setRenderedHtml(prev => (prev === current ? prev : current));
    };
    capture();
    const observer = new MutationObserver(capture);
    observer.observe(el, { childList: true, subtree: true, attributes: true, characterData: true });
    return () => observer.disconnect();
  }, [isMounted, isStringContent, children]);

  const postContent = useCallback(() => {
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
  }, [htmlContent, direction]);

  useEffect(() => {
    if (frameReadyRef.current) {
      postContent();
    }
  }, [postContent]);

  useLayoutEffect(() => {
    const el = scrollWrapperRef.current;
    if (!el || mode !== 'preview') return;
    el.scrollLeft = direction === 'rtl' ? el.scrollWidth - el.clientWidth : 0;
  }, [direction, viewport, mode]);

  const handleCopy = useCallback(async () => {
    if (!formattedCode) return;
    try {
      await navigator.clipboard.writeText(formattedCode.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  }, [formattedCode]);

  const handleReload = useCallback(() => {
    setIsReloading(true);
    postContent();
    setTimeout(() => setIsReloading(false), 500);
  }, [postContent]);

  const handleFrameLoad = useCallback(() => {
    frameReadyRef.current = true;
    postContent();
  }, [postContent]);

  if (!isMounted) {
    return (
      <div className="not-prose my-6 w-full max-w-full rounded-2xl border border-fd-border bg-fd-card p-8 text-center text-sm text-fd-muted-foreground shadow-xs">
        <div className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent align-middle" />
        Loading preview...
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="not-prose my-6 w-full max-w-full overflow-hidden rounded-2xl border border-fd-border/80 bg-fd-card text-fd-card-foreground shadow-lg ring-1 ring-black/[0.05] transition-all hover:shadow-xl dark:ring-white/[0.08]"
    >
      {/* Unified macOS Safari Window Toolbar */}
      <div className="flex select-none flex-wrap items-center justify-between gap-2.5 border-b border-fd-border/70 bg-fd-muted/60 px-3.5 sm:px-4 py-2.5 text-xs backdrop-blur-md dark:bg-fd-secondary/40">
        {/* Left: Window Traffic Lights + Navigation Chevrons + Mode Switcher Tabs */}
        <div className="flex items-center gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/50 shadow-2xs transition-transform hover:scale-110" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e] border border-[#dea123]/50 shadow-2xs transition-transform hover:scale-110" />
            <span className="h-3 w-3 rounded-full bg-[#28c840] border border-[#1aab29]/50 shadow-2xs transition-transform hover:scale-110" />
          </div>

          <div className="hidden items-center gap-0.5 sm:flex text-fd-muted-foreground/40">
            <span className="inline-flex p-0.5">
              <ChevronLeft size={14} strokeWidth={2.5} />
            </span>
            <span className="inline-flex p-0.5 text-fd-muted-foreground/20">
              <ChevronRight size={14} strokeWidth={2.5} />
            </span>
          </div>

          <span className="hidden h-3.5 w-px bg-fd-border/80 sm:inline-block" />

          {/* Mode Switcher Tabs [Preview | Code] */}
          <div
            role="tablist"
            aria-label="View mode"
            className="inline-flex items-center rounded-lg border border-fd-border bg-fd-background/90 p-0.5 shadow-2xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'preview'}
              onClick={() => setMode('preview')}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                mode === 'preview'
                  ? 'bg-fd-card text-fd-foreground shadow-xs'
                  : 'text-fd-muted-foreground hover:bg-fd-accent/40 hover:text-fd-foreground'
              }`}
            >
              <Eye size={13} />
              <span>Preview</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'code'}
              onClick={() => setMode('code')}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                mode === 'code'
                  ? 'bg-fd-card text-fd-foreground shadow-xs'
                  : 'text-fd-muted-foreground hover:bg-fd-accent/40 hover:text-fd-foreground'
              }`}
            >
              <Code2 size={13} />
              <span>Code</span>
            </button>
          </div>
        </div>

        {/* Center: Safari Address Bar Capsule */}
        <div className="order-last sm:order-none mx-auto flex w-full sm:w-auto max-w-xs sm:max-w-sm flex-1 items-center justify-between gap-2 rounded-xl border border-fd-border/80 bg-fd-background/95 px-3 py-1 text-xs shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-fd-border dark:bg-fd-background/80">
          <div className="flex items-center gap-1.5 min-w-0">
            <Shield size={12} className="text-fd-muted-foreground/60 shrink-0" />
            <span className="text-fd-muted-foreground/30">|</span>
            <Lock size={11} className="text-emerald-500 shrink-0" />
            <span className="truncate font-sans font-medium text-[11px] text-fd-foreground/90 tracking-tight">
              localhost:3000
            </span>
            <span className="hidden font-mono text-[10px] text-fd-muted-foreground/50 md:inline">
              /preview
            </span>
          </div>

          <button
            type="button"
            onClick={handleReload}
            title="Reload preview"
            aria-label="Reload preview"
            className="inline-flex items-center justify-center rounded p-0.5 text-fd-muted-foreground/60 transition-colors hover:text-fd-foreground"
          >
            <RotateCw
              size={11}
              className={`transition-transform duration-500 ${isReloading ? 'animate-spin text-primary' : ''}`}
            />
          </button>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-1.5">
          {mode === 'preview' ? (
            <>
              {/* Viewport Switcher */}
              <div
                role="group"
                aria-label="Viewport Switcher"
                className="inline-flex items-center rounded-lg border border-fd-border bg-fd-background/90 p-0.5 shadow-2xs"
              >
                {VIEWPORTS.map(({ id, label, icon: Icon }) => {
                  const isActive = viewport === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setViewport(id)}
                      title={label}
                      aria-label={label}
                      aria-pressed={isActive}
                      className={`relative flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-fd-card text-fd-foreground shadow-xs'
                          : 'text-fd-muted-foreground hover:bg-fd-accent/40 hover:text-fd-foreground'
                      }`}
                    >
                      <Icon size={13} strokeWidth={2} />
                    </button>
                  );
                })}
              </div>

              <span className="hidden items-center rounded-md border border-fd-border/70 bg-fd-background/80 px-2 py-0.5 font-mono text-[10px] font-medium text-fd-muted-foreground md:inline-flex">
                {VIEWPORT_WIDTH[viewport]}
              </span>

              {/* RTL / LTR Toggle */}
              <button
                type="button"
                onClick={() => setDirection(prev => (prev === 'rtl' ? 'ltr' : 'rtl'))}
                title={direction === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'}
                aria-label="Toggle direction"
                className="inline-flex items-center gap-1.5 rounded-lg border border-fd-border bg-fd-background/90 px-2.5 py-1 text-xs font-medium text-fd-foreground shadow-2xs transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
              >
                <ArrowRightLeft size={13} className="text-fd-muted-foreground" />
                <span className="font-mono text-[11px] font-semibold tracking-wider">
                  {direction.toUpperCase()}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    direction === 'rtl' ? 'bg-emerald-500' : 'bg-primary'
                  }`}
                />
              </button>
            </>
          ) : (
            <>
              <span className="inline-flex items-center rounded-md border border-fd-border bg-fd-background/80 px-2 py-0.5 font-mono text-[11px] font-medium text-fd-muted-foreground">
                {formattedCode.split('\n').length} lines
              </span>

              <button
                type="button"
                onClick={handleCopy}
                title="Copy HTML"
                aria-label="Copy HTML"
                className="inline-flex items-center gap-1.5 rounded-lg border border-fd-border bg-fd-background/90 px-2.5 py-1 text-xs font-medium text-fd-foreground shadow-2xs transition-all hover:bg-fd-accent hover:text-fd-accent-foreground"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-500" />
                    <span className="font-semibold text-emerald-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-fd-muted-foreground" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content Area: Direct iframe (no double container!) */}
      {mode === 'preview' ? (
        <div
          ref={scrollWrapperRef}
          className={`relative flex w-full overflow-x-auto bg-white ${
            viewport !== 'desktop'
              ? 'bg-[radial-gradient(var(--color-fd-border)_1px,transparent_1px)] bg-[size:16px_16px] bg-fd-muted/30 p-4 sm:p-6'
              : ''
          }`}
        >
          {isIntersecting ? (
            <div
              className={`shrink-0 transition-[width] duration-300 ease-out ${
                viewport !== 'desktop'
                  ? 'mx-auto overflow-hidden rounded-xl border border-fd-border bg-white shadow-md'
                  : 'w-full'
              }`}
              style={{ width: viewport === 'desktop' ? '100%' : VIEWPORT_WIDTH[viewport] }}
            >
              <iframe
                ref={iframeRef}
                src={`${FRAME_SRC}?css=${encodeURIComponent(CSS_URL)}`}
                onLoad={handleFrameLoad}
                className="block w-full border-0 bg-white"
                title="Component Preview"
              />
            </div>
          ) : (
            <div className="mx-auto flex h-36 w-full shrink-0 animate-pulse items-center justify-center text-xs text-fd-muted-foreground">
              Loading preview canvas...
            </div>
          )}
        </div>
      ) : (
        /* Direct HTML Code Viewer */
        <div className="max-h-[520px] w-full overflow-auto bg-fd-card p-4 sm:p-5 select-text font-mono text-xs sm:text-[13px] leading-relaxed">
          <div className="table w-full">
            {formattedCode.split('\n').map((line, idx) => (
              <div key={idx} className="table-row hover:bg-fd-muted/30">
                <span className="table-cell select-none pr-4 text-right font-mono text-[11px] text-fd-muted-foreground/45 w-10 py-0.5">
                  {idx + 1}
                </span>
                <span className="table-cell whitespace-pre font-mono py-0.5">
                  {highlightHtmlLine(line)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isStringContent && (
        <div ref={hiddenRef} style={{ display: 'none' }} aria-hidden="true">
          <Suspense fallback={null}>{children}</Suspense>
        </div>
      )}
    </div>
  );
}
