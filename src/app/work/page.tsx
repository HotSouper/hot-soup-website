import { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Work | Hot Soup",
  description: "Case studies and recent projects from Hot Soup, an AI-native product studio.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Real projects, real results. See how we help teams ship faster and level up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block p-8 bg-surface rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {study.title}
                </h2>
                <p className="text-muted mb-6">
                  {study.tagline}
                </p>

                <div className="flex gap-6 mb-6">
                  {study.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-xl font-bold text-accent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-accent font-medium">
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
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
