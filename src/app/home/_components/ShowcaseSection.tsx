import { ImagePlaceholder } from '@/components/ui/image-placeholder';

import { TestimonialCarousel } from './TestimonialCarousel';

const GALLERY_LABELS = ['Phòng trị liệu', 'Không gian chờ', 'Góc thư giãn', 'Khu vực chăm sóc'];

export function ShowcaseSection() {
  return (
    <section id="review" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="border-olive/15 rounded-2xl border p-6">
          <h3 className="text-brown text-sm font-semibold tracking-widest uppercase">
            Không gian ấm cúng
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {GALLERY_LABELS.map((label) => (
              <ImagePlaceholder key={label} label={label} className="aspect-square rounded-lg" />
            ))}
          </div>
          <a
            href="#lien-he"
            className="text-brown mt-4 block text-center text-xs font-semibold tracking-wide uppercase underline-offset-4 hover:underline"
          >
            Xem thêm hình ảnh
          </a>
        </div>

        <div className="border-olive/15 rounded-2xl border p-6">
          <h3 className="text-brown text-sm font-semibold tracking-widest uppercase">
            Kết quả thật – Hiệu quả thật
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="relative">
              <ImagePlaceholder label="Trước" className="aspect-[3/4] rounded-lg" />
              <span className="bg-brown text-cream absolute top-2 left-2 rounded px-2 py-0.5 text-[10px] font-semibold">
                TRƯỚC
              </span>
            </div>
            <div className="relative">
              <ImagePlaceholder label="Sau" className="aspect-[3/4] rounded-lg" />
              <span className="bg-olive text-cream absolute top-2 left-2 rounded px-2 py-0.5 text-[10px] font-semibold">
                SAU
              </span>
            </div>
          </div>
          <a
            href="#lien-he"
            className="text-brown mt-4 block text-center text-xs font-semibold tracking-wide uppercase underline-offset-4 hover:underline"
          >
            Xem thêm kết quả
          </a>
        </div>

        <div className="border-olive/15 rounded-2xl border p-6">
          <h3 className="text-brown text-sm font-semibold tracking-widest uppercase">
            Khách hàng nói gì về Den Spa
          </h3>
          <div className="mt-4">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
