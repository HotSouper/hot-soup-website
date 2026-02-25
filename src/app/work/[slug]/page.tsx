import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Hot Soup",
    };
  }

  return {
    title: `${study.title} | Hot Soup`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/work"
            className="inline-flex items-center text-muted hover:text-foreground transition-colors mb-12"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            All work
          </Link>

          {/* Header */}
          <header className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {study.title}
            </h1>
            <p className="text-2xl text-accent mb-6">
              {study.tagline}
            </p>
            <p className="text-xl text-muted leading-relaxed">
              {study.description}
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 p-8 bg-surface rounded-2xl border border-border">
            {study.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {study.comparison && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                Traditional vs Hot Soup
              </h2>
              <div className="overflow-hidden rounded-2xl border border-border">
                <table className="w-full">
                  <thead>
                    <tr className="bg-surface">
                      <th className="px-6 py-4 text-left font-semibold">Metric</th>
                      <th className="px-6 py-4 text-left font-semibold text-muted">Traditional</th>
                      <th className="px-6 py-4 text-left font-semibold text-accent">Hot Soup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.comparison.map((row, index) => (
                      <tr
                        key={row.metric}
                        className={index % 2 === 0 ? "bg-background" : "bg-surface/50"}
                      >
                        <td className="px-6 py-4 font-medium">{row.metric}</td>
                        <td className="px-6 py-4 text-muted">{row.traditional}</td>
                        <td className="px-6 py-4 text-accent font-medium">{row.hotSoup}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Highlights */}
          {study.highlights && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                Technical Highlights
              </h2>
              <ul className="space-y-4">
                {study.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted">
                    <span className="text-accent mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {study.techStack && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {study.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-surface border border-border rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-surface rounded-2xl border border-border text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to build something?
            </h2>
            <p className="text-muted mb-6">
              Let&apos;s talk about your project and how we can help you ship faster.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              Get cooking
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
