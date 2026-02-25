"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedCaseStudies } from "@/data/caseStudies";

const caseStudies = getFeaturedCaseStudies();

export function RecentWork() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent Work
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Real projects, real results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/work/${study.slug}`}
                className="group block p-8 bg-surface rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted">
                      {study.tagline}
                    </p>
                  </div>

                  <div className="flex gap-6 md:gap-8">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-2xl font-bold text-accent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-accent font-medium">
                  View case study
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center text-muted hover:text-foreground transition-colors"
          >
            See all work
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
