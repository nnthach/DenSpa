import { Bone, Footprints, Moon, Sparkles } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';

const PROBLEMS = [
  {
    Icon: Bone,
    title: 'Đau cổ vai gáy',
    desc: 'Ngồi máy tính nhiều, lái xe, làm việc văn phòng lâu ngày.',
  },
  {
    Icon: Moon,
    title: 'Căng thẳng, mệt mỏi',
    desc: 'Thiếu ngủ, stress kéo dài, cơ thể uể oải, khó thư giãn.',
  },
  {
    Icon: Sparkles,
    title: 'Sạm da, thiếu tự tin',
    desc: 'Làn da xỉn màu, thiếu sức sống do khói bụi, áp lực công việc.',
  },
  {
    Icon: Footprints,
    title: 'Da chân khô ráp',
    desc: 'Gót chân nứt nẻ, chai sần, mất tự tin với đôi chân.',
  },
];

export function ProblemsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading title="Bạn có đang..." />

      <div className="mt-10 grid gap-5 sm:grid-cols-4">
        {PROBLEMS.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="border-olive/15 bg-cream flex items-center gap-4 rounded-2xl border px-6 py-6"
          >
            <Icon className="text-brown h-10 w-10 shrink-0" strokeWidth={1.5} />
            <div className="text-center">
              <h3 className="text-brown text-sm font-semibold tracking-wide uppercase">{title}</h3>
              <p className="text-brown/60 mt-1 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
