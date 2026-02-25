"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Rapid Builds",
    description:
      "Got an idea? We'll ship a working MVP in weeks, not months. AI-native development means lower cost, faster iteration, and production-ready code you can take over.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Product Coaching",
    description:
      "Level up your team's product thinking. One-to-one or group sessions for PMs, founders, and leaders — covering both timeless fundamentals and AI-powered workflows.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    title: "Embedded Sprints",
    description:
      "Need ongoing support? We embed with your team sprint-by-sprint. Build together, ship together, and we transfer skills as we go — no vendor lock-in.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Build fast, learn fast, take control
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative p-8 bg-surface rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-accent/10 text-accent rounded-xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
