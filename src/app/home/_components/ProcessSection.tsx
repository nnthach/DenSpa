import { Calendar, Coffee, Heart, Search, Sparkles, UserCheck } from 'lucide-react';

import { SectionHeading } from '@/components/ui/section-heading';

const STEPS = [
  { Icon: Calendar, title: 'Đặt lịch', desc: 'Chọn dịch vụ phù hợp và đặt lịch trước.' },
  { Icon: UserCheck, title: 'Đón tiếp', desc: 'Đón tiếp chu đáo, không gian thân thiện.' },
  { Icon: Search, title: 'Thăm khám', desc: 'Kiểm tra tình trạng, tư vấn liệu trình.' },
  { Icon: Sparkles, title: 'Thực hiện', desc: 'Tiến hành trị liệu bài bản, chuyên sâu.' },
  { Icon: Coffee, title: 'Thư giãn', desc: 'Nghỉ ngơi, thưởng trà sau liệu trình.' },
  { Icon: Heart, title: 'Hoàn thành', desc: 'Dặn dò, chăm sóc sau trị liệu.' },
];

export function ProcessSection() {
  return (
    <section className="bg-olive/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Quy trình trị liệu chuyên nghiệp" />

        <div className="relative mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="bg-olive/20 absolute top-6 right-0 left-0 hidden h-px lg:block" />

          {STEPS.map(({ Icon, title, desc }, index) => (
            <div key={title} className="relative z-10 flex flex-col items-center text-center">
              <span className="bg-cream border-brown text-brown flex h-12 w-12 items-center justify-center rounded-full border-2">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="text-olive mt-2 text-[11px] font-semibold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-brown mt-1 text-xs font-semibold tracking-wide uppercase">
                {title}
              </h3>
              <p className="text-brown/60 mt-1 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
