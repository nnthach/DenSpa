'use client';

import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useI18n } from '@/context/I18nContext';

const TESTIMONIAL_IDS = [
  'ngocAnh',
  'thuTrang',
  'minhKhue',
  'haiYen',
  'phuongLinh',
  'ducAnh',
] as const;

const AUTOPLAY_INTERVAL_MS = 4000;

function getVisibleCount(width: number) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export function TestimonialCarousel() {
  const { t } = useI18n();
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHoveringRef = useRef(false);

  const maxIndex = Math.max(0, TESTIMONIAL_IDS.length - visibleCount);
  const centerSlot = Math.floor((visibleCount - 1) / 2);
  const stepPercent = 100 / visibleCount;

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount(window.innerWidth));
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, TESTIMONIAL_IDS.length - visibleCount)));
  }, [visibleCount]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isHoveringRef.current) return;
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
    >
      <div className="overflow-hidden py-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * stepPercent}%)` }}
        >
          {TESTIMONIAL_IDS.map((id, index) => {
            const name = t(`showcase.testimonials.${id}.name`);
            const isActive = index === activeIndex + centerSlot;

            return (
              <div key={id} className="shrink-0 px-3" style={{ width: `${stepPercent}%` }}>
                <div
                  className={`bg-cream h-full rounded-2xl p-6 transition-all duration-500 ${
                    isActive ? 'scale-105 opacity-100 shadow-lg' : 'scale-95 opacity-60'
                  }`}
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="fill-olive text-olive h-4 w-4" />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="bg-olive/15 text-olive flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold">
                      {name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-brown text-sm font-semibold">{name}</p>
                      <p className="text-brown/50 text-xs">
                        {t(`showcase.testimonials.${id}.role`)}
                      </p>
                    </div>
                  </div>

                  <p className="text-brown/70 mt-4 text-sm leading-relaxed">
                    “{t(`showcase.testimonials.${id}.quote`)}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
