import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "gray" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
}

export default function Section({
  children,
  id,
  className = "",
  background = "white",
  padding = "lg",
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-primary-50 to-white",
  };

  const paddingClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-24",
  };

  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section id={id} className={classes}>
      <div className="section-container">{children}</div>
    </section>
  );
}
