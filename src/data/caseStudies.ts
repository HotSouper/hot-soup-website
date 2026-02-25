export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featured: boolean;
  stats: {
    value: string;
    label: string;
  }[];
  comparison?: {
    metric: string;
    traditional: string;
    hotSoup: string;
  }[];
  highlights?: string[];
  techStack?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "striver",
    title: "Striver",
    tagline: "AI-moderated football community app",
    description:
      "A short-form, AI-moderated football community app built with React Native and Supabase. Designed as a safe space for progressive fans and players, it puts moderation first — using custom AI tools to filter out toxicity and keep the conversation respectful.",
    featured: true,
    stats: [
      { value: "6mo", label: "to MVP" },
      { value: "£95k", label: "total cost" },
      { value: "9.5/10", label: "founder rating" },
    ],
    comparison: [
      { metric: "Timeline to MVP", traditional: "12-18 months", hotSoup: "6 months" },
      { metric: "Cost to MVP", traditional: "£600-800k", hotSoup: "£95k" },
      { metric: "Team Size", traditional: "~9 FTEs", hotSoup: "2-3 modular roles" },
      { metric: "Iteration Speed", traditional: "4-6 weeks per loop", hotSoup: "2-3 days" },
      { metric: "QA + Bugs", traditional: "Manual QA team", hotSoup: "AI-generated tests" },
    ],
    highlights: [
      "Enrichment Worker using OpenAI GPT-3.5 to analyze video content and generate tags",
      "AI-powered content moderation for both text and image analysis in real-time",
      "CodeRabbit AI automatically reviews every pull request",
      "Claude AI integration via comprehensive context documentation",
      "75% test coverage requirement enforced automatically",
      "Railway deployment for microservices with automated scaling",
    ],
    techStack: [
      "React Native",
      "Supabase",
      "OpenAI",
      "Claude Code",
      "CodeRabbit",
      "Railway",
      "Jest",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
