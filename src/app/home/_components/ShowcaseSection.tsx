'use client';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { TestimonialCarousel } from './TestimonialCarousel';

export function ShowcaseSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="review"
      className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8"
    >
      <SectionHeading
        eyebrow={t('showcase.eyebrow')}
        title={t('showcase.title')}
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />
      <p
        className={cn(
          'text-brown/60 mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed',
          inView ? 'animate-fadeInUp' : 'opacity-0',
        )}
        style={{ animationDelay: '150ms' }}
      >
        {t('showcase.subtitle')}
      </p>

      <div
        className={cn('mt-10', inView ? 'animate-fadeUp' : 'opacity-0')}
        style={{ animationDelay: '300ms' }}
      >
        <TestimonialCarousel />
      </div>
    </section>
  );
}
