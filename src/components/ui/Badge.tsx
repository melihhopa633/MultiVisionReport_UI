import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "success" | "info" | "medical";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full font-medium";

  const variants = {
    primary: "bg-primary-100 text-primary-800",
    success: "bg-success-100 text-success-800",
    info: "bg-blue-100 text-blue-800",
    medical: "bg-gradient-to-r from-medical-blue to-medical-green text-white",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return <span className={classes}>{children}</span>;
}
