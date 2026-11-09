export const site = {
  name: "Shyam Prasad",
  shortName: "Shyam",
  role: "Full Stack Software Engineer",
  title: "Shyam Prasad — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer building modern web applications, scalable backends, and real-world digital products with React, Next.js, and headless CMS architectures.",
  email: "shyamprasadpullur@gmail.com",
  linkedin: "https://www.linkedin.com/in/shyamprasadpv",
  github: "https://github.com/ShyamPrasadPV",
  location: "India",
  availability: "Open to full-time roles & select freelance",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact", cta: true },
] as const;

export const hero = {
  eyebrow: "Full Stack Software Engineer",
  headline: "Building modern products from interface to infrastructure.",
  description:
    "I design and ship scalable web applications—crafting polished frontends, resilient APIs, and CMS-driven systems that turn complex product requirements into dependable digital experiences.",
  primaryCta: { href: "#projects", label: "View selected work" },
  secondaryCta: { href: "#contact", label: "Start a conversation" },
} as const;

export const heroStats = [
  { value: 4, suffix: "+", label: "Years shipping products" },
  { value: 8, suffix: "+", label: "Major product builds" },
  { value: 30, suffix: "+", label: "Features delivered" },
] as const;

export const about = {
  eyebrow: "About",
  title: "Engineer focused on products that hold up in production.",
  paragraphs: [
    "Over four years I’ve grown from shipping polished interfaces to owning full product surfaces—frontend architecture, CMS data models, real-time features, and the integrations that connect them.",
    "At Pixbit Solutions I’ve worked across real estate, social networking, e-commerce, and marketing platforms. That range taught me how to choose the right stack, move quickly without sacrificing quality, and collaborate closely with design and product teams.",
    "I care about clean systems, thoughtful UX, and code that teammates can extend with confidence.",
  ],
  highlights: [
    { label: "Focus", value: "Product engineering end-to-end" },
    { label: "Strength", value: "React / Next.js + headless CMS" },
    { label: "Approach", value: "Clarity, performance, maintainability" },
  ],
  interests: [
    { icon: "film" as const, label: "Cinema & storytelling" },
    { icon: "sport" as const, label: "Football" },
  ],
} as const;

export const experience = [
  {
    role: "Software Developer",
    company: "Pixbit Solutions Pvt. Ltd.",
    period: "Jul 2023 — Present",
    current: true,
    summary:
      "Owning frontend architectures and CMS-backed product features for client platforms across multiple industries.",
    achievements: [
      "Engineered front-end architectures for large-scale real estate platforms and dynamic social networking applications.",
      "Integrated headless CMS solutions (Payload, Strapi) with React/Next.js to deliver performant, SEO-ready experiences.",
      "Built complex UI systems, real-time messaging modules, and advanced filtering with Tailwind, Material UI, and Framer Motion.",
      "Owned state management (Redux, React Query) and large-scale data migration work for enterprise clients.",
    ],
  },
] as const;

