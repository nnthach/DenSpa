'use client';

import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import {
  ServiceDetailModal,
  type ServiceDetail,
} from '@/components/features/service-detail/ServiceDetailModal';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { SERVICE_IDS, SERVICES_DATA, SERVICES_SECTION_LABELS } from './services-data';

export function ServicesSection() {
  const { t, locale } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const labels = SERVICES_SECTION_LABELS[locale];

  return (
    <section
      ref={ref}
      id="dich-vu"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <SectionHeading
        eyebrow={labels.eyebrow}
        title={labels.title}
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICE_IDS.map((id, index) => {
          const service = SERVICES_DATA[locale][id];
          return (
            <article
              key={id}
              className={cn(
                'bg-cream group hover:shadow-olive/15 flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl',
                inView ? 'animate-scaleIn' : 'opacity-0',
              )}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5 text-center">
                <h3 className="text-olive group-hover:text-brown font-serif text-lg font-bold tracking-wide uppercase transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="text-olive/60 flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {service.duration}
                  </span>
                  <span className="text-olive text-lg font-bold">{service.price}</span>
                </div>
                <p className="text-olive/60 flex-1 text-sm leading-relaxed">{service.desc}</p>
                <Button
                  variant={'olive'}
                  size={'sm'}
                  className={'hover:bg-olive/10'}
                  onClick={() => setSelectedService({ id, ...service })}
                >
                  {t('common.viewDetails')}
                </Button>
              </div>
            </article>
          );
        })}
      </div>

      <ServiceDetailModal
        service={selectedService}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
        signsTitle={labels.signsTitle}
        stepsTitle={labels.stepsTitle}
      />
    </section>
  );
}
