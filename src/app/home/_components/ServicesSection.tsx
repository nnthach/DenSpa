'use client';

import { useState } from 'react';

import {
  ServiceDetailModal,
  type ServiceDetail,
} from '@/components/features/service-detail/ServiceDetailModal';
import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { ServicesCarousel } from './ServicesCarousel';

export function ServicesSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section
      ref={ref}
      id="dich-vu"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <SectionHeading
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />

      <div
        className={cn('mt-10', inView ? 'animate-fadeUp' : 'opacity-0')}
        style={{ animationDelay: '150ms' }}
      >
        <ServicesCarousel onSelect={setSelectedService} />
      </div>

      <ServiceDetailModal
        service={selectedService}
        onOpenChange={(open) => {
          if (!open) setSelectedService(null);
        }}
        signsTitle={t('services.signsTitle')}
        stepsTitle={t('services.stepsTitle')}
      />
    </section>
  );
}
