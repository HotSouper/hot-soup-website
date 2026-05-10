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
  {
    slug: "cognibio",
    title: "CogniBio",
    tagline: "AI agent swarm replacing biopharma consulting engagements",
    description:
      "A multi-agent reasoning framework for biopharma portfolio planning and commercial strategy. A founder types a vague KRAS question, has a brief conversation until the swarm gates open, then watches agents execute live against proprietary GTM benchmarking data — landing on a typed NPV result page with charts, sensitivities, and per-finding source attribution. Replaces traditional consulting engagements with structured, traceable, iteratively improvable analysis.",
    featured: false,
    stats: [
      { value: "TBD", label: "to demo" },
      { value: "TBD", label: "total cost" },
      { value: "1,482", label: "proprietary data points" },
    ],
    comparison: [
      { metric: "Time to insight", traditional: "6-12 weeks per engagement", hotSoup: "minutes per question" },
      { metric: "Cost per analysis", traditional: "£250k+ consulting fee", hotSoup: "marginal API cost" },
      { metric: "Auditability", traditional: "PowerPoint, no trail", hotSoup: "Langfuse span per agent call" },
      { metric: "Iteration", traditional: "New SOW per refinement", hotSoup: "Conversational follow-ups (explain, patch, reswarm)" },
      { metric: "Data integration", traditional: "Manual analyst synthesis", hotSoup: "Proprietary tool ingestion + canonical dimensions" },
    ],
    highlights: [
      "Conversational IntakeAgent (Claude Haiku) refines vague questions through SUBJECT/STAGE/SCOPE/DECISION readiness gates",
      "DAG pipeline: Analyst → Researcher → Synthesizer → FinancialModeler with declarative topology config",
      "FinancialModeler produces typed KRAS NPV outputs — NPV with CI, PTRS by phase, spend curves, sensitivity factors",
      "Per-finding source attribution (web, proprietary, database, llm) visually distinguished in the UI",
      "Langfuse spans on every agent call for persistent observability and eval harness",
      "Pydantic v2 schemas enforce all agent I/O contracts; Instructor adds structured-output validation + retry",
      "185 unit tests with separate integration suite for live API calls",
    ],
    techStack: [
      "Anthropic Claude",
      "Instructor",
      "FastAPI",
      "Next.js 16",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Recharts",
      "Pydantic",
      "Langfuse",
      "Railway",
    ],
  },
  {
    slug: "heard",
    title: "Heard",
    tagline: "Voice-first goal-setting app for people with ADHD",
    description:
      "A voice-first, AI-enhanced daily goal-setting app designed for people with ADHD. Users speak their goals; OpenAI Whisper transcribes; an Inspo Core engine tracks tags, scores, and momentum across accept/complete/dismiss/miss actions, then refines recommendations via OpenAI. Designed to lower friction at the moment of intention and build momentum one day at a time.",
    featured: false,
    stats: [
      { value: "TBD", label: "to MVP" },
      { value: "TBD", label: "total cost" },
      { value: "TBD", label: "founder rating" },
    ],
    comparison: [
      { metric: "Timeline to MVP", traditional: "9-12 months", hotSoup: "TBD" },
      { metric: "Cost to MVP", traditional: "£400-600k", hotSoup: "TBD" },
      { metric: "Team Size", traditional: "~6 FTEs", hotSoup: "2-3 modular roles" },
      { metric: "AI integration", traditional: "Bolt-on after launch", hotSoup: "Voice + tag refinement from day one" },
    ],
    highlights: [
      "Voice capture via expo-av; transcription via OpenAI Whisper",
      "Inspo Core: per-tag score and momentum that respond to user actions (accept +1, complete +2/+momentum, dismiss/miss −1)",
      "Backend OpenAI loop refines and prunes the Inspo Core after meaningful activity or on a daily cadence",
      "Buddy suggestions flow in via webhook with neutral starting momentum",
      "Magic-link auth via Supabase — designed for low-friction returning sessions",
    ],
    techStack: [
      "React Native (Expo SDK 53)",
      "Supabase",
      "OpenAI Whisper",
      "OpenAI",
      "TypeScript",
    ],
  },
  {
    slug: "wotv",
    title: "Way of the Viking",
    tagline: "Multi-tenant coaching programme platform — admin web + mobile app",
    description:
      "A four-repo platform powering Viking-style coaching programmes. Admins run tours, tribes, tasks, announcements, and support chat through a Next.js dashboard with a drag-drop weekly planner. Participants check in, complete tasks, and engage via the Expo mobile app. A shared Zod schema package enforces contracts across mobile, admin, and database — every API body validated against the same source of truth.",
    featured: false,
    stats: [
      { value: "TBD", label: "to launch" },
      { value: "TBD", label: "total cost" },
      { value: "4 repos", label: "one shared contract" },
    ],
    comparison: [
      { metric: "Timeline to launch", traditional: "12-18 months", hotSoup: "TBD" },
      { metric: "Cost to launch", traditional: "£700k-1m", hotSoup: "TBD" },
      { metric: "Team Size", traditional: "~10 FTEs across mobile/web/backend", hotSoup: "2-3 modular roles" },
      { metric: "Type safety across surfaces", traditional: "Drift between web, mobile, DB", hotSoup: "@hotsouper/shared Zod schemas — one source of truth" },
      { metric: "Iteration Speed", traditional: "4-6 weeks per loop", hotSoup: "2-3 days" },
    ],
    highlights: [
      "Four-repo split — wotv-admin, wotv-mobile, wotv-shared, wotv-infra — with a published @hotsouper/shared package as the contract",
      "Drag-drop weekly tour planner (@dnd-kit) with template sidebar, BAU overlay, and multi-level filters",
      "Three-client Supabase pattern (browser anon, SSR anon-with-cookies, server-only service role) with admin checks via getAdminUser() — never user_metadata",
      "Mobile deep-link auth handshake — admin invites land on wotv://auth/callback in the Expo app",
      "Migrations and RLS policies isolated to wotv-infra; CLAUDE.md files codify cross-repo rules for AI assistants",
      "At-risk-user detection surfaces disengaged participants on the admin dashboard",
      "Realtime support inbox with unread/mute indicators",
    ],
    techStack: [
      "Next.js 15",
      "React 19",
      "Expo",
      "React Native",
      "TypeScript (strict)",
      "Supabase",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "@dnd-kit",
      "Vitest",
      "Railway",
    ],
  },
  {
    slug: "toddy-tool-hire",
    title: "Toddy Tool Hire",
    tagline: "AI quote builder for a 60-year-old plant & tool hire firm",
    description:
      "An AI-powered quote builder for Toddy Tool Hire, a Suffolk-based plant, tool, and machinery hire firm serving construction and landscaping trades. Customers describe the job in their own words — \"laying a 30m² patio next weekend\", \"cutting back a hedge along a 50m boundary\" — and the assistant returns a structured rental quote: the right kit from the catalogue, hire duration, accessories, and total price. Replaces a manual phone-and-email back-and-forth with a self-serve flow that still hands off cleanly to the team.",
    featured: false,
    stats: [
      { value: "TBD", label: "build time" },
      { value: "TBD", label: "total cost" },
      { value: "TBD", label: "quote turnaround" },
    ],
    comparison: [
      { metric: "Quote turnaround", traditional: "Phone/email — hours to next day", hotSoup: "Conversational, self-serve in minutes" },
      { metric: "After-hours coverage", traditional: "Lost lead until Monday", hotSoup: "Quote ready when the customer is" },
      { metric: "Catalogue accuracy", traditional: "Memory + spreadsheet lookup", hotSoup: "Structured catalogue grounding — no hallucinated SKUs" },
      { metric: "Build approach", traditional: "Bespoke ecommerce rebuild — £80-150k", hotSoup: "AI layer over the existing catalogue" },
    ],
    highlights: [
      "Natural-language job intake — customers describe the work, not the SKU",
      "Catalogue-grounded recommendations across plant, powered access, concrete compaction, gardening, and surveying kit",
      "Quote handoff path to the Toddy team for confirmation, delivery, and payment — AI doesn't replace the relationship, it warms the lead",
      "Sits alongside the existing Vooba/WooCommerce site rather than rebuilding it",
      "Tuned to brand voice and local context (Martlesham depot, trade vs DIY, weekend vs weekday hire)",
    ],
    techStack: [
      "React Native",
      "Google Gemini",
      "TypeScript",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((study) => study.featured);
}
