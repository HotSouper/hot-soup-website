"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent bg-accent/10 rounded-full">
            AI-Powered Product Development
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ideas into reality,{" "}
          <span className="text-accent">faster</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          15 years of software development expertise meets cutting-edge AI.
          We help product teams embrace the future and ship what matters.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-border font-semibold rounded-full hover:bg-surface transition-colors"
          >
            Our services
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
