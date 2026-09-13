import clsx from "clsx";
import { ComponentProps, forwardRef } from "react";

export interface TextareaFieldProps extends ComponentProps<"textarea"> {
  label?: string;
  error?: string;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, className, rows = 5, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={clsx(
            "w-full bg-[#252525] text-white border border-white/10 rounded-3xl px-6 py-4 text-sm outline-none transition-all duration-300 placeholder:text-neutral-500 resize-none",
            "focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)]",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-400 pl-3">{error}</span>}
      </div>
    );
  }
);

TextareaField.displayName = "TextareaField";
export default TextareaField;
