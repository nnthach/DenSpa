import './globals.css';

import { Geist } from 'next/font/google';

import { cn } from '@/lib/utils';

import { beVietnamPro, playfair } from './fonts';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Den Spa – Thư giãn, chăm sóc, phục hồi',
  description:
    'Den Spa – không gian riêng tư 1 khách/lần, liệu trình bài bản, thảo mộc tự nhiên tại Đà Nẵng.',
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
        geist.variable,
      )}
    >
      <body className="bg-light-cream text-brown font-sans antialiased">{children}</body>
    </html>
  );
}
