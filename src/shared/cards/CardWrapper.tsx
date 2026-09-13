import clsx from "clsx";
import { ComponentProps, FC, PropsWithChildren } from "react";

export interface ICardWrapper extends ComponentProps<"div"> {
  variant?: "default" | "stat" | "timeline" | "portfolio" | "interactive";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const variantClasses = {
  default:
    "rounded-xl bg-[#252525] p-5 sm:p-6 border border-white/5 transition-all duration-300 shadow-md",
  stat:
    "rounded-md bg-[#252525] p-6 sm:p-8 border border-white/5 hover:border-[var(--primary)]/30 transition-all duration-300 relative overflow-hidden group",
  timeline:
    "relative pl-12 pb-10 border-l border-white/10 last:border-l-0 last:pb-0 group",
  portfolio:
    "rounded-xl overflow-hidden bg-[#252525] border border-white/5 group relative cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[rgba(var(--primary-rgb),0.15)]",
  interactive:
    "rounded-xl bg-[#252525] p-6 border border-white/5 hover:border-[var(--primary)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer shadow-lg",
};

const CardWrapper: FC<PropsWithChildren<ICardWrapper>> = ({
  children,
  variant = "default",
  className,
  onClick,
  style,
  ...props
}) => {
  return (
    <div
      className={clsx(
        variantClasses[variant],
        onClick && "cursor-pointer active:scale-[0.99]",
        className
      )}
      style={style}
      role={onClick ? "button" : undefined}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
