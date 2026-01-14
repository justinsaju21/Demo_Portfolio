/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, Globe, Code, Cpu, Zap } from "lucide-react";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { MagneticButton } from "@/components/ui/MagneticButton";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR HERO SECTION HERE
 * ============================================================================
 * This is the first thing visitors see. Update ALL the data below with your info.
 * 
 * To update with AI: "Replace the hero section data with my name [YOUR NAME],
 * I'm a [YEAR] year [DEGREE] student at [UNIVERSITY], interested in [INTERESTS]"
 * ============================================================================
 */

// Your basic info - EDIT THESE VALUES
const profileData = {
    name: "Aarav Krishnan",
    tagline: "3rd Year B.Tech | ECE @ SRMIST",
    degree: "B.Tech – Electronics & Communication Engineering",
    specializations: ["Embedded Systems", "IoT", "Edge AI"],
    bio: {
        highlight1: "Embedded Systems",
        highlight2: "IoT Development",
        highlight3: "Edge AI",
        highlight4: "Sensor-based Systems",
    },
    stats: [
        { icon: Code, label: "3+ Projects", color: "text-accent-amber" },
        { icon: Cpu, label: "IoT Enthusiast", color: "text-accent-teal" },
        { icon: Zap, label: "Tech Club Member", color: "text-accent-gold" },
    ],
    contact: {
        email: "aarav.krishnan.ece@gmail.com",
        github: "github.com/aarav-krishnan",
        linkedin: "linkedin.com/in/aarav-krishnan",
        portfolio: "aaravkrishnan.tech",
    },
};

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-10 md:py-0">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="hidden md:block">
                <FloatingParticles quantity={35} />
            </div>
            <div className="block md:hidden">
                <FloatingParticles quantity={12} />
            </div>

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />

            {/* Wave decoration */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-accent-amber/5 to-transparent" />

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-glass-border shadow-sm mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber"></span>
                    </span>
                    <span className="text-sm text-foreground-muted">
                        {profileData.tagline}
                    </span>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h1 className="heading-xl mb-4 text-center">
                        <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                            {profileData.name}
                        </span>
                    </h1>
                </motion.div>

                {/* Titles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-6"
                >
                    <div className="flex flex-wrap justify-center items-center gap-2 text-lg md:text-xl text-foreground-muted">
                        <span className="flex items-center gap-2">
                            <Cpu className="w-5 h-5 text-accent-amber" />
                            {profileData.degree}
                        </span>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-2 text-base text-foreground-muted">
                        {profileData.specializations.map((spec, index) => (
                            <span key={spec}>
                                <span className="text-accent-teal">{spec}</span>
                                {index < profileData.specializations.length - 1 && (
                                    <span className="mx-2 text-foreground-dim">•</span>
                                )}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="body-lg text-foreground-muted max-w-2xl mx-auto mb-6"
                >
                    Passionate about building real-world applications using{" "}
                    <span className="text-foreground">{profileData.bio.highlight1}</span>,{" "}
                    <span className="text-accent-amber">{profileData.bio.highlight2}</span>,{" "}
                    <span className="text-accent-teal">{profileData.bio.highlight3}</span>, and{" "}
                    <span className="text-accent-gold">{profileData.bio.highlight4}</span>.
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto mb-8"
                >
                    {profileData.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-glass-border shadow-sm"
                        >
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                            <span className="text-sm text-foreground-muted">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Contact Info Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-10 py-2"
                >
                    <a
                        href={`mailto:${profileData.contact.email}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-glass-border shadow-sm text-sm text-foreground-muted hover:text-accent-amber hover:border-accent-amber/50 transition-all"
                    >
                        <Mail className="w-4 h-4" />
                        {profileData.contact.email}
                    </a>
                    <a
                        href={`https://${profileData.contact.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-glass-border shadow-sm text-sm text-foreground-muted hover:text-accent-amber hover:border-accent-amber/50 transition-all"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>
                    <a
                        href={`https://${profileData.contact.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-glass-border shadow-sm text-sm text-foreground-muted hover:text-accent-amber hover:border-accent-amber/50 transition-all"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <MagneticButton
                        href="#projects"
                        variant="primary"
                        size="lg"
                        onClick={() => {
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <Code className="w-5 h-5" />
                        View Projects
                    </MagneticButton>

                    <MagneticButton
                        href="#contact"
                        variant="secondary"
                        size="lg"
                        onClick={() => {
                            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <Mail className="w-5 h-5" />
                        Contact Me
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: false }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-foreground-dim"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent-amber/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent-teal/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-gold/10 rounded-full blur-3xl" />
        </section>
    );
}

