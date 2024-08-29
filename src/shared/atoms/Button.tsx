import React from "react";

export interface ButtonProps {
    label: React.ReactNode;
    backgroundColor?: "red" | "blue" | "green" | "yellow";
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    className?: string;
}

const sizeClasses = {
    lg: "py-3 px-6",
    md: "py-2 px-4",
    sm: "py-1 px-2",
} as const;

const backgroundClasses = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
} as const;

const baseClasses =
    "text-white font-bold rounded focus:outline-none focus:ring-2";

export const Button: React.FC<ButtonProps> = ({
    label,
    backgroundColor = "blue",
    size = "md",
    onClick,
    className,
}) => {
    return (
        <button
            className={`${baseClasses} ${sizeClasses[size]} ${backgroundClasses[backgroundColor]} ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
