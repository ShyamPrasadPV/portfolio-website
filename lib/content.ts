export const site = {
  name: "Shyam Prasad",
  title: "Shyam Prasad — Software Developer",
  description:
    "Front-End Developer crafting scalable, interactive web experiences with React, Next.js, and modern UI architectures.",
  email: "shyamprasadpullur@gmail.com",
  linkedin: "https://www.linkedin.com/in/shyamprasadpv",
  github: "https://github.com/ShyamPrasadPV",
} as const;

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Let's Talk", cta: true },
] as const;

export const heroStats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Major Projects" },
  { value: 100, suffix: "+", label: "UI Components Built" },
] as const;

export const experience = {
  role: "Software Developer",
  company: "Pixbit Solutions Pvt. Ltd.",
  period: "July 2023 - Present",
  current: true,
  achievements: [
    "Engineered and maintained robust front-end architectures for diverse client projects, ranging from large-scale real estate platforms to dynamic social networking applications.",
    "Specialized in integrating headless CMS solutions (Payload, Strapi) with modern React/Next.js front-ends to deliver highly performant, SEO-optimized web experiences.",
    "Spearheaded the development of complex UI components, real-time messaging modules, and advanced filtering systems using Tailwind CSS, Material UI, and Framer Motion.",
    "Demonstrated expertise in state management (Redux, React Query) and data migration, successfully handling large-scale datasets for enterprise clients.",
  ],
} as const;

export const projects = [
  {
    number: "01",
    role: "Lead Front-End Developer",
    title: "UAE Real Estate Investment Platform",
    challenge:
      "Building a high-performance property discovery platform capable of managing and filtering thousands of real estate assets.",
    contributions: [
      "Developed a comprehensive Payload CMS architecture to manage over **4,800 complex entities** (properties, projects, communities, developers).",
      "Engineered a global search UI and advanced filtering system for rapid property discovery.",
      "Built highly engaging, interactive map views with smooth transitions to visualize property listings.",
      "Executed a seamless migration of thousands of legacy data points into the new system.",
    ],
    stack: [
      "React/Next.js",
      "Payload CMS",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
  },
  {
    number: "02",
    role: "Front-End Developer",
    title: "Professional Collaboration & Networking Platform",
    challenge:
      "Creating a real-time, comprehensive social platform connecting students, professionals, and companies.",
    contributions: [
      "Architected and implemented a **real-time messaging module** for user-to-user communication via WebSockets.",
      "Developed a dynamic, system-wide notification engine to keep users informed of network activity.",
      "Assisted in building a custom rich-text editor, enabling users to format and publish academic documents directly on the platform.",
    ],
    stack: [
      "React",
      "Material UI",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "WebSockets",
    ],
  },
  {
    number: "03",
    role: "UI/E-Commerce Developer",
    title: "Enterprise E-Commerce Solutions",
    challenge:
      "Extending a robust e-commerce SDK to handle complex, configurable product bundles and payment flows.",
    contributions: [
      "Developed custom, reusable UI components integrated directly with the **Microsoft Dynamics 365 SDK**.",
      "Customized cart management modules to handle sophisticated logic for configurable product bundles.",
      "Assisted in the critical integration of payment gateways and secure order confirmation flows.",
    ],
    stack: ["React", "MS Dynamics 365", "E-Commerce SDK"],
  },
  {
    number: "04",
    role: "Front-End Developer",
    title: "High-Performance CMS Marketing Sites",
    challenge:
      "Delivering visually striking, SEO-optimized corporate websites with dynamic content managed by non-technical teams.",
    contributions: [
      "Built the official **Pixbit Solutions website**, prioritizing SEO and Lighthouse performance scores.",
      "Developed elegant, interactive UI elements with smooth page transitions for a major UAE logistics provider.",
      "Seamlessly integrated dynamic Strapi CMS data across multiple client sites, empowering content editors while maintaining strict design fidelity.",
    ],
    stack: ["React", "Next.js", "Strapi CMS", "Tailwind CSS"],
  },
] as const;

export const skillGroups = [
  {
    title: "Core Frameworks",
    icon: "layers" as const,
    tags: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "JavaScript (ES6+)", highlight: false },
      { name: "TypeScript", highlight: false },
    ],
  },
  {
    title: "UI & Styling",
    icon: "brush" as const,
    tags: [
      { name: "Tailwind CSS", highlight: true },
      { name: "Material UI", highlight: false },
      { name: "Shadcn UI", highlight: false },
      { name: "Framer Motion", highlight: false },
      { name: "CSS3 / SCSS", highlight: false },
    ],
  },
  {
    title: "State & Data",
    icon: "database" as const,
    tags: [
      { name: "Redux", highlight: true },
      { name: "React Query", highlight: true },
      { name: "WebSockets", highlight: false },
      { name: "REST APIs", highlight: false },
    ],
  },
  {
    title: "CMS & Platforms",
    icon: "server" as const,
    tags: [
      { name: "Payload CMS", highlight: true },
      { name: "Strapi CMS", highlight: true },
      { name: "MS Dynamics 365", highlight: false },
      { name: "Headless CMS", highlight: false },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "wrench" as const,
    tags: [
      { name: "Git / GitHub", highlight: false },
      { name: "SEO Optimization", highlight: false },
      { name: "Lighthouse", highlight: false },
      { name: "Figma", highlight: false },
      { name: "Data Migration", highlight: false },
    ],
  },
  {
    title: "Specializations",
    icon: "star" as const,
    tags: [
      { name: "Real Estate Platforms", highlight: false },
      { name: "Social Networks", highlight: false },
      { name: "E-Commerce", highlight: false },
      { name: "Marketing Sites", highlight: false },
      { name: "Performance Tuning", highlight: false },
    ],
  },
] as const;

export const aboutCards = [
  { icon: "code" as const, num: "4+", text: "Years of crafting UIs" },
  { icon: "rocket" as const, num: "30+", text: "Features Shipped" },
  { icon: "factory" as const, num: "8+", text: "Industries served" },
] as const;
