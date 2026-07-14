import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: 'center' | 'left';
  className?: string;
};

// Primitive "dumb": tiêu đề section đồng nhất — eyebrow + title + gạch chân trang trí.
export function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow ? (
        <p className="text-olive mb-2 text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-brown font-serif text-2xl font-semibold tracking-wide uppercase sm:text-3xl">
        {title}
      </h2>
      <div
        className={cn(
          'bg-olive/40 mt-3 h-px w-16',
          align === 'center' ? 'mx-auto' : 'mx-0',
        )}
      />
    </div>
  );
}
