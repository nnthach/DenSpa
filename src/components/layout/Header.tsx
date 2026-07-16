'use client';

import { Menu, Phone } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS, PHONE_DISPLAY, SITE_NAME } from '@/config/constants';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

import LanguageToggle from '../ui/language-toggle';

export default function Header() {
  const { t } = useI18n();
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
                'block font-serif text-lg font-semibold tracking-wide transition-colors',
                isScrolled ? 'text-brown' : 'text-gold',
              )}
            >
              {SITE_NAME.toUpperCase()}
            </span>
            <span
              className={cn(
                'block text-[10px] font-medium tracking-[0.2em] uppercase transition-colors',
                isScrolled ? 'text-olive' : 'text-white',
              )}
            >
              {t('header.tagline')}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                'text-xs font-semibold tracking-widest uppercase transition-colors',
                isScrolled ? 'text-brown/80 hover:text-brown' : 'text-white/90 hover:text-white',
              )}
            >
              {t(`nav.${link.id}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle isScrolled={isScrolled} />
          <Button
            size={'sm'}
            className={cn(
              isScrolled
                ? ''
                : 'border-gold/70 text-cream/70 hover:border-gold hover:text-cream border bg-transparent hover:bg-transparent',
            )}
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </Button>
        </div>

        <div className="flex items-center lg:hidden">
          <LanguageToggle isScrolled={isScrolled} />

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger
              aria-label={t('header.openMenu')}
              className={cn(
                'hover:bg-brown/10 flex h-11 w-11 items-center justify-center rounded-lg transition-colors',
                isScrolled ? 'text-brown' : 'text-cream',
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
                    key={link.id}
                    nativeButton={false}
                    render={
                      <a
                        href={link.href}
                        className="text-brown border-olive/10 border-b py-3 text-sm font-medium tracking-wide uppercase"
                      />
                    }
                  >
                    {t(`nav.${link.id}`)}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 px-4 pb-6">
                <Button>
                  <Phone className="h-4 w-4" />
                  {PHONE_DISPLAY}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
