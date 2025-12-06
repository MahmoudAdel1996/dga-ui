import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import packageJson from '../package.json';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>SDGA UI</span>
          <span
            style={{
              fontSize: '0.75rem',
              padding: '0.125rem 0.5rem',
              borderRadius: '9999px',
              background: '#e5e7eb',
              color: '#6b7280',
              fontWeight: '500',
            }}
          >
            v{packageJson.version}
          </span>
        </div>
      ) as any,
    },
  };
}
