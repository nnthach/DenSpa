'use client';

import Image from 'next/image';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { ALA_CARTE_ITEMS } from '../_data/ala-carte-data';

export function AlaCarteSection() {
  const { t, locale } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();
  const items = ALA_CARTE_ITEMS[locale];

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div
        className={cn(
          'bg-cream mx-auto rounded-2xl px-6 py-10 sm:px-10',
          inView ? 'animate-fadeUp' : 'opacity-0',
        )}
      >
        <SectionHeading
          eyebrow={t('alaCarte.eyebrow')}
          title={t('alaCarte.title')}
          className="mb-1"
        />

        <div className="custom-scrollbar mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-6 lg:-mx-6 lg:flex lg:flex-nowrap lg:justify-center lg:gap-12 lg:overflow-x-auto lg:px-6 lg:pb-2">
          {items.map(({ id, name, price, image }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-3 text-center lg:w-24 lg:shrink-0"
            >
              <span className="border-olive/30 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border">
                <Image src={image} alt={name} width={32} height={32} className="object-contain" />
              </span>
              <div>
                <p className="text-brown text-[11px] font-semibold tracking-wide uppercase">
                  {name}
                </p>
                <p className="text-olive mt-1 text-sm font-bold">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
