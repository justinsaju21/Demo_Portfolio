/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
    const words = text.split(" ");

    return (
        <span className={cn("flex flex-wrap", className)}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="mr-2 inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </span>
    );
}

