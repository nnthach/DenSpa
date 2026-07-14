import { Clock } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { SectionHeading } from '@/components/ui/section-heading';

const SERVICES = [
  {
    title: 'Trị liệu cổ vai gáy',
    duration: '60 phút',
    price: '199K',
    desc: 'Giảm đau, giảm căng cứng, phục hồi vận động, thư giãn tối đa.',
    featured: true,
  },
  {
    title: 'Gội đầu dưỡng sinh',
    duration: '60 phút',
    price: 'Từ 89K',
    desc: 'Khai thông kinh lạc, thư giãn đầu, chăm sóc tóc và da đầu khỏe mạnh.',
    featured: false,
  },
  {
    title: 'Chà gót chân',
    duration: '45 phút',
    price: 'Từ 89K',
    desc: 'Da mềm mịn, loại bỏ da chết, gót chân sạch đẹp, không nứt nẻ.',
    featured: false,
  },
  {
    title: 'Massage thư giãn',
    duration: '60 phút',
    price: '199K',
    desc: 'Giảm đau nhức toàn thân, thả lỏng cơ bắp, tái tạo năng lượng.',
    featured: false,
  },
];

export function ServicesSection() {
  return (
    <section id="dich-vu" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Bảng giá" title="Dịch vụ nổi bật" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, duration, price, desc, featured }) => (
          <article
            key={title}
            className="border-olive/15 flex flex-col overflow-hidden rounded-2xl border"
          >
            <div className="relative">
              <ImagePlaceholder label={title} className="aspect-[4/3] w-full" />
              {featured ? (
                <span className="bg-brown text-cream absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide uppercase">
                  Dịch vụ chủ lực
                </span>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-brown text-sm font-semibold tracking-wide uppercase">
                {title}
              </h3>
              <div className="text-brown/60 mt-2 flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {duration}
                </span>
                <span className="text-olive font-semibold">{price}</span>
              </div>
              <p className="text-brown/60 mt-3 flex-1 text-xs leading-relaxed">{desc}</p>
              <a
                href="#lien-he"
                className={buttonVariants('outline', 'mt-5 w-full text-xs')}
              >
                Xem chi tiết
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
