'use client';

import React, { useState, useEffect, useRef } from 'react';
import { WebContainer, auth } from '@webcontainer/api';
import { renderToStaticMarkup } from 'react-dom/server';

interface PreviewProps {
  children: React.ReactNode;
  interactive?: boolean;
  code?: string;
}

// Track if auth has been initialized
let authInitialized = false;

export function Preview({ children, interactive = false, code }: PreviewProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [webcontainerInstance, setWebcontainerInstance] = useState<WebContainer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState<string>('');
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl');
  const [isMounted, setIsMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Initialize auth once when first component mounts
  useEffect(() => {
    if (!authInitialized && typeof window !== 'undefined') {
      try {
        auth.init({
          clientId: 'wc_api_mahmoud_adel1996_cc91f834ad9971b0bd46ac164a30b7a2',
          scope: '',
        });
        authInitialized = true;
        console.log('WebContainer auth initialized');
      } catch (error) {
        console.error('Failed to initialize WebContainer auth:', error);
      }
    }
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
    <script>
      // Lazy load Bootstrap only when needed
      (function() {
        var loadBootstrap = function() {
          if (window.bootstrap) return;
          var script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
          script.defer = true;
          script.crossOrigin = 'anonymous';
          document.head.appendChild(script);
        };
        
        // Check if Bootstrap components are used
        if (document.querySelector('[data-bs-toggle], .modal, .dropdown, .toast, .collapse')) {
          loadBootstrap();
        }
      })();
      
      // Listen for direction changes from parent
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'changeDirection') {
          document.documentElement.setAttribute('dir', event.data.direction);
          document.documentElement.setAttribute('lang', event.data.direction === 'rtl' ? 'ar' : 'en');
        }
      });
    </script>
    <style>
      body {
        padding: 1rem;
        background: #F3F4F6;
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

          {/* Direction Toggle */}
          <button
            onClick={() => setDirection(prev => (prev === 'rtl' ? 'ltr' : 'rtl'))}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid #dee2e6',
              background: 'white',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s',
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            title={direction === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'}
          >
            <span style={{ fontSize: '16px' }}>{direction === 'rtl' ? '→' : '←'}</span>
            <span>{direction === 'rtl' ? 'RTL' : 'LTR'}</span>
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
          <div style={{ position: 'relative', minHeight: '200px' }}>
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
                  width: '100%',
                  border: 'none',
                  display: 'block',
                  background: 'white',
                  overflowX: 'auto',
                  overflowY: 'hidden',
                }}
                title="WebContainer Preview"
                sandbox="allow-scripts allow-forms allow-popups allow-modals"
                onLoad={e => {
                  const iframe = e.currentTarget;
                  try {
                    const body = iframe.contentDocument?.body;
                    if (body) {
                      iframe.style.height = body.scrollHeight + 'px';
                    }
                  } catch (err) {
                    iframe.style.height = '300px';
                  }
                }}
              />
            ) : (
              !isLoading && (
                <iframe
                  ref={iframeRef}
                  srcDoc={srcdoc}
                  style={{
                    width: '100%',
                    border: 'none',
                    display: 'block',
                    background: 'white',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                  }}
                  title="Static Preview"
                  sandbox="allow-scripts"
                  onLoad={e => {
                    const iframe = e.currentTarget;
                    try {
                      const body = iframe.contentDocument?.body;
                      if (body) {
                        iframe.style.height = body.scrollHeight + 'px';
                      }
                      // Set initial direction
                      iframe.contentWindow?.postMessage(
                        { type: 'changeDirection', direction },
                        '*'
                      );
                    } catch (err) {
                      iframe.style.height = '300px';
                    }
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
          justifyContent: 'flex-end',
        }}
      >
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

      <iframe
        ref={iframeRef}
        srcDoc={srcdoc}
        style={{
          width: '100%',
          border: 'none',
          display: 'block',
          background: 'white',
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
        title="Preview"
        sandbox="allow-scripts"
        onLoad={e => {
          const iframe = e.currentTarget;
          try {
            const body = iframe.contentDocument?.body;
            if (body) {
              iframe.style.height = body.scrollHeight + 'px';
            }
            // Set initial direction
            iframe.contentWindow?.postMessage({ type: 'changeDirection', direction }, '*');
          } catch (err) {
            iframe.style.height = '200px';
          }
        }}
      />
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
