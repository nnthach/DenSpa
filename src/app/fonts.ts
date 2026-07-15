import { Playfair_Display, Be_Vietnam_Pro, Dancing_Script } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-be-vietnam',
  display: 'swap',
});

export const handwriting = Dancing_Script({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500'],
  variable: '--font-handwriting',
  display: 'swap',
});
