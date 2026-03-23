import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        default: "border-black/80 bg-black text-white",
        outline: "border-black/18 bg-black/[0.03] text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
