'use client';

import { Bone, Footprints, Moon, Sparkles } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const PROBLEMS = [
  { id: 'neckPain', Icon: Bone },
  { id: 'stress', Icon: Moon },
  { id: 'dullSkin', Icon: Sparkles },
  { id: 'crackedHeels', Icon: Footprints },
] as const;

export function ProblemsSection() {
  const { t } = useI18n();
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        title={t('problems.title')}
        eyebrow={t('problems.eyebrow')}
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-4">
        {PROBLEMS.map(({ id }, index) => (
          <div
            key={id}
            className={cn(
              'border-olive/15 bg-cream group hover:border-olive/40 hover:shadow-olive/10 relative flex items-center gap-4 rounded-2xl border px-6 py-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl',
              inView ? 'animate-fadeUp' : 'opacity-0',
            )}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="border-brown/40 pointer-events-none absolute inset-1 rounded-xl border" />

            <div className="text-center">
              <h3 className="text-brown text-sm font-bold tracking-wide uppercase">
                {t(`problems.items.${id}.title`)}
              </h3>
              <p className="text-olive mt-1 text-xs leading-relaxed">
                {t(`problems.items.${id}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
