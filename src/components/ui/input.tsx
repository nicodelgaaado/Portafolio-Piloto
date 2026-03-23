import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          "flex h-12 w-full rounded-lg border border-black/15 bg-black/[0.02] px-4 py-3 font-mono text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-[border-color,box-shadow,background-color] outline-none placeholder:text-black/35 focus:border-black/55 focus:bg-white focus:shadow-[0_0_0_3px_rgba(3,2,19,0.08)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
