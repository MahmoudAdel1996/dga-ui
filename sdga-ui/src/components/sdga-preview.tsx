'use client';

import { useEffect, useRef, useState } from 'react';

interface SdgaPreviewProps {
  html: string;
  minHeight?: string;
}

// Preload resources once for all previews
if (typeof window !== 'undefined') {
  const preloadCSS = document.createElement('link');
  preloadCSS.rel = 'preload';
  preloadCSS.as = 'style';
  preloadCSS.href = 'https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css';
  
  const preloadJS = document.createElement('link');
  preloadJS.rel = 'preload';
  preloadJS.as = 'script';
  preloadJS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js';
  
  if (!document.querySelector(`link[href="${preloadCSS.href}"]`)) {
    document.head.appendChild(preloadCSS);
    document.head.appendChild(preloadJS);
  }
}

export function SdgaPreview({ html, minHeight = '150px' }: SdgaPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy load iframe when it enters viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Load 200px before entering viewport
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const iframe = iframeRef.current;
    if (!iframe) return;

    const content = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css">
<style>body{margin:0;padding:1.5rem;background:transparent;overflow-x:hidden}</style>
</head>
<body>${html}<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"><\/script><script>let t;function r(){clearTimeout(t);t=setTimeout(()=>window.parent.postMessage({type:'resize',height:document.body.scrollHeight},'*'),150)}window.addEventListener('load',()=>setTimeout(r,100));if(!window.__RO_DISABLED__){const o=new MutationObserver(()=>requestAnimationFrame(r));o.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style']})}<\/script></body></html>`;

    iframe.srcdoc = content;
  }, [html, isVisible]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'resize' && iframeRef.current) {
        iframeRef.current.style.height = `${event.data.height + 10}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight }}>
      {isVisible ? (
        <iframe
          ref={iframeRef}
          className="w-full border border-neutral-200 dark:border-neutral-800 rounded-lg"
          style={{ minHeight, border: '1px solid rgb(229 229 229)', borderRadius: '0.5rem' }}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          title="SDGA UI Preview"
        />
      ) : (
        <div 
          className="w-full border border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center justify-center"
          style={{ minHeight, background: '#f9fafb' }}
        >
          <span className="text-neutral-400">Loading preview...</span>
        </div>
      )}
    </div>
  );
}
