/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR NAVIGATION HERE
 * ============================================================================
 * Update the logo initials and navigation links if you change section names.
 * 
 * To update with AI: "Update the navbar with my initials [INITIALS] and
 * email [EMAIL]"
 * ============================================================================
 */

// Your initials for the logo - EDIT THIS VALUE
const logoInitials = "AK";

// Your email for contact button - EDIT THIS VALUE
const contactEmail = "aarav.krishnan.ece@gmail.com";

// Navigation links - matches section IDs in page.tsx
const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                setScrolled(currentScrollY > 50);

                const checkPointY = window.innerHeight * 0.3;
                const sections = navLinks.map(link => link.href.substring(1));

                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        if (rect.top <= checkPointY && rect.bottom >= checkPointY) {
                            setActiveSection(sectionId);
                            break;
                        }
                    }
                }

                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform, backdrop-filter", backfaceVisibility: "hidden" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/90 backdrop-blur-xl border-b border-glass-border shadow-sm"
                        : "bg-transparent"
                )}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-xl md:text-2xl font-bold text-amber-500 font-mono tracking-tight"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {logoInitials}
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={cn(
                                            "relative px-4 py-2 text-sm transition-colors",
                                            isActive ? "text-amber-500 font-medium" : "text-foreground-muted hover:text-foreground"
                                        )}
                                        whileHover={{ y: -2 }}
                                    >
                                        {link.label}
                                        <motion.span
                                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-amber-500 to-yellow-500"
                                            initial={{ width: "0%" }}
                                            animate={{ width: isActive ? "80%" : "0%" }}
                                            whileHover={{ width: "80%" }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <MagneticButton
                                href={`mailto:${contactEmail}`}
                                variant="secondary"
                            >
                                <Mail className="w-4 h-4" />
                                Contact
                            </MagneticButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" />
                        <nav className="relative pt-24 px-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="text-2xl font-medium text-foreground-muted hover:text-amber-500 transition-colors py-2"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-4"
                                >
                                    <MagneticButton
                                        href={`mailto:${contactEmail}`}
                                        variant="primary"
                                        size="lg"
                                    >
                                        <Mail className="w-5 h-5" />
                                        Contact Me
                                    </MagneticButton>
                                </motion.div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

