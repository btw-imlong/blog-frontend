import React, { type JSX } from "react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonTheme = "primary" | "secondary" | "light" | "dark";

interface ModernButtonProps {
  text?: string;
  icon?: JSX.Element;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.FormEvent) => void; // Updated to accept event argument
  size?: ButtonSize;
  theme?: ButtonTheme;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const themeClasses: Record<ButtonTheme, string> = {
  primary:
    "text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500",
  secondary:
    "text-white bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400",
  light: "text-gray-800 bg-white border border-gray-300 hover:bg-gray-100",
  dark: "text-white bg-gray-800 hover:bg-gray-700",
};

const ModernButton: React.FC<ModernButtonProps> = ({
  text = "Click Me",
  loading = false,
  disabled = false,
  onClick,
  size = "md",
  theme = "primary",
}) => {
  const baseStyles =
    "flex items-center justify-center gap-2 font-semibold rounded-2xl shadow-md transition-all duration-300 ease-in-out";

  return (
    <button
      onClick={onClick} // onClick will now accept the event argument correctly
      disabled={disabled || loading}
      className={`
        ${baseStyles}
        ${sizeClasses[size]}
        ${themeClasses[theme]}
        ${
          disabled || loading
            ? "opacity-50 cursor-not-allowed cursor-poi"
            : "cursor-pointer"
        }
      `}
    >
      {text}
    </button>
  );
};

export default ModernButton;
