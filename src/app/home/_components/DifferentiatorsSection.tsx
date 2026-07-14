import { Flower2, Leaf, Lock, User } from 'lucide-react';
import Image from 'next/image';

import { SectionHeading } from '@/components/ui/section-heading';

const FEATURES = [
  { Icon: User, title: '1 khách/lần', desc: 'Không xếp hàng, không ồn ào' },
  { Icon: Lock, title: 'Không gian riêng tư', desc: 'Yên tĩnh, ấm cúng, thư giãn tuyệt đối' },
  { Icon: Flower2, title: 'Kỹ thuật chuyên sâu', desc: 'Liệu trình bài bản, hiệu quả rõ rệt' },
  { Icon: Leaf, title: 'Thảo mộc tự nhiên', desc: 'An toàn, lành tính, thân thiện với da' },
];

export function DifferentiatorsSection() {
  return (
    <section id="ve-chung-toi" className="bg-olive/5 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/store.png"
            alt="Không gian trị liệu tại Den Spa"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading title="Điều làm Den Spa khác biệt" align="left" />

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
            {FEATURES.map(({ Icon, title, desc }) => (
              <div key={title}>
                <Icon className="text-olive h-7 w-7" strokeWidth={1.5} />
                <h3 className="text-brown mt-3 text-sm font-semibold">{title}</h3>
                <p className="text-brown/60 mt-1 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-brown/70 border-olive/30 mt-8 border-l-2 pl-4 font-serif text-lg italic">
            &ldquo;Đến Den Spa, không chỉ để thư giãn, mà để cơ thể được lắng nghe và phục
            hồi.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
