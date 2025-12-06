'use client';

import React, { useState, useEffect, useRef } from 'react';
import { WebContainer } from '@webcontainer/api';
import { renderToStaticMarkup } from 'react-dom/server';

interface PreviewProps {
  children: React.ReactNode;
  interactive?: boolean;
  code?: string;
}

export function Preview({ children, interactive = false, code }: PreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [webcontainerInstance, setWebcontainerInstance] = useState<WebContainer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState<string>('');
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl');
  const [isMounted, setIsMounted] = useState(false);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for height changes from iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'resize' && iframeRef.current) {
        iframeRef.current.style.height = event.data.height + 'px';
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Ensure component is mounted before rendering (avoid hydration mismatch)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Extract HTML from children
  const htmlContent = React.useMemo(() => {
    if (!isMounted) return '';

    if (typeof children === 'string') {
      return children;
    } else if (React.isValidElement(children)) {
      try {
        // Try to render React component to HTML string
        return renderToStaticMarkup(children);
      } catch (e) {
        // Fallback to checking props
        const props = children.props as any;
        if (props?.dangerouslySetInnerHTML?.__html) {
          return props.dangerouslySetInnerHTML.__html;
        } else if (props?.children) {
          return extractHTMLFromChildren(props.children);
        }
      }
    }
    return '';
  }, [children, isMounted]);

  // Initialize WebContainer for interactive mode
  useEffect(() => {
    if (interactive && !webcontainerInstance) {
      initWebContainer();
    }

    return () => {
      if (webcontainerInstance) {
        webcontainerInstance.teardown();
      }
    };
  }, [interactive]);

  async function initWebContainer() {
    setIsLoading(true);
    try {
      const instance = await WebContainer.boot({
        workdirName: 'sdga-ui-preview',
      });
      setWebcontainerInstance(instance);

      const htmlToUse = code || htmlContent;

      // Create files
      await instance.mount({
        'index.html': {
          file: {
            contents: generateFullHTML(htmlToUse, direction),
          },
        },
        'package.json': {
          file: {
            contents: JSON.stringify({
              name: 'sdga-ui-preview',
              version: '1.0.0',
              scripts: {
                start: 'npx http-server -p 3111 -c-1',
              },
            }),
          },
        },
      });

      // Start server
      const serverProcess = await instance.spawn('npm', ['start']);

      // Wait for server to be ready
      instance.on('server-ready', (port, serverUrl) => {
        setUrl(serverUrl);
        setIsLoading(false);
      });
    } catch (error) {
      console.error('Failed to initialize WebContainer:', error);
      setIsLoading(false);
    }
  }

  function generateFullHTML(content: string, dir: 'rtl' | 'ltr') {
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
      // Listen for direction changes from parent
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'changeDirection') {
          document.documentElement.setAttribute('dir', event.data.direction);
          document.documentElement.setAttribute('lang', event.data.direction === 'rtl' ? 'ar' : 'en');
        }
      });
      
      // Auto-resize iframe to content height
      function notifyHeightChange() {
        var height = document.documentElement.scrollHeight;
        window.parent.postMessage({ type: 'resize', height: height }, '*');
      }
      
      // Prevent default behavior for placeholder links
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
        
        // Observe DOM changes for height adjustments
        new MutationObserver(notifyHeightChange).observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true
        });
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

  const srcdoc = React.useMemo(
    () => generateFullHTML(code || htmlContent, 'rtl'),
    [code, htmlContent]
  );

  // Update iframe direction via postMessage when direction changes
  useEffect(() => {
    if (iframeRef.current && isMounted) {
      iframeRef.current.contentWindow?.postMessage({ type: 'changeDirection', direction }, '*');
    }
  }, [direction, isMounted]);

  // Get viewport width based on device type
  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '768px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          margin: '1.5rem 0',
          padding: '2rem',
          background: 'white',
          textAlign: 'center',
          color: '#6b7280',
        }}
      >
        Loading preview...
      </div>
    );
  }

  if (interactive) {
    return (
      <div
        className="preview-container"
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          margin: '1.5rem 0',
          overflow: 'hidden',
          background: 'white',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Tabs */}
        <div
          style={{
            borderBottom: '1px solid #e5e7eb',
            background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
            display: 'flex',
            gap: '0.25rem',
            padding: '0.75rem',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => setActiveTab('preview')}
            style={{
              padding: '0.5rem 1.25rem',
              border: activeTab === 'preview' ? '1px solid #e5e7eb' : 'none',
              background: activeTab === 'preview' ? 'white' : 'transparent',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px',
              color: activeTab === 'preview' ? '#111827' : '#6b7280',
              transition: 'all 0.15s ease',
              boxShadow: activeTab === 'preview' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
            }}
          >
            معاينة
          </button>
          <button
            onClick={() => setActiveTab('code')}
            style={{
              padding: '0.5rem 1.25rem',
              border: activeTab === 'code' ? '1px solid #e5e7eb' : 'none',
              background: activeTab === 'code' ? 'white' : 'transparent',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px',
              color: activeTab === 'code' ? '#111827' : '#6b7280',
              transition: 'all 0.15s ease',
              boxShadow: activeTab === 'code' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
            }}
          >
            الكود
          </button>

          {/* Viewport Toggle */}
          <div style={{ display: 'flex', gap: '0.25rem', marginLeft: 'auto' }}>
            <button
              onClick={() => setViewport('mobile')}
              style={{
                padding: '0.5rem',
                border: viewport === 'mobile' ? '1px solid #3b82f6' : '1px solid #e5e7eb',
                background: viewport === 'mobile' ? '#eff6ff' : 'white',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                color: viewport === 'mobile' ? '#3b82f6' : '#6b7280',
              }}
              title="Mobile (375px)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
            </button>
            <button
              onClick={() => setViewport('tablet')}
              style={{
                padding: '0.5rem',
                border: viewport === 'tablet' ? '1px solid #3b82f6' : '1px solid #e5e7eb',
                background: viewport === 'tablet' ? '#eff6ff' : 'white',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                color: viewport === 'tablet' ? '#3b82f6' : '#6b7280',
              }}
              title="Tablet (768px)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
              </svg>
            </button>
            <button
              onClick={() => setViewport('desktop')}
              style={{
                padding: '0.5rem',
                border: viewport === 'desktop' ? '1px solid #3b82f6' : '1px solid #e5e7eb',
                background: viewport === 'desktop' ? '#eff6ff' : 'white',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                color: viewport === 'desktop' ? '#3b82f6' : '#6b7280',
              }}
              title="Desktop (100%)"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </button>
          </div>

          {/* Direction Toggle */}
          <button
            onClick={() => setDirection(prev => (prev === 'rtl' ? 'ltr' : 'rtl'))}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #e5e7eb',
              background: 'white',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '13px',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            title={direction === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'}
          >
            <span style={{ fontSize: '14px' }}>⇄</span>
            <span style={{ fontFamily: 'monospace', fontSize: '12px' }}>
              {direction.toUpperCase()}
            </span>
          </button>

          {interactive && (
            <button
              onClick={() => window.open(url || 'about:blank', '_blank')}
              disabled={!url}
              style={{
                padding: '0.5rem',
                border: '1px solid #e5e7eb',
                background: 'white',
                borderRadius: '0.5rem',
                cursor: url ? 'pointer' : 'not-allowed',
                opacity: url ? 1 : 0.4,
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={e => {
                if (url) {
                  e.currentTarget.style.background = '#f9fafb';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
              title="فتح في نافذة جديدة"
            >
              ↗
            </button>
          )}
        </div>

        {/* Content */}
        {activeTab === 'preview' && (
          <div
            style={{
              position: 'relative',
              minHeight: '200px',
              display: 'flex',
              justifyContent: 'center',
              background: viewport !== 'desktop' ? '#f3f4f6' : 'transparent',
              padding: viewport !== 'desktop' ? '1rem' : '0',
              overflowX: viewport === 'desktop' ? 'auto' : 'visible',
            }}
          >
            {isLoading && (
              <div
                style={{
                  padding: '3rem',
                  textAlign: 'center',
                  color: '#6c757d',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div>جاري تحميل WebContainer...</div>
              </div>
            )}
            {url && !isLoading ? (
              <iframe
                ref={iframeRef}
                src={url}
                style={{
                  width: getViewportWidth(),
                  maxWidth: '100%',
                  border: 'none',
                  borderRadius: '0',
                  display: 'block',
                  background: 'white',
                  overflowX: viewport === 'desktop' ? 'visible' : 'auto',
                  overflowY: 'hidden',
                  boxShadow: 'none',
                }}
                title="WebContainer Preview"
                sandbox="allow-scripts allow-forms allow-popups allow-modals"
              />
            ) : (
              !isLoading && (
                <iframe
                  ref={iframeRef}
                  srcDoc={srcdoc}
                  style={{
                    width: getViewportWidth(),
                    maxWidth: '100%',
                    border: 'none',
                    borderRadius: '0',
                    display: 'block',
                    background: 'white',
                    overflowX: viewport === 'desktop' ? 'visible' : 'auto',
                    overflowY: 'hidden',
                    boxShadow: 'none',
                  }}
                  title="Static Preview"
                  sandbox="allow-scripts"
                  onLoad={e => {
                    const iframe = e.currentTarget;
                    // Set initial direction
                    iframe.contentWindow?.postMessage({ type: 'changeDirection', direction }, '*');
                  }}
                />
              )
            )}
          </div>
        )}

        {activeTab === 'code' && (
          <div
            style={{
              padding: '1.5rem',
              background: '#1e293b',
              color: '#e2e8f0',
              fontFamily: '"Fira Code", "Consolas", monospace',
              fontSize: '13px',
              lineHeight: '1.6',
              overflowX: 'auto',
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre', wordBreak: 'normal' }}>
              <code>{code || htmlContent}</code>
            </pre>
          </div>
        )}
      </div>
    );
  }

  // Simple iframe preview (non-interactive)
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '0.75rem',
        margin: '1.5rem 0',
        overflow: 'hidden',
        background: 'white',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Direction Toggle for Simple Preview */}
      <div
        style={{
          borderBottom: '1px solid #e5e7eb',
          background: 'linear-gradient(to bottom, #ffffff, #f9fafb)',
          display: 'flex',
          padding: '0.75rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Viewport Toggle */}
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <button
            onClick={() => setViewport('mobile')}
            style={{
              padding: '0.5rem',
              border: viewport === 'mobile' ? '1px solid #3b82f6' : '1px solid #e5e7eb',
              background: viewport === 'mobile' ? '#eff6ff' : 'white',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              color: viewport === 'mobile' ? '#3b82f6' : '#6b7280',
            }}
            title="Mobile (375px)"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          </button>
          <button
            onClick={() => setViewport('tablet')}
            style={{
              padding: '0.5rem',
              border: viewport === 'tablet' ? '1px solid #3b82f6' : '1px solid #e5e7eb',
              background: viewport === 'tablet' ? '#eff6ff' : 'white',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              color: viewport === 'tablet' ? '#3b82f6' : '#6b7280',
            }}
            title="Tablet (768px)"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
          </button>
          <button
            onClick={() => setViewport('desktop')}
            style={{
              padding: '0.5rem',
              border: viewport === 'desktop' ? '1px solid #3b82f6' : '1px solid #e5e7eb',
              background: viewport === 'desktop' ? '#eff6ff' : 'white',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              color: viewport === 'desktop' ? '#3b82f6' : '#6b7280',
            }}
            title="Desktop (100%)"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </button>
        </div>

        {/* Direction Toggle */}
        <button
          onClick={() => setDirection(prev => (prev === 'rtl' ? 'ltr' : 'rtl'))}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #e5e7eb',
            background: 'white',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '13px',
            color: '#374151',
            transition: 'all 0.15s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#f9fafb';
            e.currentTarget.style.borderColor = '#d1d5db';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
          title={direction === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'}
        >
          <span style={{ fontSize: '14px', lineHeight: '1' }}>⇄</span>
          <span style={{ fontFamily: 'monospace', fontSize: '12px' }}>
            {direction.toUpperCase()}
          </span>
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: viewport !== 'desktop' ? '#f3f4f6' : 'transparent',
          padding: viewport !== 'desktop' ? '1rem' : '0',
        }}
      >
        <iframe
          ref={iframeRef}
          srcDoc={srcdoc}
          style={{
            width: getViewportWidth(),
            maxWidth: '100%',
            border: 'none',
            borderRadius: '0',
            display: 'block',
            background: 'white',
            overflowX: 'auto',
            overflowY: 'hidden',
            boxShadow: 'none',
          }}
          title="Preview"
          sandbox="allow-scripts"
          onLoad={e => {
            const iframe = e.currentTarget;
            // Set initial direction
            iframe.contentWindow?.postMessage({ type: 'changeDirection', direction }, '*');
          }}
        />
      </div>
    </div>
  );
}

function extractHTMLFromChildren(children: any): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children.map(extractHTMLFromChildren).join('');
  }
  if (React.isValidElement(children)) {
    try {
      return renderToStaticMarkup(children);
    } catch {
      return '';
    }
  }
  return '';
}
