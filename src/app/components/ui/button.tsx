import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-[var(--font-weight-medium)] font-['Sarabun',sans-serif] transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none disabled:cursor-not-allowed disabled:bg-button-disabled disabled:text-button-disabled-foreground focus-visible:ring-[2px] focus-visible:ring-button-focus-ring focus-visible:ring-offset-[length:var(--button-focus-ring-offset)] focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-border bg-background text-foreground hover:bg-muted",
        secondary:
          "bg-muted text-foreground hover:bg-muted/80",
        ghost:
          "hover:bg-muted hover:text-foreground",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-5 py-2 rounded-button text-[length:var(--text-base)]",
        sm: "h-8 gap-1.5 px-4 rounded-button text-[length:var(--text-sm)]",
        lg: "h-11 px-8 rounded-button text-[length:var(--text-base)]",
        icon: "size-9 rounded-button",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };