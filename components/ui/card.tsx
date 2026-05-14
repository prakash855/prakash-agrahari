import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--line)] bg-[var(--surface)] shadow-[var(--card-shadow)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
