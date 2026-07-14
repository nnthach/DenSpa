import './globals.css';


import { FloatingContact } from '@/components/layout/FloatingContact';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { beVietnamPro, playfair } from './fonts';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Den Spa – Thư giãn, chăm sóc, phục hồi',
  description:
    'Den Spa – không gian riêng tư 1 khách/lần, liệu trình bài bản, thảo mộc tự nhiên tại Đà Nẵng.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" className={`${playfair.variable} ${beVietnamPro.variable} scroll-smooth`}>
      <body className="bg-cream text-brown font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
