import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  title: string;
  icon?: ReactNode;
  iconAlign?: "left" | "right";
  disabled?: boolean;
  className?: string;
}

export default function NonLinearButton({
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
        "group relative inline-flex items-center justify-center gap-2",
        "rounded-full px-6 py-2.5",
        "bg-white text-gray-900 font-semibold text-sm",
        "shadow-md transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]",
        "hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "active:scale-[0.97]",
        "disabled:opacity-60 disabled:cursor-not-allowed",
        className
      )}
    >
      {/* Gradient glow */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-blue-500 to-pink-400 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-40"
      />

      {icon && iconAlign === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      <span className="relative z-10">{title}</span>

      {icon && iconAlign === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
}
