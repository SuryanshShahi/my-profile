import clsx from "clsx";
import { ReactNode } from "react";

export interface IChip {
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "badge" | "outline" | "active-tab" | "inactive-tab";
  size?: "xs" | "sm" | "md";
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-[var(--primary)] text-white font-semibold",
  badge: "bg-[#2b2a2a] text-neutral-300 border border-white/5 font-medium",
  outline: "border border-white/20 text-white hover:border-[var(--primary)]",
  "active-tab": "bg-[var(--primary)] text-white font-bold shadow-md",
  "inactive-tab": "bg-[#252525] text-neutral-400 hover:text-white font-semibold",
};

const sizeClasses = {
  xs: "px-2.5 py-0.5 text-[10px]",
  sm: "px-3.5 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
};

const Chip = ({
  title,
  children,
  icon,
  variant = "badge",
  size = "sm",
  className,
  onClick,
}: IChip) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider select-none shrink-0 transition-all duration-200",
        variantClasses[variant],
        sizeClasses[size],
        onClick && "cursor-pointer active:scale-95",
        className
      )}
    >
      {icon}
      {title}
      {children}
    </div>
  );
};

export default Chip;
