import { Clock } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';

const SERVICES = [
  {
    title: 'Trị liệu cổ vai gáy',
    duration: '60 phút',
    price: '199K',
    desc: 'Giảm đau, giảm căng cứng, phục hồi vận động, thư giãn tối đa.',
    image: '/images/services/service1.jpg',
  },
  {
    title: 'Gội đầu dưỡng sinh',
    duration: '60 phút',
    price: 'Từ 89K',
    desc: 'Khai thông kinh lạc, thư giãn đầu, chăm sóc tóc và da đầu khỏe mạnh.',
    image: '/images/services/service2.jpg',
  },
  {
    title: 'Chà gót chân',
    duration: '45 phút',
    price: 'Từ 89K',
    desc: 'Da mềm mịn, loại bỏ da chết, gót chân sạch đẹp, không nứt nẻ.',
    image: '/images/services/service3.jpg',
  },
  {
    title: 'Massage thư giãn',
    duration: '60 phút',
    price: '199K',
    desc: 'Giảm đau nhức toàn thân, thả lỏng cơ bắp, tái tạo năng lượng.',
    image: '/images/services/service4.jpg',
  },
];

export function ServicesSection() {
  return (
    <section id="dich-vu" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Bảng giá" title="Dịch vụ nổi bật" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, duration, price, desc, image }) => (
          <article key={title} className="bg-cream flex flex-col overflow-hidden rounded-2xl">
            <div className="relative aspect-4/3 w-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5 text-center">
              <h3 className="text-olive font-serif text-lg font-bold tracking-wide uppercase">
                {title}
              </h3>
              <div className="text-olive/60 flex items-center justify-between gap-3 text-sm">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {duration}
                </span>
                <span className="text-olive text-lg font-bold">{price}</span>
              </div>
              <p className="text-olive/60 flex-1 text-sm leading-relaxed">{desc}</p>
              <Button variant={'olive'} size={'sm'} className={'hover:bg-olive/10'}>
                Xem chi tiết
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
