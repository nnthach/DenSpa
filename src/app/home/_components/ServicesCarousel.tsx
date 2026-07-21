'use client';

import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { type ServiceDetail } from '@/components/features/service-detail/ServiceDetailModal';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';

import { SERVICE_IDS, SERVICES_DATA } from '../_data/services-data';

const AUTOPLAY_INTERVAL_MS = 4500;

function getVisibleCount(width: number) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

type ServicesCarouselProps = {
  onSelect: (service: ServiceDetail) => void;
};

// Client leaf: carousel dịch vụ tự trượt — cùng cơ chế với TestimonialCarousel (transform theo %).
export function ServicesCarousel({ onSelect }: ServicesCarouselProps) {
  const { t, locale } = useI18n();
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHoveringRef = useRef(false);

  const maxIndex = Math.max(0, SERVICE_IDS.length - visibleCount);
  const stepPercent = 100 / visibleCount;

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount(window.innerWidth));
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, SERVICE_IDS.length - visibleCount)));
  }, [visibleCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isHoveringRef.current) return;
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const goPrev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  const goNext = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

  return (
    <div
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
    >
      <div className="overflow-hidden py-2">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * stepPercent}%)` }}
        >
          {SERVICE_IDS.map((id) => {
            const service = SERVICES_DATA[locale][id];
            return (
              <div key={id} className="shrink-0 px-3" style={{ width: `${stepPercent}%` }}>
                <article className="bg-cream group hover:shadow-olive/15 flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
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
                      <span className="flex items-center gap-1 text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {service.duration}
                      </span>
                      <span className="text-olive text-base font-bold">{service.price}</span>
                    </div>
                    <p className="text-olive/60 flex-1 text-sm leading-relaxed">{service.desc}</p>
                    <Button
                      variant={'olive'}
                      size={'sm'}
                      className={'hover:bg-olive/10'}
                      onClick={() => onSelect({ id, ...service })}
                    >
                      {t('common.viewDetails')}
                    </Button>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous"
          className="border-olive/30 text-olive hover:bg-olive/10 flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              aria-label={`Go to slide ${dotIndex + 1}`}
              onClick={() => setActiveIndex(dotIndex)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                dotIndex === activeIndex ? 'bg-olive w-6' : 'bg-olive/25 w-1.5',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next"
          className="border-olive/30 text-olive hover:bg-olive/10 flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
