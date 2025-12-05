import React from 'react';

interface PreviewProps {
  children: React.ReactNode;
}

export function Preview({ children }: PreviewProps) {
  return (
    <div className="p-4 border rounded bg-fd-background">
      {children}
    </div>
  );
}
