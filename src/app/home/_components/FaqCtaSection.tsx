'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { PHONE_DISPLAY, ZALO_URL } from '@/config/constants';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { FaqAccordion } from './FaqAccordion';

export function FaqCtaSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
        <div className={cn(inView ? 'animate-fadeInLeft' : 'opacity-0')}>
          <SectionHeading title={t('faqCta.faqTitle')} align="left" />
          <div className="mt-6">
            <FaqAccordion />
          </div>
        </div>

        <div
          className={cn(
            'relative overflow-hidden rounded-3xl',
            inView ? 'animate-fadeInRight' : 'opacity-0',
          )}
          style={{ animationDelay: '150ms' }}
        >
          <Image
            src="/images/faq.png"
            alt="Không gian thư giãn tại Den Spa"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          {inView ? (
            <div className="animate-circuitFlow via-cream/25 pointer-events-none absolute top-0 h-full w-1/4 -skew-x-12 bg-gradient-to-r from-transparent to-transparent" />
          ) : null}
          <div className="relative flex h-full flex-col justify-center gap-5 p-8 sm:p-10">
            <h3 className="text-cream font-serif text-2xl font-semibold sm:w-[55%] sm:text-2xl">
              {t('faqCta.ctaTitle')}
            </h3>
            <p className="text-cream/80 text-sm leading-relaxed sm:w-[55%]">
              {t('faqCta.ctaSubtitle')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={ZALO_URL}>
                <Button className={'bg-black/50 hover:bg-black/80'}>
                  {t('common.bookViaZalo')}
                </Button>
              </Link>

              <Button variant={'cream'}>{PHONE_DISPLAY}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
