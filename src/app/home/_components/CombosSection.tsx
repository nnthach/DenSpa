'use client';

import { Crown } from 'lucide-react';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

import { COMBO_IDS, COMBO_IMAGES, COMBOS_DATA } from '../_data/combo-data';

export function CombosSection() {
  const { t, locale } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();
  const combos = COMBOS_DATA[locale];

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <SectionHeading
        eyebrow={t('combos.eyebrow')}
        title={t('combos.title')}
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {COMBO_IDS.map((id, index) => {
          const combo = combos[id];
          return (
            <div
              key={id}
              className={cn(
                'group relative aspect-3/4 overflow-hidden rounded-3xl shadow-sm transition-shadow duration-300 hover:shadow-2xl',
                combo.isVip && 'ring-gold/70 ring-2',
                inView ? 'animate-scaleIn' : 'opacity-0',
              )}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <Image
                src={COMBO_IMAGES[id]}
                alt={combo.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/10 transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/60" />

              <span
                className={cn(
                  'absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold shadow-sm backdrop-blur-sm',
                  combo.isVip
                    ? 'bg-gold border-gold text-brown'
                    : 'border-cream/40 text-cream bg-black/30',
                )}
              >
                {combo.isVip ? (
                  <Crown className="h-4 w-4" strokeWidth={1.75} />
                ) : (
                  String(index + 1).padStart(2, '0')
                )}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex flex-col p-6 text-center transition-transform duration-300 group-hover:-translate-y-1">
                <h3
                  className={cn(
                    'text-lg font-bold tracking-wide uppercase',
                    combo.isVip ? 'text-gold' : 'text-cream',
                  )}
                >
                  {combo.title}
                </h3>
                <p className="text-cream/70 mt-1 text-xs leading-relaxed">{combo.subtitle}</p>

                <ul className="mt-4 space-y-2">
                  {combo.items.map((item) => (
                    <li
                      key={`${item.name}-${item.duration}`}
                      className="text-cream/85 flex items-center justify-center gap-2 text-sm"
                    >
                      <span>
                        {item.name} {item.duration}
                      </span>
                    </li>
                  ))}
                </ul>

                <p
                  className={cn(
                    'mt-4 text-2xl font-bold',
                    combo.isVip ? 'text-gold' : 'text-cream',
                  )}
                >
                  {combo.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
