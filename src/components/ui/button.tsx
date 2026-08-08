import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky disabled:pointer-events-none disabled:opacity-50 whitespace-normal sm:whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-coffee text-white hover:bg-coffee-light shadow-md shadow-coffee/20",
        outline:
          "border border-coffee/25 bg-white text-coffee hover:bg-cream hover:border-coffee/40",
        ghost: "text-coffee hover:bg-cream",
        gradient:
          "bg-gradient-to-r from-sky to-sky-dark text-white hover:opacity-90 shadow-md shadow-sky/30",
        glow: "bg-white border border-sky/30 text-coffee hover:border-sky hover:shadow-md hover:shadow-sky/20",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 min-h-11 px-6 text-sm sm:h-12 sm:px-8 sm:text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
