'use client';

import { Bone, Footprints, Moon, Sparkles } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';
import { useI18n } from '@/context/I18nContext';

const PROBLEMS = [
  { id: 'neckPain', Icon: Bone },
  { id: 'stress', Icon: Moon },
  { id: 'dullSkin', Icon: Sparkles },
  { id: 'crackedHeels', Icon: Footprints },
] as const;

export function ProblemsSection() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title={t('problems.title')} />

      <div className="mt-10 grid gap-5 sm:grid-cols-4">
        {PROBLEMS.map(({ id, Icon }) => (
          <div
            key={id}
            className="border-olive/15 bg-cream flex items-center gap-4 rounded-2xl border px-6 py-6"
          >
            <Icon className="text-brown h-10 w-10 shrink-0" strokeWidth={1.5} />
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
