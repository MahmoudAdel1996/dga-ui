import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mahmoudadel1996.github.io/dga-ui'),
  title: {
    default: 'SDGA UI Documentation',
    template: '%s | SDGA UI',
  },
  description:
    'Professional Bootstrap theme for Saudi Digital Government Authority applications with built-in RTL support',
  keywords: [
    'sdga',
    'sdga-ui',
    'dga',
    'dga-ui',
    'saudi government design',
    'bootstrap theme',
    'rtl',
    'arabic',
    'design system',
  ],
  authors: [
    {
      name: 'Mahmoud Adel',
      url: 'https://github.com/MahmoudAdel1996',
    },
  ],
  creator: 'Mahmoud Adel',
  publisher: 'Mahmoud Adel',
  applicationName: 'SDGA UI',
  openGraph: {
    title: 'SDGA UI Documentation',
    description:
      'Professional Bootstrap theme for Saudi Digital Government Authority applications with built-in RTL support',
    url: 'https://mahmoudadel1996.github.io/dga-ui',
    siteName: 'SDGA UI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDGA UI Documentation',
    description:
      'Professional Bootstrap theme for Saudi Digital Government Authority applications with built-in RTL support',
    creator: '@MahmoudAdel1996',
  },
  category: 'technology',
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
              api: `${basePath}/api/search`,
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
