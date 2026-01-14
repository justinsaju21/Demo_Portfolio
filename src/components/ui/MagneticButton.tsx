/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    size?: "md" | "lg";
    className?: string;
    onClick?: () => void;
}

export function MagneticButton({
    children,
    href,
    variant = "primary",
    size = "md",
    className,
    onClick,
}: MagneticButtonProps) {
    const baseStyles = cn(
        "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        variant === "primary" &&
        "bg-gradient-to-r from-accent-amber to-accent-gold text-midnight hover:shadow-lg hover:shadow-accent-amber/25 hover:scale-105",
        variant === "secondary" &&
        "bg-white/80 shadow-sm border border-glass-border text-foreground hover:border-accent-amber/50 hover:bg-white hover:scale-105",
        className
    );

    const Component = href ? motion.a : motion.button;
    const props = href
        ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noopener noreferrer" : undefined }
        : { onClick };

    return (
        <Component
            {...props}
            className={baseStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </Component>
    );
}

