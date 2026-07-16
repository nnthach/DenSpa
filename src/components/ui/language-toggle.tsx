'use client';

import { Globe } from 'lucide-react';

import { useI18n } from '@/context/I18nContext';
import type { Locale } from '@/lib/translations';
import { cn } from '@/lib/utils';

const NEXT_LOCALE: Record<Locale, Locale> = { en: 'vi', vi: 'en' };

export default function LanguageToggle({ isScrolled }: { isScrolled?: boolean }) {
  const { locale, setLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={() => setLocale(NEXT_LOCALE[locale])}
      aria-label={`Switch language to ${NEXT_LOCALE[locale].toUpperCase()}`}
      className={cn(
        'group flex h-8 cursor-pointer items-center gap-1 rounded-full border px-2 text-xs font-medium tracking-wide uppercase transition-colors sm:h-auto sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-sm',
        isScrolled
          ? 'hover:border-primary hover:text-primary border-brown text-brown'
          : 'hover:border-primary hover:text-primary border-brown text-brown',
      )}
    >
      <Globe className="size-3.5 transition-transform duration-500 group-hover:rotate-180 sm:size-4" />
      <span>{locale}</span>
    </button>
  );
}
