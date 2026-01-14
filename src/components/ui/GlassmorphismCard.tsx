/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function GlassmorphismCard({ children, className, hover = true }: GlassmorphismCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl transition-all duration-300 shadow-sm",
                hover && "hover:border-accent-amber/50 hover:shadow-md hover:shadow-accent-amber/10",
                className
            )}
        >
            {children}
        </div>
    );
}

