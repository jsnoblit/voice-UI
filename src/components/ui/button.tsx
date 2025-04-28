import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-gray-800 dark:[&_svg]:text-gray-900",
  {
    variants: {
      variant: {
        default:
          "bg-white text-gray-800 shadow hover:bg-gray-50 active:bg-gray-100 aria-selected:bg-gray-100",
        destructive:
          "bg-red-50 text-red-900 shadow-sm hover:bg-red-100 active:bg-red-200 aria-selected:bg-red-200",
        outline:
          "border border-input bg-white shadow-sm hover:bg-gray-50 active:bg-gray-100 aria-selected:bg-gray-100",
        secondary:
          "bg-gray-50 text-gray-800 shadow-sm hover:bg-gray-100 active:bg-gray-200 aria-selected:bg-gray-200",
        ghost: "hover:bg-gray-50 text-gray-800 active:bg-gray-100 aria-selected:bg-gray-100",
        link: "text-primary underline-offset-4 hover:underline bg-transparent active:text-primary/70 aria-selected:text-primary/70",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
