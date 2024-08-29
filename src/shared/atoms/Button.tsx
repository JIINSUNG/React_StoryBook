import React from "react";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor = "bg-blue-500",
  size = "md",
  onClick,
  className,
}) => {
  const baseClasses =
    "text-white font-bold rounded focus:outline-none focus:ring-2 focus:ring-blue-400";
  const sizeClasses =
    size === "lg" ? "py-3 px-6" : size === "sm" ? "py-1 px-2" : "py-2 px-4";

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${backgroundColor} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
