import { ImageIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

// Primitive "dumb": ô giữ chỗ cho hình ảnh thật (dịch vụ, gallery, avatar) chưa được cung cấp.
export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'from-olive/15 to-brown/15 text-brown/50 flex flex-col items-center justify-center gap-2 bg-gradient-to-br',
        className,
      )}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      {label ? <span className="px-2 text-center text-xs">{label}</span> : null}
    </div>
  );
}
