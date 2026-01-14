/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Globe, MapPin, Building } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR CONTACT INFORMATION HERE
 * ============================================================================
 * Update with your own email, social links, and university info.
 * 
 * To update with AI: "Update contact section with my email [EMAIL],
 * GitHub [GITHUB], LinkedIn [LINKEDIN], studying at [UNIVERSITY]"
 * ============================================================================
 */

// Your contact info - EDIT THESE VALUES
const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "aarav.krishnan.ece@gmail.com",
        href: "mailto:aarav.krishnan.ece@gmail.com",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "github.com/aarav-krishnan",
        href: "https://github.com/aarav-krishnan",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "linkedin.com/in/aarav-krishnan",
        href: "https://linkedin.com/in/aarav-krishnan",
    },
    {
        icon: Globe,
        label: "Portfolio",
        value: "aaravkrishnan.tech",
        href: "https://aaravkrishnan.tech",
    },
];

// Your university info - EDIT THESE VALUES
const universityInfo = {
    name: "SRM Institute of Science and Technology",
    department: "Department of Electronics & Communication Engineering",
    location: "Kattankulathur, Chennai, Tamil Nadu, India",
    badges: ["Category I University", "NAAC A++ Grade"],
};

export function ContactSection() {
    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/20 to-background" />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-green text-sm uppercase tracking-widest mb-4 block">
                        Get In Touch
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Contact <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-amber to-accent-green mx-auto rounded-full" />
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                        <GlassmorphismCard className="p-6 h-full">
                            <h3 className="heading-sm text-foreground mb-6">Contact Details</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: false }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="p-2 rounded-lg bg-accent-amber/10 shrink-0">
                                            <info.icon className="w-5 h-5 text-accent-amber" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-foreground-dim uppercase tracking-wider mb-1">
                                                {info.label}
                                            </p>
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                                className="text-foreground hover:text-accent-amber transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-glass-border">
                                <MagneticButton href="mailto:aarav.krishnan.ece@gmail.com" variant="primary" size="lg" className="w-full">
                                    <Mail className="w-5 h-5" />
                                    Send Email
                                </MagneticButton>
                            </div>
                        </GlassmorphismCard>
                    </motion.div>

                    {/* University */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false }}
                    >
                        <GlassmorphismCard className="p-6 h-full">
                            <h3 className="heading-sm text-foreground mb-6 flex items-center gap-2">
                                <Building className="w-5 h-5 text-accent-teal" />
                                University
                            </h3>
                            <div className="p-4 rounded-xl bg-white/60 border border-glass-border">
                                <h4 className="text-foreground font-semibold text-lg mb-2">
                                    {universityInfo.name}
                                </h4>
                                <p className="text-foreground-muted text-sm mb-2">
                                    {universityInfo.department}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {universityInfo.badges.map((badge) => (
                                        <span key={badge} className="text-xs bg-accent-amber/20 text-accent-amber px-2 py-1 rounded-full">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-sm text-foreground-dim mb-2">Location:</p>
                                <p className="text-foreground-muted text-sm flex items-start gap-2">
                                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent-amber" />
                                    {universityInfo.location}
                                </p>
                            </div>

                            {/* Availability Status */}
                            <div className="mt-6 p-4 rounded-xl bg-accent-green/10 border border-accent-green/20">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-green"></span>
                                    </span>
                                    <span className="text-sm text-foreground font-medium">Open to Opportunities</span>
                                </div>
                                <p className="text-xs text-foreground-muted mt-2">
                                    Looking for internship and full-time opportunities in embedded systems and IoT.
                                </p>
                            </div>
                        </GlassmorphismCard>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="text-center mt-16 pt-8 border-t border-glass-border"
                >
                    <p className="text-foreground-dim text-sm">
                        © {new Date().getFullYear()} Aarav Krishnan. Built with ❤️ and Next.js
                    </p>
                </motion.div>
            </div>

            {/* Decorative */}
            <div className="absolute top-1/4 -left-20 w-60 h-60 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent-amber/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}

