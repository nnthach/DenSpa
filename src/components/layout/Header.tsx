'use client';

import { Menu, Phone } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from '@/config/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        isScrolled ? 'bg-cream/95 border-olive/10 border-b shadow-sm backdrop-blur' : 'text-brown',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#trang-chu" className="flex items-center gap-3">
          <span
            className={cn(
              'ring-brown/15 relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 transition-colors',
            )}
          >
            <Image
              src="/images/logo.jpg"
              alt={SITE_NAME}
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                'text-brown block font-serif text-lg font-semibold tracking-wide transition-colors',
              )}
            >
              {SITE_NAME.toUpperCase()}
            </span>
            <span
              className={cn(
                'text-olive block text-[10px] font-medium tracking-[0.2em] uppercase transition-colors',
              )}
            >
              Relax &amp; Beauty
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'text-xs font-semibold tracking-widest uppercase transition-colors',
                isScrolled ? 'text-brown/80 hover:text-brown' : 'text-black/90 hover:text-black',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size={'sm'} variant="cream">
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </Button>
          <Button size={'sm'}>Đặt lịch ngay</Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              aria-label="Mở menu"
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-lg transition-colors',
                isScrolled ? 'text-brown hover:bg-brown/10' : 'text-white hover:bg-white/10',
              )}
            >
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="right" className="bg-cream flex w-72 max-w-[80vw] flex-col gap-6">
              <SheetHeader>
                <SheetTitle className="text-brown font-serif">{SITE_NAME}</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="text-brown border-olive/10 border-b py-3 text-sm font-medium tracking-wide uppercase"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 px-4 pb-6">
                <a
                  href={PHONE_TEL}
                  className="text-brown flex items-center gap-2 text-sm font-medium"
                >
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </a>

                <SheetClose
                  nativeButton={false}
                  render={<a href="#lien-he" className={buttonVariants({ className: 'w-full' })} />}
                >
                  Đặt lịch ngay
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
