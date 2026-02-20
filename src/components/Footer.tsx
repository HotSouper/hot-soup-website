"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Wavy surface */}
      <div className="relative h-12 overflow-visible">
        <svg
          className="absolute bottom-0 w-full h-12"
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,30 C150,55 350,5 600,30 C850,55 1050,5 1200,30 L1200,50 L0,50 Z"
            fill="var(--accent)"
            animate={{
              d: [
                "M0,30 C150,55 350,5 600,30 C850,55 1050,5 1200,30 L1200,50 L0,50 Z",
                "M0,30 C150,5 350,55 600,30 C850,5 1050,55 1200,30 L1200,50 L0,50 Z",
                "M0,30 C150,55 350,5 600,30 C850,55 1050,5 1200,30 L1200,50 L0,50 Z",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="relative bg-accent text-white -mt-4 overflow-visible">
        {/* Rising bubbles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2"
            style={{
              width: 14 + (i % 3) * 6,
              height: 14 + (i % 3) * 6,
              left: `${15 + (i * 22)}%`,
              bottom: 20,
            }}
            animate={{
              y: [0, -180, -200],
              opacity: [0, 0.6, 0.9, 0],
              scale: [0.6, 1, 0.9, 1.6],
              backgroundColor: ["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)", "rgba(255,200,100,0.8)", "rgba(255,200,100,0)"],
              borderColor: ["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)", "rgba(255,220,150,1)", "rgba(255,220,150,0)"],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.9,
              ease: "easeOut",
              times: [0, 0.8, 0.92, 1],
            }}
          />
        ))}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo / Brand */}
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Hot Soup"
                width={120}
                height={24}
                className="brightness-0 invert"
              />
            </div>

            {/* Links */}
            <nav className="flex gap-8 text-sm">
              <a href="#services" className="hover:text-white/80 transition-colors">
                Services
              </a>
              <a href="#contact" className="hover:text-white/80 transition-colors">
                Contact
              </a>
            </nav>

            {/* Social / Contact */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@hotsoup.agency"
                className="hover:text-white/80 transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© {currentYear} Hot Soup. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
