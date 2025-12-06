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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Extract HTML from children
  let htmlContent = '';

  if (typeof children === 'string') {
    htmlContent = children;
  } else if (React.isValidElement(children)) {
    try {
      // Try to render React component to HTML string
      htmlContent = renderToStaticMarkup(children);
    } catch (e) {
      // Fallback to checking props
      const props = children.props as any;
      if (props?.dangerouslySetInnerHTML?.__html) {
        htmlContent = props.dangerouslySetInnerHTML.__html;
      } else if (props?.children) {
        htmlContent = extractHTMLFromChildren(props.children);
      }
    }
  }

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
      const instance = await WebContainer.boot();
      setWebcontainerInstance(instance);

      const htmlToUse = code || htmlContent;

      // Create files
      await instance.mount({
        'index.html': {
          file: {
            contents: generateFullHTML(htmlToUse),
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

  function generateFullHTML(content: string) {
    return `<!DOCTYPE html>
<html dir="${direction}" lang="${direction === 'rtl' ? 'ar' : 'en'}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>SDGA UI Preview</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css">
    <style>
      body {
        margin: 0;
        padding: 1.5rem;
        background: white;
        font-family: 'IBM Plex Sans Arabic', sans-serif;
      }
    </style>
  </head>
  <body>
    ${content}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>`;
  }

  const srcdoc = generateFullHTML(code || htmlContent);

  if (interactive) {
    return (
      <div
        className="preview-container"
        style={{
          border: '1px solid #dee2e6',
          borderRadius: '0.375rem',
          margin: '1rem 0',
          overflow: 'hidden',
          background: 'white',
        }}
      >
        {/* Tabs */}
        <div
          style={{
            borderBottom: '1px solid #dee2e6',
            background: '#f8f9fa',
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem',
          }}
        >
          <button
            onClick={() => setActiveTab('preview')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              background: activeTab === 'preview' ? 'white' : 'transparent',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontWeight: activeTab === 'preview' ? '600' : '400',
              transition: 'all 0.2s',
            }}
          >
            معاينة
          </button>
          <button
            onClick={() => setActiveTab('code')}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              background: activeTab === 'code' ? 'white' : 'transparent',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontWeight: activeTab === 'code' ? '600' : '400',
              transition: 'all 0.2s',
            }}
          >
            الكود
          </button>
          
          {/* Direction Toggle */}
          <button
            onClick={() => setDirection(prev => prev === 'rtl' ? 'ltr' : 'rtl')}
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
                padding: '0.5rem 1rem',
                border: 'none',
                background: 'transparent',
                borderRadius: '0.25rem',
                cursor: url ? 'pointer' : 'not-allowed',
                marginLeft: 'auto',
                opacity: url ? 1 : 0.5,
              }}
              title="فتح في نافذة جديدة"
            >
              ↗️
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
                  minHeight: '300px',
                  height: '400px',
                  border: 'none',
                  display: 'block',
                  background: 'white',
                }}
                title="WebContainer Preview"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              />
            ) : (
              !isLoading && (
                <iframe
                  srcDoc={srcdoc}
                  style={{
                    width: '100%',
                    minHeight: '300px',
                    border: 'none',
                    display: 'block',
                    background: 'white',
                  }}
                  title="Static Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              )
            )}
          </div>
        )}

        {activeTab === 'code' && (
          <div
            style={{
              padding: '1rem',
              background: '#1e1e1e',
              color: '#d4d4d4',
              fontFamily: 'monospace',
              fontSize: '14px',
              maxHeight: '500px',
              overflow: 'auto',
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
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
        border: '1px solid #dee2e6',
        borderRadius: '0.375rem',
        margin: '1rem 0',
        overflow: 'hidden',
        background: 'white',
      }}
    >
      {/* Direction Toggle for Simple Preview */}
      <div
        style={{
          borderBottom: '1px solid #dee2e6',
          background: '#f8f9fa',
          display: 'flex',
          padding: '0.5rem',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={() => setDirection(prev => prev === 'rtl' ? 'ltr' : 'rtl')}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #dee2e6',
            background: 'white',
            borderRadius: '0.25rem',
            cursor: 'pointer',
            fontWeight: '500',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          title={direction === 'rtl' ? 'Switch to LTR' : 'Switch to RTL'}
        >
          <span style={{ fontSize: '16px' }}>{direction === 'rtl' ? '→' : '←'}</span>
          <span>{direction === 'rtl' ? 'RTL' : 'LTR'}</span>
        </button>
      </div>
      
      <iframe
        srcDoc={srcdoc}
        style={{
          width: '100%',
          minHeight: '200px',
          border: 'none',
          display: 'block',
          background: 'white',
        }}
        title="Preview"
        sandbox="allow-scripts allow-same-origin"
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
