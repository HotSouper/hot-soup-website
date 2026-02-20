"use client";

import { motion } from "framer-motion";

const problems = [
  "100-slide decks don't change how teams build.",
  "Top-down transformation rarely sticks.",
  "Executive workshops don't trickle down to the people doing the work.",
  "Mindset change is critical — but not enough on its own.",
  "Failure is quietly buried, not learned from.",
  "Real progress can't wait 6 months for a pilot to end.",
];

const solutions = [
  "Mobilising the doers — the people closest to the work.",
  "Creating a culture of empowered evangelism, where change spreads from within.",
  "Making transformation feel beneficial from Day 1.",
  "Coaching in the open — learn by doing, not watching.",
  "Getting better by experimenting: Cook, serve, taste, adjust.",
];

export function About() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Problem / Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Problem Column */}
          <motion.div
            className="bg-background p-8 rounded-2xl border border-border"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Why most product transformations fail
            </h3>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-muted"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <span className="text-accent mt-1">✕</span>
                  {problem}
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 pt-6 border-t border-border text-muted">
              <strong className="text-foreground">The result:</strong> Wasted money. Burned-out teams. Great people made to feel useless.
            </p>
          </motion.div>

          {/* Solution Column */}
          <motion.div
            className="bg-secondary/10 p-8 rounded-2xl border border-secondary/30"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Make change. Make soup.
            </h3>
            <p className="text-muted mb-6">
              We help product teams deliver real transformation by:
            </p>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-muted"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <span className="text-secondary mt-1">✓</span>
                  {solution}
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 pt-6 border-t border-secondary/30 text-muted">
              <strong className="text-foreground">The result:</strong> Higher ROI from work that actually ships and sticks. Stronger team cohesion, retention and satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Why Hot Soup section */}
        <motion.div
          className="max-w-4xl mx-auto"
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
