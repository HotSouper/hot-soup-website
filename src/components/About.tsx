"use client";

import { motion } from "framer-motion";

const problems = [
  "Agencies deliver decks, not products — and when they do ship, you can't take over the work.",
  "Teams don't speak the same language — strategy gets lost between design, engineering, and founders.",
  "Fixed scope means fixed learning — real products are built iteratively, not from unchanging documents.",
  "Most teams aren't using AI effectively — they're paying for outdated processes.",
  "Transformation programmes don't trickle down to the people doing the work.",
];

const solutions = [
  "Ship working software every sprint, not just plans.",
  "AI-native tooling from planning through QA.",
  "Transparent process — you're in the room, not waiting for updates.",
  "Skill transfer built in: docs, workflows, and coaching as we go.",
  "No lock-in — commit one sprint at a time.",
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
              After 15 years building software, we&apos;ve seen what works. The teams
              that win focus on solving real problems — AI just lets us get there
              faster.
            </p>

            <p>
              We&apos;re not just here to deliver software. We&apos;re here to help you
              level up. That means lean squads, practical AI integration, and
              no-nonsense collaboration from day one.
            </p>

            <p>
              Whether you need a rapid MVP, embedded support, or coaching to
              transform how your team works — we bring practical AI experience
              without the hype. We bring the spice, but we also bring the spoon.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            {[
              { number: "15+", label: "Years building software" },
              { number: "6mo", label: "Typical MVP timeline" },
              { number: "-75%", label: "vs traditional agency cost" },
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
