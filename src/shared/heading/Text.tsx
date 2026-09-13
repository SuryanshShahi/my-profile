import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";

export interface TextProps extends ComponentProps<"p"> {
  children?: ReactNode;
  className?: string;
  as?: React.ElementType;
  font?: "sans" | "display";
  size?:
    | "6xl"
    | "5xl"
    | "4xl"
    | "3xl"
    | "2xl"
    | "xl"
    | "lg"
    | "base"
    | "sm"
    | "xs"
    | "xxs";
  type?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  variant?:
    | "primary"
    | "accent"
    | "secondary"
    | "muted"
    | "white"
    | "dim"
    | string;
}

const sizeClasses = {
  "6xl": "text-4xl sm:text-5xl lg:text-6xl leading-tight",
  "5xl": "text-3xl sm:text-4xl lg:text-5xl leading-tight",
  "4xl": "text-2xl sm:text-3xl lg:text-4xl leading-snug",
  "3xl": "text-xl sm:text-2xl lg:text-3xl leading-snug",
  "2xl": "text-lg sm:text-xl lg:text-2xl leading-snug",
  xl: "text-base sm:text-lg lg:text-xl leading-normal",
  lg: "text-base sm:text-lg leading-relaxed",
  base: "text-sm sm:text-base leading-relaxed",
  sm: "text-xs sm:text-sm leading-normal",
  xs: "text-xs leading-normal",
  xxs: "text-[10px] leading-tight",
};

const typeClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const fontClasses = {
  sans: "font-sans",
  display: "font-sans tracking-wide",
};

const variantClasses: Record<string, string> = {
  primary: "text-white",
  accent: "text-[var(--primary)]",
  secondary: "text-neutral-300",
  muted: "text-neutral-400",
  dim: "text-neutral-500",
  white: "text-white",
};

const Text = ({
  children,
  className,
  as: Component = "div",
  font = "sans",
  size = "base",
  variant = "primary",
  type = "normal",
  ...props
}: TextProps) => {
  return (
    <Component
      className={clsx(
        fontClasses[font],
        sizeClasses[size],
        typeClasses[type],
        variantClasses[variant] ?? variant,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
