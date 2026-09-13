import clsx from "clsx";
import React, { ReactNode } from "react";

export interface IButton {
  variant?: "primary" | "outline" | "ghost" | "icon" | "tunis-cta";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  btnName?: string;
  className?: string;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => void;
  icon?: ReactNode;
  secondaryIcon?: ReactNode;
  children?: ReactNode;
  type?: "button" | "submit";
  form?: string;
}

const Button = ({
  variant = "tunis-cta",
  size = "md",
  icon,
  btnName,
  onClick,
  disabled,
  fullWidth,
  className,
  secondaryIcon,
  isLoading,
  type = "button",
  form,
  children,
}: IButton) => {
  const variantClasses = {
    "tunis-cta":
      "border border-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-white rounded-full uppercase tracking-wider font-semibold pl-8 pr-16 py-3 relative overflow-hidden group transition-all duration-300 active:scale-95 shadow-md",
    primary:
      "bg-[var(--primary)] text-white hover:opacity-90 rounded-full uppercase tracking-wider font-semibold px-7 py-3 transition-all duration-300 active:scale-95 shadow-lg shadow-[rgba(var(--primary-rgb),0.25)]",
    outline:
      "border border-white/20 hover:border-[var(--primary)] hover:text-[var(--primary)] text-white rounded-full uppercase tracking-wider font-semibold px-6 py-2.5 transition-all duration-300 active:scale-95",
    ghost:
      "text-neutral-400 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200",
    icon:
      "w-12 h-12 rounded-full bg-[#252525] text-white hover:bg-[var(--primary)] flex items-center justify-center transition-all duration-300 shadow-md active:scale-95",
  };

  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!disabled && !isLoading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center cursor-pointer transition-all duration-300 select-none",
        variantClasses[variant],
        variant !== "icon" && sizeClasses[size],
        {
          "w-full": fullWidth,
          "opacity-60 cursor-not-allowed pointer-events-none": disabled || isLoading,
        },
        className
      )}
      {...(form ? { form } : {})}
      type={type}
      onClick={handleClick}
    >
      {icon && <span className="mr-2 text-base">{icon}</span>}
      {btnName && <span className="whitespace-nowrap">{btnName}</span>}
      {children}
      {variant === "tunis-cta" && secondaryIcon && (
        <span className="absolute right-0 top-0 bottom-0 w-13 bg-[var(--primary)] text-white flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105">
          {secondaryIcon}
        </span>
      )}
      {variant !== "tunis-cta" && secondaryIcon && (
        <span className="ml-2">{secondaryIcon}</span>
      )}
    </button>
  );
};

export default Button;
