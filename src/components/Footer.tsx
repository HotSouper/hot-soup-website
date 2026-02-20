"use client";

import { SoupDrop } from "./SoupDrop";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Soup drop animation area */}
      <SoupDrop />

      {/* Footer content with wavy top edge */}
      <div className="relative bg-accent text-white">
        {/* Wavy top edge SVG */}
        <div className="absolute -top-8 left-0 w-full overflow-hidden">
          <svg
            className="relative block w-full h-8"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C300,40 300,10 600,10 C900,10 900,40 1200,40 L1200,40 L0,40 Z"
              fill="var(--accent)"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo / Brand */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Hot Soup</span>
              <span className="text-white/60 text-sm">🍜</span>
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
