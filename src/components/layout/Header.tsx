import { Phone } from 'lucide-react';
import Image from 'next/image';

import { buttonVariants } from '@/components/ui/button';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from '@/config/constants';

import { MobileNav } from './MobileNav';

export default function Header() {
  return (
    <header className="bg-cream/95 border-olive/10 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#trang-chu" className="flex items-center gap-3">
          <span className="ring-brown/15 relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1">
            <Image
              src="/images/logo.jpg"
              alt={SITE_NAME}
              fill
              sizes="44px"
              className="scale-[1.9] object-cover object-[50%_28%]"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="text-brown block font-serif text-lg font-semibold tracking-wide">
              {SITE_NAME.toUpperCase()}
            </span>
            <span className="text-olive block text-[10px] font-medium tracking-[0.2em] uppercase">
              Relax &amp; Beauty
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-brown/80 hover:text-brown text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={PHONE_TEL}
            className="text-brown flex items-center gap-2 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
          <a href="#lien-he" className={buttonVariants('primary')}>
            Đặt lịch ngay
          </a>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
