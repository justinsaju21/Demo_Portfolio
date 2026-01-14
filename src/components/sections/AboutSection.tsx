/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, Radio, Wifi, Code, Wrench, Heart, Users } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR ABOUT SECTION HERE
 * ============================================================================
 * Update education, skills, and interests to match your profile.
 * 
 * To update with AI: "Update the about section with my education at [UNIVERSITY],
 * my technical skills are [SKILLS], and my interests are [INTERESTS]"
 * ============================================================================
 */

// Your education - EDIT THESE VALUES
const education = [
    {
        degree: "B.Tech",
        field: "Electronics & Communication Engineering",
        institution: "SRM Institute of Science and Technology",
        year: "2023 - 2027 (Expected)",
        current: true,
    },
    {
        degree: "Higher Secondary (12th)",
        field: "Science Stream (PCM)",
        institution: "Your School Name",
        year: "2023",
    },
];

// Your areas of interest - EDIT THESE VALUES
const areasOfInterest = [
    { icon: Cpu, title: "Embedded Systems", description: "Microcontrollers and firmware development" },
    { icon: Wifi, title: "Internet of Things", description: "Connected devices and smart systems" },
    { icon: Radio, title: "Edge AI", description: "AI inference on embedded devices" },
    { icon: Wrench, title: "Robotics", description: "Hardware-software integration" },
];

// Your technical skills - EDIT THESE VALUES
const technicalSkills = {
    programming: ["C", "C++", "Python", "Embedded C"],
    hardware: ["Arduino", "ESP32", "Raspberry Pi", "Sensors"],
    tools: ["MATLAB", "Proteus", "VS Code", "Git"],
    concepts: ["Digital Electronics", "Signals & Systems", "IoT Protocols"],
};

// Your soft skills - EDIT THESE VALUES
const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Technical Documentation",
    "Time Management",
    "Willingness to Learn",
];

export function AboutSection() {
    return (
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/20 to-background" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-amber text-sm uppercase tracking-widest mb-4 block">
                        About Me
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-amber to-accent-gold mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column: Bio & Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="heading-md text-foreground mb-4">
                                Hello! 👋
                            </h3>
                            <div className="space-y-4 text-foreground-muted body-md">
                                <p>
                                    I&apos;m <span className="text-accent-amber font-semibold">Aarav Krishnan</span>,
                                    a passionate Electronics and Communication Engineering student at
                                    <span className="text-foreground"> SRM Institute of Science and Technology</span>, Chennai.
                                </p>
                                <p>
                                    I enjoy converting theoretical concepts into real-world applications through hands-on projects.
                                    Currently focused on <span className="text-accent-teal">microcontrollers</span>,{" "}
                                    <span className="text-accent-gold">edge AI</span>, and{" "}
                                    <span className="text-accent-amber">sensor-based systems</span>.
                                </p>
                            </div>
                        </GlassmorphismCard>

                        {/* Education Timeline */}
                        <GlassmorphismCard className="p-6">
                            <h4 className="text-sm font-semibold text-accent-amber uppercase tracking-wider mb-4 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5" />
                                Education
                            </h4>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-4 border-l-2 border-accent-amber/30 hover:border-accent-amber transition-colors"
                                    >
                                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent-amber" />
                                        <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                            <span className="text-foreground font-semibold">{edu.degree}</span>
                                            <span className="text-accent-gold text-sm">{edu.year}</span>
                                            {edu.current && (
                                                <span className="text-xs bg-accent-amber/20 text-accent-amber px-2 py-0.5 rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-foreground-muted">{edu.field}</p>
                                        <p className="text-xs text-foreground-dim">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassmorphismCard>
                    </motion.div>

                    {/* Right Column: Areas of Interest */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <GlassmorphismCard className="p-6">
                            <h4 className="text-sm font-semibold text-accent-teal uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Heart className="w-5 h-5" />
                                Areas of Interest
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {areasOfInterest.map((interest, index) => (
                                    <motion.div
                                        key={interest.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: false }}
                                        className="p-4 rounded-xl bg-white/60 border border-glass-border hover:border-accent-amber/30 transition-colors group"
                                    >
                                        <div className="p-2 rounded-lg bg-accent-amber/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                                            <interest.icon className="w-5 h-5 text-accent-amber" />
                                        </div>
                                        <h5 className="text-foreground font-semibold mb-1">{interest.title}</h5>
                                        <p className="text-xs text-foreground-muted">{interest.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassmorphismCard>

                        {/* Soft Skills */}
                        <GlassmorphismCard className="p-6">
                            <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Soft Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {softSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm rounded-full bg-white/60 border border-glass-border text-foreground-muted"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </GlassmorphismCard>
                    </motion.div>
                </div>

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p className="text-center text-sm text-foreground-muted mb-6 uppercase tracking-widest">
                        🛠️ Technical Skills
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {Object.entries(technicalSkills).map(([category, skills]) => (
                            <GlassmorphismCard key={category} className="p-4">
                                <h5 className="text-xs text-accent-amber uppercase tracking-wider mb-3 font-semibold">
                                    {category}
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ y: -2, scale: 1.05 }}
                                            className="px-3 py-1.5 rounded-full text-xs bg-white/80 shadow-sm border border-glass-border text-foreground-muted hover:border-accent-amber/50 hover:text-foreground transition-all cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </GlassmorphismCard>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}

