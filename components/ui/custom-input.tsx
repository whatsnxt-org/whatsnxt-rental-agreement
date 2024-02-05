import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { error?: boolean }
>(({ className, type, placeholder, onFocus, onBlur, error, ...props }, ref) => {
  const innerRef = React.useRef<HTMLInputElement>(null);
  React.useImperativeHandle(ref, () => innerRef.current!, []);
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (innerRef.current?.value !== "") setIsFocused(true);
  }, []);

  return (
    <div className="relative w-full pt-3">
      <div
        className={cn(
          "pointer-events-none text-lg absolute inset-0 text-muted-foreground/50 translate-y-[30%] transition-all",
          isFocused &&
            "translate-y-0 text-[0.6rem] font-semibold leading-3 text-muted-foreground",
          isFocused &&
            innerRef.current?.value !== "" &&
            "text-[0.6rem] font-normal"
        )}
      >
        {placeholder}
      </div>
      <input
        type={type}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          if (e.target.value === "") setIsFocused(false);
          onBlur?.(e);
        }}
        className={cn(
          "flex h-10 w-full rounded-md border-b border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "px-0 font-bold w-full focus-visible:ring-0 focus-visible:ring-offset-0 ring-red-500 rounded-none focus-visible:outline-none border-0 border-b-2",
          error && "border-b-destructive",
          className
        )}
        ref={innerRef}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input as CustomInput };
