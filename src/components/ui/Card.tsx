import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const baseClasses = `bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 ${paddingClasses[padding]} ${className}`;

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: hover
      ? {
          y: -5,
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
          transition: { duration: 0.2 },
        }
      : {},
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className={baseClasses}
    >
      {children}
    </motion.div>
  );
}
