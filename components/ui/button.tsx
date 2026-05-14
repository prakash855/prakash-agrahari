import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-300 text-slate-950 shadow-[0_18px_48px_rgba(17,24,39,0.22)] hover:bg-cyan-200 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200 dark:shadow-[0_0_40px_rgba(34,211,238,0.22)]",
        secondary:
          "border border-[var(--line-strong)] bg-[var(--surface-soft)] text-[var(--foreground)] hover:bg-[color-mix(in_srgb,var(--surface-soft)_75%,white_25%)]",
        ghost: "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)]"
      },
      size: {
        default: "h-11 px-5",
        icon: "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
