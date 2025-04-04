"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "white"
  size?: "sm" | "md" | "lg"
}

export function Logo({ variant = "default", size = "md" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-slate-900"
  const accentColor = variant === "white" ? "text-teal-300" : "text-teal-600"

  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  const iconSize = {
    sm: 20,
    md: 24,
    lg: 32,
  }

  return (
    <Link href="/" className="flex items-center gap-2">
      <motion.div
        initial={{ rotate: -10, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        whileHover={{ rotate: -5, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative"
      >
        <svg
          width={iconSize[size]}
          height={iconSize[size]}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z"
            stroke={variant === "white" ? "#5eead4" : "#0d9488"}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
            d="M20 12V20L26 24"
            stroke={variant === "white" ? "#f0fdfa" : "#134e4a"}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            cx="20"
            cy="20"
            r="2"
            fill={variant === "white" ? "#f0fdfa" : "#134e4a"}
          />
        </svg>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`font-bold ${sizeClasses[size]} ${textColor}`}
      >
        COM<span className={accentColor}>nEST</span>
      </motion.div>
    </Link>
  )
}

