import { cn } from '@/lib/utils';

import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-brown text-cream hover:bg-brown/90',
  secondary: 'bg-olive text-cream hover:bg-olive/90',
  outline: 'border border-brown text-brown hover:bg-brown hover:text-cream',
};

/** Class helper — dùng chung cho <button> và <a>/<Link> để giữ style CTA đồng nhất. */
export function buttonVariants(variant: ButtonVariant = 'primary', className?: string) {
  return cn(BASE_CLASSES, VARIANT_CLASSES[variant], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

// Primitive "dumb": chỉ nhận props, không fetch data, không chứa business logic.
export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return <button className={buttonVariants(variant, className)} {...props} />;
}
