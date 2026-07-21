'use client';

import { ChevronLeft, ChevronRight, Droplet } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { SHAMPOO_IMAGES, SHAMPOO_PRODUCTS, SHAMPOO_PRODUCT_IDS } from '../_data/shampoo-data';

const AUTOPLAY_INTERVAL_MS = 4500;

function getVisibleCount(width: number) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

function formatPrice(price: number) {
  return `${price.toLocaleString('vi-VN')}đ`;
}

export function ShampooSection() {
  const { t, locale } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();
  const products = SHAMPOO_PRODUCTS[locale];
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const isHoveringRef = useRef(false);

  const maxIndex = Math.max(0, products.length - visibleCount);
  const stepPercent = 100 / visibleCount;

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount(window.innerWidth));
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(0, products.length - visibleCount)));
  }, [visibleCount, products.length]);

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
    <section ref={ref} className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <SectionHeading
        eyebrow={t('shampoos.eyebrow')}
        title={t('shampoos.title')}
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />

      <div
        className={cn('mt-10', inView ? 'animate-fadeUp' : 'opacity-0')}
        style={{ animationDelay: '150ms' }}
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
            {SHAMPOO_PRODUCT_IDS.map((id, index) => {
              const product = products[index];
              if (!product) return null;

              return (
                <div key={id} className="shrink-0 px-3" style={{ width: `${stepPercent}%` }}>
                  <article className="bg-cream group relative flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                    <div className="relative aspect-3/4 w-full overflow-hidden">
                      <Image
                        src={SHAMPOO_IMAGES[id]}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4 text-center">
                      <h3 className="text-olive min-h-10 font-serif text-base font-bold tracking-wide uppercase">
                        {product.name}
                      </h3>

                      <div className="text-olive flex items-center justify-between px-6 text-xs">
                        <span className="flex items-center gap-1">
                          <Droplet className="mb-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.5} />
                          {product.volume}
                        </span>
                        <span className="text-sm font-bold">{formatPrice(product.price)}</span>
                      </div>

                      <div className="text-olive flex items-center justify-center gap-2 text-xs">
                        <span className="flex items-center gap-1">
                          <Image
                            src="/icons/shampoo_icon.png"
                            alt={t('shampoos.shampooLabel')}
                            width={18}
                            height={18}
                          />
                          {product.includes.shampoo} {t('shampoos.shampooLabel')}
                        </span>
                        <span>+</span>
                        <span className="flex items-center gap-1">
                          <Image
                            src="/icons/air.png"
                            alt={t('shampoos.conditionerLabel')}
                            width={18}
                            height={18}
                          />
                          {product.includes.conditioner} {t('shampoos.conditionerLabel')}
                        </span>
                      </div>
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
    </section>
  );
}
