import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-border bg-input-background px-4 py-3 font-mono text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] transition-[border-color,box-shadow,background-color] outline-none placeholder:text-muted-foreground focus:border-ring/60 focus:bg-background/90 focus:shadow-[0_0_0_3px_rgba(3,2,19,0.08)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
