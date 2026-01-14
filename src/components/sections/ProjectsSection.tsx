/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";
import { useState } from "react";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR PROJECTS HERE
 * ============================================================================
 * Add your own projects with title, description, tech stack, and optional links.
 * 
 * To update with AI: "Replace the projects with my projects: 
 * 1. [PROJECT NAME] - [DESCRIPTION] using [TECH STACK]
 * 2. [PROJECT NAME] - [DESCRIPTION] using [TECH STACK]"
 * ============================================================================
 */

// Your projects - EDIT THESE VALUES
const projects = [
    {
        title: "Smart Attendance System using Face Recognition",
        description: "Built a real-time attendance system that uses facial recognition to automatically mark attendance. Integrated camera module with database logging to reduce proxy attendance.",
        techStack: ["Python", "OpenCV", "Haar Cascades", "SQLite"],
        highlights: [
            "Real-time face detection and recognition",
            "Automated attendance logging to database",
            "Reduced proxy attendance issues",
        ],
        category: "Computer Vision",
        featured: true,
    },
    {
        title: "IoT-Based Smart Energy Monitoring System",
        description: "Designed a system to monitor real-time power usage in homes. ESP32 uploads data to a cloud dashboard and generates alerts for abnormal consumption patterns.",
        techStack: ["ESP32", "Current Sensors", "MQTT", "ThingSpeak"],
        highlights: [
            "Real-time power consumption tracking",
            "Cloud-based dashboard visualization",
            "Abnormal usage alerts via notifications",
        ],
        category: "IoT",
        featured: true,
    },
    {
        title: "Obstacle Detection System for Blind Assistance",
        description: "Created a low-cost assistive device using ultrasonic sensors to detect obstacles and provide audio/haptic feedback to visually impaired users.",
        techStack: ["Arduino", "Ultrasonic Sensor", "Buzzer", "Embedded C"],
        highlights: [
            "180° obstacle detection range",
            "Audio alerts via buzzer",
            "Vibration motor for haptic feedback",
        ],
        category: "Embedded Systems",
        featured: true,
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
        >
            <GlassmorphismCard className="p-6 h-full group hover:border-accent-amber/40">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-accent-teal/20 text-accent-teal px-2 py-1 rounded-full">
                        {project.category}
                    </span>
                    {project.featured && (
                        <span className="text-xs bg-accent-gold/20 text-accent-gold px-2 py-1 rounded-full">
                            ⭐ Featured
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="heading-sm text-foreground mb-3 group-hover:text-accent-amber transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground-muted mb-4">
                    {project.description}
                </p>

                {/* Highlights */}
                <div className={`space-y-2 mb-4 overflow-hidden transition-all duration-300 ${expanded ? "max-h-40" : "max-h-0"}`}>
                    {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-amber mt-2 shrink-0" />
                            {highlight}
                        </div>
                    ))}
                </div>

                {/* Toggle Highlights */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-xs text-foreground-dim hover:text-accent-amber transition-colors flex items-center gap-1 mb-4"
                >
                    {expanded ? (
                        <>Hide Details <ChevronUp className="w-3 h-3" /></>
                    ) : (
                        <>Show Details <ChevronDown className="w-3 h-3" /></>
                    )}
                </button>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-white/60 border border-glass-border text-foreground-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </GlassmorphismCard>
        </motion.div>
    );
}

export function ProjectsSection() {
    return (
        <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
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
                    <span className="text-accent-teal text-sm uppercase tracking-widest mb-4 block">
                        My Work
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-amber to-accent-teal mx-auto rounded-full" />
                    <p className="text-foreground-muted mt-6 max-w-2xl mx-auto">
                        Hands-on projects showcasing my skills in embedded systems, IoT, and applied AI.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: false }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto mb-12"
                >
                    {[
                        { value: "3+", label: "Projects" },
                        { value: "5+", label: "Technologies" },
                        { value: "100%", label: "Hands-on" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center p-4 rounded-xl bg-white/80 shadow-sm border border-glass-border">
                            <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                            <p className="text-xs text-foreground-muted uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/aarav-krishnan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 shadow-sm border border-glass-border text-foreground-muted hover:text-accent-amber hover:border-accent-amber/50 transition-all"
                    >
                        <Github className="w-5 h-5" />
                        View More on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}

