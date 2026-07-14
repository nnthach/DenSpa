'use client';

import { Flower2, Leaf, Lock, User } from 'lucide-react';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const FEATURES = [
  { id: 'singleGuest', Icon: User },
  { id: 'privateSpace', Icon: Lock },
  { id: 'technique', Icon: Flower2 },
  { id: 'herbal', Icon: Leaf },
] as const;

export function DifferentiatorsSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} id="ve-chung-toi" className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div
          className={cn(
            'relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg',
            inView ? 'animate-fadeInLeft' : 'opacity-0',
          )}
        >
          <Image
            src="/images/store/store2.png"
            alt="Không gian trị liệu tại Den Spa"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className={cn(inView ? 'animate-fadeInRight' : 'opacity-0')}
          style={{ animationDelay: '150ms' }}
        >
          <SectionHeading title={t('differentiators.title')} align="left" />

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
            {FEATURES.map(({ id, Icon }) => (
              <div key={id}>
                <Icon className="text-olive h-7 w-7" strokeWidth={1.5} />
                <h3 className="text-brown mt-3 text-sm font-semibold">
                  {t(`differentiators.features.${id}.title`)}
                </h3>
                <p className="text-brown/60 mt-1 text-xs leading-relaxed">
                  {t(`differentiators.features.${id}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <p className="text-brown/70 border-olive/30 mt-8 border-l-2 pl-4 font-serif text-lg italic">
            &ldquo;{t('differentiators.quote')}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
