/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo } from "react";

interface FloatingParticlesProps {
    quantity?: number;
    className?: string;
}

interface Particle {
    x: number;
    y: number;
    yEnd: number;
    duration: number;
    delay: number;
    colorIndex: number;
}

export function FloatingParticles({ quantity = 30, className }: FloatingParticlesProps) {
    const [mounted, setMounted] = useState(false);

    // Generate stable particle data once on mount
    const particles = useMemo<Particle[]>(() => {
        if (!mounted) return [];
        return Array.from({ length: quantity }).map((_, i) => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            yEnd: Math.random() * -200 - 50,
            duration: Math.random() * 8 + 6,
            delay: Math.random() * 5,
            colorIndex: i % 3,
        }));
    }, [mounted, quantity]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const colors = [
        "rgba(217, 119, 6, 0.5)",   // amber
        "rgba(180, 83, 9, 0.4)",    // gold
        "rgba(13, 148, 136, 0.35)", // teal
    ];

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: particle.x + "%",
                        y: particle.y + "%",
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, particle.yEnd],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: colors[particle.colorIndex],
                    }}
                />
            ))}
        </div>
    );
}

