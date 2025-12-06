'use client';

import React from 'react';

interface PreviewProps {
  children: React.ReactNode;
}

export function Preview({ children }: PreviewProps) {
  // Extract HTML from children
  let htmlContent = '';
  if (typeof children === 'string') {
    htmlContent = children;
  } else if (React.isValidElement(children)) {
    const props = children.props as any;
    if (props?.dangerouslySetInnerHTML?.__html) {
      htmlContent = props.dangerouslySetInnerHTML.__html;
    }
  }

  const srcdoc = `<!DOCTYPE html>
<html dir="rtl">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sdga-ui@latest/css/dga-ui.css">
  </head>
  <body style="margin:0;padding:1.5rem;background:white">
    ${htmlContent}
  </body>
</html>`;

  return (
    <div style={{ border: '1px solid #dee2e6', borderRadius: '0.375rem', margin: '1rem 0' }}>
      <iframe
        srcDoc={srcdoc}
        style={{ width: '100%', minHeight: '200px', border: 'none', display: 'block' }}
        title="Preview"
      />
    </div>
  );
}