export const projects = [
  {
    number: "01",
    role: "Lead Front-End Developer",
    title: "UAE Real Estate Investment Platform",
    summary:
      "A high-performance property discovery product managing thousands of real estate assets with search, filters, and interactive maps.",
    challenge:
      "Scale discovery UX across 4,800+ entities without sacrificing speed or editorial clarity.",
    contributions: [
      "Designed a Payload CMS architecture for **4,800+** properties, projects, communities, and developers.",
      "Built global search and advanced filtering for rapid property discovery.",
      "Shipped interactive map views with smooth transitions for listing visualization.",
      "Migrated thousands of legacy data points into the new system.",
    ],
    stack: ["Next.js", "Payload CMS", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    accent: "ocean" as const,
    featured: true,
    liveUrl: undefined as string | undefined,
    sourceUrl: undefined as string | undefined,
  },
  {
    number: "02",
    role: "Front-End Developer",
    title: "Professional Collaboration Platform",
    summary:
      "A real-time networking product connecting students, professionals, and companies with messaging, notifications, and publishing tools.",
    challenge:
      "Deliver responsive social infrastructure that feels instant and reliable under concurrent use.",
    contributions: [
      "Implemented a **real-time messaging module** over WebSockets.",
      "Built a system-wide notification engine for network activity.",
      "Helped develop a custom rich-text editor for academic publishing.",
    ],
    stack: ["React", "Material UI", "Redux", "React Query", "WebSockets"],
    accent: "violet" as const,
    featured: true,
    liveUrl: undefined as string | undefined,
    sourceUrl: undefined as string | undefined,
  },
  {
    number: "03",
    role: "UI / E-Commerce Developer",
    title: "Enterprise E-Commerce Solutions",
    summary:
      "Extending a commerce SDK to support configurable product bundles, cart logic, and secure checkout flows.",
    challenge:
      "Handle sophisticated bundle configuration and payment confirmation without breaking existing SDK contracts.",
    contributions: [
      "Built reusable UI components on the **Microsoft Dynamics 365 SDK**.",
      "Customized cart modules for configurable product bundles.",
      "Supported payment gateway and order confirmation integrations.",
    ],
    stack: ["React", "MS Dynamics 365", "E-Commerce SDK"],
    accent: "amber" as const,
    featured: false,
    liveUrl: undefined as string | undefined,
    sourceUrl: undefined as string | undefined,
  },
  {
    number: "04",
    role: "Front-End Developer",
    title: "CMS-Driven Marketing Sites",
    summary:
      "Visually precise, SEO-optimized corporate sites with dynamic content managed by non-technical teams.",
    challenge:
      "Keep design fidelity high while empowering editors through headless CMS workflows.",
    contributions: [
      "Built the official **Pixbit Solutions** website with strong SEO and Lighthouse performance.",
      "Delivered interactive UI and page transitions for a major UAE logistics provider.",
      "Integrated Strapi CMS data across client sites with strict design fidelity.",
    ],
    stack: ["Next.js", "Strapi CMS", "Tailwind CSS", "React"],
    accent: "forest" as const,
    featured: false,
    liveUrl: undefined as string | undefined,
    sourceUrl: undefined as string | undefined,
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast and intentional.",
    tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Data",
    description: "APIs, realtime systems, and durable state.",
    tags: ["REST APIs", "WebSockets", "Redux", "React Query", "Payload CMS", "Strapi"],
  },
  {
    title: "Product Systems",
    description: "Platforms, commerce, and content operations.",
    tags: ["Headless CMS", "MS Dynamics 365", "E-Commerce", "SEO", "Data Migration"],
  },
  {
    title: "Craft & Delivery",
    description: "How work gets designed, shipped, and refined.",
    tags: ["Figma", "Git / GitHub", "Shadcn UI", "Material UI", "Lighthouse", "Performance"],
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Full Stack Product Development",
    description:
      "End-to-end delivery of web products—from information architecture and UI systems to APIs, CMS models, and production readiness.",
  },
  {
    number: "02",
    title: "Frontend Architecture",
    description:
      "Scalable React/Next.js foundations with reusable component libraries, strong typing, and performance-minded rendering strategies.",
  },
  {
    number: "03",
    title: "Headless CMS & Content Platforms",
    description:
      "Payload and Strapi implementations that give editors freedom while keeping design systems and SEO intact.",
  },
  {
    number: "04",
    title: "Realtime & Integration Engineering",
    description:
      "Messaging, notifications, third-party SDKs, and data migrations that connect product surfaces to reliable backends.",
  },
] as const;

export const contact = {
  eyebrow: "Contact",
  title: "Let’s build the next product together.",
  description:
    "Open to full-time roles and select freelance collaborations. If you need a full stack engineer who can own UI quality and system depth, I’d love to hear from you.",
  formNote: "Prefer email? Reach me directly and I’ll respond within 1–2 business days.",
} as const;
