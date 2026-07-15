import './globals.css';

import { env } from '@/config/env';
import { I18nProvider } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

import { beVietnamPro, playfair } from './fonts';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const TITLE = 'Den Spa – Thư giãn, chăm sóc, phục hồi';
const DESCRIPTION =
  'Den Spa – không gian riêng tư 1 khách/lần, liệu trình bài bản, thảo mộc tự nhiên tại Đà Nẵng. Massage thư giãn, gội đầu dưỡng sinh, trị liệu cổ vai gáy.';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Den Spa',
  },
  description: DESCRIPTION,
  keywords: [
    'Den Spa',
    'spa Đà Nẵng',
    'massage Đà Nẵng',
    'gội đầu dưỡng sinh',
    'trị liệu cổ vai gáy',
    'chăm sóc gót chân',
  ],
  authors: [{ name: 'Den Spa' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Den Spa',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/images/banner1.jpg', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/banner1.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="vi"
      className={cn(
        'scroll-smooth',
        playfair.variable,
        beVietnamPro.variable,
        'font-sans',
      )}
    >
      <body className="bg-light-cream text-brown font-sans antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
