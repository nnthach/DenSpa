import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding font-semibold tracking-wide whitespace-nowrap transition-colors duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-brown text-cream hover:bg-brown/90',
        secondary: 'bg-olive text-cream hover:bg-olive/90',
        cream: 'bg-cream text-brown border-brown/15 hover:bg-cream/80 border border-brown',
        lightCream:
          'bg-light-cream text-brown border-brown/15 hover:bg-light-cream/80 border border-brown',
        olive: 'bg-transparent text-olive border-olive/15 hover:bg-olive/80 border border-olive',
        outline: 'border-brown text-brown hover:bg-brown hover:text-cream',
        ghost: 'text-brown hover:bg-brown/10',
        link: 'text-brown underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-6 py-3 text-sm',
        sm: 'px-4 py-2 text-xs',
        lg: 'px-8 py-4 text-base',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
