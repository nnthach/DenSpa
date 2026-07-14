'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';

import { TestimonialCarousel } from './TestimonialCarousel';

export function ShowcaseSection() {
  const { t } = useI18n();

  return (
    <section id="review" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t('showcase.eyebrow')} title={t('showcase.title')} />
      <p className="text-brown/60 mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed">
        {t('showcase.subtitle')}
      </p>

      <div className="mt-10">
        <TestimonialCarousel />
      </div>
    </section>
  );
}
