/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, ExternalLink } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR CERTIFICATIONS HERE
 * ============================================================================
 * Add your online courses, certifications, and achievements.
 * 
 * To update with AI: "Update my certifications with:
 * 1. [COURSE NAME] from [PLATFORM]
 * 2. [COURSE NAME] from [PLATFORM]"
 * ============================================================================
 */

// Your certifications - EDIT THESE VALUES
const certifications = [
    {
        title: "Embedded Systems with Arduino",
        platform: "Coursera",
        year: "2024",
        color: "text-accent-amber bg-accent-amber/10",
    },
    {
        title: "Introduction to IoT",
        platform: "NPTEL",
        year: "2024",
        color: "text-accent-teal bg-accent-teal/10",
    },
    {
        title: "Python for Engineers",
        platform: "Udemy",
        year: "2024",
        color: "text-accent-gold bg-accent-gold/10",
    },
    {
        title: "MATLAB Onramp",
        platform: "MathWorks",
        year: "2023",
        color: "text-accent-rose bg-accent-rose/10",
    },
];

export function CertificationsSection() {
    return (
        <section id="certifications" className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/10 to-background" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-rose text-sm uppercase tracking-widest mb-4 block">
                        Learning & Growth
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Certifications & <span className="text-gradient">Courses</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-amber to-accent-rose mx-auto rounded-full" />
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <GlassmorphismCard className="p-6 h-full group hover:border-accent-gold/40">
                                <div className={`p-3 rounded-xl ${cert.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                                    <Award className="w-6 h-6" />
                                </div>
                                <span className="text-xs text-accent-gold font-semibold">{cert.year}</span>
                                <h3 className="heading-sm text-foreground mt-1 mb-2 text-sm">{cert.title}</h3>
                                <p className="text-sm text-foreground-muted flex items-center gap-1">
                                    <BookOpen className="w-3 h-3" />
                                    {cert.platform}
                                </p>
                            </GlassmorphismCard>
                        </motion.div>
                    ))}
                </div>

                {/* Learning Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-center"
                >
                    <GlassmorphismCard className="inline-block px-8 py-6">
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gradient">4+</p>
                                <p className="text-sm text-foreground-muted">Certifications</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gradient">100+</p>
                                <p className="text-sm text-foreground-muted">Hours of Learning</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-gradient">∞</p>
                                <p className="text-sm text-foreground-muted">Curiosity</p>
                            </div>
                        </div>
                    </GlassmorphismCard>
                </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute top-1/3 -right-20 w-60 h-60 bg-accent-rose/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 -left-20 w-60 h-60 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}

