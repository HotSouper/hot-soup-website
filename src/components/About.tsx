"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Hot Soup?
          </h2>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              After 15 years building software across every tech stack imaginable,
              I&apos;ve seen what works and what doesn&apos;t. The arrival of AI hasn&apos;t
              changed the fundamentals—it&apos;s amplified them.
            </p>

            <p>
              The teams that win are still the ones focused on solving real user
              problems. AI is the enabler, not the goal. It shifts our focus from
              writing code to testing viability, from building features to
              validating ideas.
            </p>

            <p>
              Hot Soup exists to help you navigate this shift. Whether you&apos;re a
              product team ready to level up, an entrepreneur with a vision, or an
              enterprise looking to innovate—we bring practical AI experience
              without the hype.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              { number: "15+", label: "Years experience" },
              { number: "AI", label: "Early adopter" },
              { number: "100%", label: "User-focused" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
