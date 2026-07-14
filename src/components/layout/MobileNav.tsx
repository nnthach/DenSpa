'use client';

import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from '@/config/constants';

// Client leaf: chỉ phần menu mobile cần state đóng/mở.
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Mở menu"
        aria-expanded={isOpen}
        className="text-brown flex h-11 w-11 cursor-pointer items-center justify-center"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div className="bg-cream relative ml-auto flex h-full w-72 max-w-[80vw] flex-col gap-6 p-6 shadow-xl">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Đóng menu"
              className="text-brown flex h-11 w-11 cursor-pointer items-center justify-center self-end"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-brown border-olive/10 border-b py-3 text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a href={PHONE_TEL} className="text-brown flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>

            <a
              href="#lien-he"
              onClick={() => setIsOpen(false)}
              className={buttonVariants('primary', 'w-full')}
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
