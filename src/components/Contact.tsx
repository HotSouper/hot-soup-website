"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s cook something up
          </h2>
          <p className="text-xl text-muted mb-10 max-w-2xl mx-auto">
            Ready to embrace AI and ship products that matter?
            Get in touch and let&apos;s talk about what you&apos;re building.
          </p>

          <a
            href="mailto:hello@hotsoup.agency"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors text-lg"
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
            hello@hotsoup.agency
          </a>
        </motion.div>
      </div>
    </section>
  );
}
