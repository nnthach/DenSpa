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
        className={cn(inView ? 'animate-fadeInUp' : 'opacity-0')}
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-4">
        {PROBLEMS.map(({ id, Icon }, index) => (
          <div
            key={id}
            className={cn(
              'border-olive/15 bg-cream group flex items-center gap-4 rounded-2xl border px-6 py-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-olive/40 hover:bg-white hover:shadow-xl hover:shadow-olive/10',
              inView ? 'animate-fadeUp' : 'opacity-0',
            )}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <Icon
              className="text-brown h-10 w-10 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <div className="text-center">
              <h3 className="text-brown text-sm font-semibold tracking-wide uppercase">
                {t(`problems.items.${id}.title`)}
              </h3>
              <p className="text-brown/60 mt-1 text-sm leading-relaxed">
                {t(`problems.items.${id}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
