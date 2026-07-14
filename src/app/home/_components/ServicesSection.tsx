'use client';

import { Clock } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';

const SERVICES = [
  { id: 'neckTherapy', image: '/images/services/service1.jpg' },
  { id: 'hairWash', image: '/images/services/service2.jpg' },
  { id: 'heelScrub', image: '/images/services/service3.jpg' },
  { id: 'massage', image: '/images/services/service4.jpg' },
] as const;

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="dich-vu" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow={t('services.eyebrow')} title={t('services.title')} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ id, image }) => {
          const title = t(`services.items.${id}.title`);
          return (
            <article key={id} className="bg-cream flex flex-col overflow-hidden rounded-2xl">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5 text-center">
                <h3 className="text-olive font-serif text-lg font-bold tracking-wide uppercase">
                  {title}
                </h3>
                <div className="text-olive/60 flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {t(`services.items.${id}.duration`)}
                  </span>
                  <span className="text-olive text-lg font-bold">
                    {t(`services.items.${id}.price`)}
                  </span>
                </div>
                <p className="text-olive/60 flex-1 text-sm leading-relaxed">
                  {t(`services.items.${id}.desc`)}
                </p>
                <Button variant={'olive'} size={'sm'} className={'hover:bg-olive/10'}>
                  {t('common.viewDetails')}
                </Button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
