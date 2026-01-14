/*
 * Copyright (c) 2026 Justin Saju
 * 
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
 * ============================================================================
 * 🎯 CUSTOMIZE YOUR PORTFOLIO METADATA HERE
 * ============================================================================
 * This controls what appears in browser tabs, search results, and social shares.
 * 
 * To update with AI: "Update the metadata with my name [YOUR NAME], 
 * degree [YOUR DEGREE], and university [YOUR UNIVERSITY]"
 * ============================================================================
 */
export const metadata: Metadata = {
  title: "Aarav Krishnan | B.Tech ECE Student, SRMIST",
  description: "Portfolio of Aarav Krishnan - 3rd Year B.Tech Electronics and Communication Engineering student at SRM Institute of Science & Technology. Passionate about Embedded Systems, IoT, and Edge AI.",
  keywords: ["Aarav Krishnan", "SRMIST", "ECE Student", "Embedded Systems", "IoT", "Arduino", "ESP32", "Electronics Engineering"],
  authors: [{ name: "Aarav Krishnan" }],
  openGraph: {
    title: "Aarav Krishnan | B.Tech ECE Student, SRMIST",
    description: "Student portfolio showcasing projects in Embedded Systems, IoT, and Edge AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

