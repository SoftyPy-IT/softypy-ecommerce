import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  icon?: ReactNode;
  iconAlign?: "left" | "right";
  disabled?: boolean;
  className?: string;
}

export default function LinearButton({
  title,
  icon,
  iconAlign = "right",
  disabled = false,
  className,
}: Props) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "inline-flex items-center justify-center gap-2",
        "px-6 py-2.5",
        "bg-linear-to-r from-purple-500 to-[#5c9e70]",
        "text-white text-sm font-semibold",
        "shadow-md transition-all duration-300",
        "hover:from-purple-500 hover:to-[#5c9e70] hover:shadow-2xl hover:shadow-purple-500/50",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2",
        "active:scale-[0.98]",
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-md",
        className
      )}
    >
      {icon && iconAlign === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      <span>{title}</span>

      {icon && iconAlign === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
}
