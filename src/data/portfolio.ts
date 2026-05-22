export const stats = [
  { value: "2+", label: "Years in production" },
  { value: "5+", label: "Shipped products" },
  { value: "7+", label: "Public repositories" },
  { value: "100%", label: "End-to-end ownership" },
] as const;

export const site = {
  name: "Junaid Aziz",
  title: "Full Stack Developer & Prompt Engineer",
  headline: "Full-stack product engineering",
  subheadline: "Mobile · Web · APIs · AI workflows",
  tagline:
    "I design and deliver production software for teams that need one accountable engineer across mobile, web, and backend—with clear communication and AI-accelerated execution.",
  availability: "Available for contract & full-time roles",
  email: "junaidaziz1899@gmail.com",
  phone: "+92 316 853 2829",
  phoneHref: "tel:+923168532829",
  location: "Rawalpindi, Punjab, Pakistan",
  locationShort: "Pakistan",
  yearsExperience: "2+ years",
  company: "Voultrex",
  cvUrl: "/Junaid_Aziz_CV.pdf",
  social: {
    github: "https://github.com/junaidumr",
    linkedin: "https://www.linkedin.com/in/junaid-aziz-voultrex/",
    instagram: "https://www.instagram.com/junaid.umr/",
    facebook: "https://www.facebook.com/junaid.umr",
  },
} as const;

export const socialLinks = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Instagram", href: site.social.instagram },
  { label: "Facebook", href: site.social.facebook },
] as const;

export const services = [
  {
    title: "Full Stack Web",
    description:
      "Production web applications with Next.js, React, and TypeScript—performance, SEO, accessibility, and maintainable architecture.",
    icon: "web" as const,
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform iOS and Android with React Native and Expo—from MVP through App Store and Play Store release.",
    icon: "mobile" as const,
  },
  {
    title: "Custom Backends",
    description:
      "REST APIs, authentication, data modeling, and server logic scoped to your product requirements and scale.",
    icon: "server" as const,
  },
  {
    title: "AI & Prompt Engineering",
    description:
      "AI integration in products and engineering workflows—structured prompting for faster delivery and higher code quality.",
    icon: "ai" as const,
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discover",
    description: "Understand goals, users, and technical constraints before writing code.",
  },
  {
    step: "02",
    title: "Design & Build",
    description: "Ship iteratively with clean architecture, modern stack, and AI-assisted velocity.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "Deploy mobile and web products with testing, documentation, and handover.",
  },
  {
    step: "04",
    title: "Support",
    description: "Iterate on feedback, fix issues, and scale features as your product grows.",
  },
] as const;

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Node.js",
  "REST APIs",
  "PostgreSQL",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "AI Tools",
] as const;

export const about = {
  paragraphs: [
    "I'm Junaid Aziz—a full stack developer and prompt engineer based in Rawalpindi, Pakistan, currently building products at Voultrex. I own delivery from interface through API and database: mobile clients, admin dashboards, and backends built for real operations.",
    "Over two years I have shipped a multi-app coffee shop platform (customer, partner, and rider), productivity software, and personal finance products. I pair strong engineering fundamentals with AI-native workflows so teams move quickly without compromising reliability.",
    "Organizations engage me when they need a single technical owner who communicates clearly, documents decisions, and ships across mobile, web, and backend without coordination overhead.",
  ],
  highlights: [
    { label: "Current role", value: `Full Stack @ ${site.company}` },
    { label: "Core strength", value: "Mobile + backend + AI workflows" },
    { label: "Experience", value: site.yearsExperience },
    { label: "Location", value: site.location },
  ],
} as const;

export const skills = [
  "Full Stack Development",
  "Prompt Engineering",
  "React Native / Expo",
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Custom REST APIs",
  "Mobile App Development",
  "AI-Assisted Development",
  "PostgreSQL",
  "Git & GitHub",
  "UI/UX Implementation",
] as const;

export const projects = [
  {
    title: "Coffee Shop Mobile App",
    description:
      "End-to-end customer app for ordering, menu discovery, and checkout—built for real coffee shop operations on iOS and Android.",
    tags: ["React Native", "Expo", "TypeScript", "Mobile"],
    liveUrl: null,
    repoUrl: "https://github.com/junaidumr/Expo-App",
    featured: true,
    accent: "from-amber-600/25 via-amber-900/10 to-transparent",
    category: "Consumer mobile",
    year: "2025",
  },
  {
    title: "Partner & Rider Apps",
    description:
      "Operations suite for merchants and delivery riders—live orders, status sync, and logistics within one product ecosystem.",
    tags: ["React Native", "Expo", "Backend APIs"],
    liveUrl: null,
    repoUrl: "https://github.com/junaidumr/Expo-Dashboard",
    featured: true,
    accent: "from-violet-600/25 via-violet-900/10 to-transparent",
    category: "Operations platform",
    year: "2025",
  },
  {
    title: "UpToDo — Todo App",
    description:
      "Productivity application for task management with a polished mobile UX and TypeScript codebase.",
    tags: ["TypeScript", "React Native", "Expo"],
    liveUrl: null,
    repoUrl: "https://github.com/junaidumr/UpToDoApp",
    featured: true,
    accent: "from-cyan-600/25 via-cyan-900/10 to-transparent",
    category: "Productivity",
    year: "2024",
  },
  {
    title: "BudgetFree",
    description:
      "Personal finance app for expense tracking, budgets, and financial goals—full TypeScript mobile product.",
    tags: ["TypeScript", "Mobile", "Finance"],
    liveUrl: null,
    repoUrl: "https://github.com/junaidumr/budget-free",
    featured: false,
    accent: "from-emerald-600/25 via-emerald-900/10 to-transparent",
    category: "Fintech",
    year: "2026",
  },
] as const;

export const experience = [
  {
    role: "Full Stack Developer & Prompt Engineer",
    company: "Voultrex",
    period: "2024 — Present",
    location: "Pakistan · Remote-friendly",
    highlights: [
      "Led development of multi-app coffee shop platform (customer, partner, rider).",
      "Built custom backends and REST APIs for mobile and web clients.",
      "Applied prompt engineering and AI tooling to accelerate delivery and code quality.",
      "Shipped BudgetFree, UpToDo, and internal dashboards end to end.",
    ],
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
