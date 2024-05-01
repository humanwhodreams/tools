import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md text-sm font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50  file:border-0 file:bg-transparent file:text-sm file:font-medium border border-input bg-background placeholder:text-muted-foreground",
  {
    variants: {
      variant: {
        default:
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus:ring-offset-2 ring-offset-background focus:border-border",
        muted:
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 ring-offset-background focus:border-border",
      },
      iSize: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-3 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      iSize: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, iSize, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, iSize, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
