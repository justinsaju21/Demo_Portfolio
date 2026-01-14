/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, Users, Trophy } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR EXPERIENCE HERE
 * ============================================================================
 * Add internships, part-time work, club activities, and volunteer experience.
 * 
 * To update with AI: "Update my experience section with:
 * Internship at [COMPANY] as [ROLE] from [DATE] doing [TASKS]
 * Club activities: [CLUBS AND ROLES]"
 * ============================================================================
 */

// Your internships and work experience - EDIT THESE VALUES
const experiences = [
    {
        title: "Embedded Systems Intern",
        institution: "TechNova Labs",
        location: "Chennai",
        department: "R&D Department",
        period: "May 2025 – July 2025",
        current: false,
        type: "internship",
        highlights: [
            "Worked on Arduino and ESP32-based prototypes",
            "Assisted in sensor calibration and testing",
            "Debugged hardware-software integration issues",
            "Documented project workflows and technical specs",
        ],
    },
];

// Your extracurricular activities - EDIT THESE VALUES
const activities = [
    {
        icon: Users,
        title: "SRM Robotics Club",
        role: "Active Member",
        description: "Participating in robotics projects and competitions",
    },
    {
        icon: Trophy,
        title: "Tech Fest Volunteer",
        role: "Hardware Team",
        description: "Helped organize and manage technical events",
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-warm-stone/5 to-background" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-gold text-sm uppercase tracking-widest mb-4 block">
                        My Journey
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Experience & <span className="text-gradient">Activities</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-amber mx-auto rounded-full" />
                </motion.div>

                {/* Internship Timeline */}
                <div className="relative mb-16">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-amber via-accent-gold to-accent-teal transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-amber border-4 border-background transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                                {exp.current && (
                                    <span className="absolute inset-0 rounded-full bg-accent-amber animate-ping opacity-50" />
                                )}
                            </div>

                            {/* Content */}
                            <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                                <GlassmorphismCard className={`p-6 ${exp.current ? "border-accent-amber/40" : ""}`}>
                                    <span className="inline-flex items-center gap-1 text-xs bg-accent-teal/20 text-accent-teal px-2 py-0.5 rounded-full mb-3">
                                        <Briefcase className="w-3 h-3" />
                                        Internship
                                    </span>

                                    <h3 className="heading-sm text-foreground mb-2">{exp.title}</h3>

                                    <div className="flex items-start gap-2 text-accent-amber mb-1">
                                        <Building2 className="w-4 h-4 shrink-0 mt-0.5" />
                                        <span className="font-medium text-sm sm:text-base leading-tight">{exp.institution}</span>
                                    </div>

                                    <p className="text-sm text-foreground-muted mb-2">{exp.department}</p>

                                    <div className="flex flex-wrap gap-4 text-xs text-foreground-dim mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            {exp.location}
                                        </span>
                                    </div>

                                    <ul className="space-y-1">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="text-sm text-foreground-muted flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-accent-gold mt-2 shrink-0" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassmorphismCard>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block flex-1" />
                        </motion.div>
                    ))}
                </div>

                {/* Extracurricular Activities */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    <h3 className="heading-sm text-foreground mb-6 text-center">Extracurricular Activities</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false }}
                            >
                                <GlassmorphismCard className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-accent-amber/10">
                                            <activity.icon className="w-6 h-6 text-accent-amber" />
                                        </div>
                                        <div>
                                            <h4 className="text-foreground font-semibold">{activity.title}</h4>
                                            <p className="text-sm text-accent-amber">{activity.role}</p>
                                            <p className="text-sm text-foreground-muted mt-1">{activity.description}</p>
                                        </div>
                                    </div>
                                </GlassmorphismCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Objective */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="text-center mt-12"
                >
                    <GlassmorphismCard className="inline-block px-8 py-6 max-w-2xl">
                        <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-3">
                            🎯 Career Objective
                        </h4>
                        <p className="text-foreground-muted">
                            To secure an internship or entry-level role where I can apply my ECE fundamentals and
                            embedded systems knowledge to develop reliable and scalable engineering solutions.
                        </p>
                    </GlassmorphismCard>
                </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute top-1/4 -right-20 w-40 h-40 bg-accent-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}

