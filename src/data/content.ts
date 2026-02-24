// ─── Interfaces ───────────────────────────────────────────────

export interface Project {
    id: string;
    title: string;
    summary: string;
    problem: string;
    architecture: string;
    stack: string[];
    link: string;
    image: string;
    color: string;
}

export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    tech: string[];
}

export interface EducationItem {
    id: string;
    institution: string;
    degree: string;
    period: string;
    details?: string;
}

export interface SkillsMap {
    [category: string]: string[];
}

export interface SocialLink {
    label: string;
    href: string;
    icon: "mail" | "github" | "linkedin" | "twitter";
}

// ─── Projects ─────────────────────────────────────────────────

export const projects: Project[] = [
    {
        id: "01",
        title: "Vanguard Payment Gateway",
        summary:
            "A high-throughput, horizontally scalable payment processing system built for modern sub-ledger architectures.",
        problem:
            "Legacy financial systems often struggle with race conditions and slow reconciliation times during high volume peak hours.",
        architecture:
            "Event-driven architecture utilizing Kafka for message broking, Redis for distributed locking, and PostgreSQL for ACID transactions.",
        stack: ["Go", "Kafka", "PostgreSQL", "Redis", "gRPC"],
        link: "#", // TODO: Replace with actual project URL
        image: "/projects/vanguard.jpg", // TODO: Add project screenshot
        color: "#00F0FF",
    },
    {
        id: "02",
        title: "Quantum Ledge",
        summary:
            "Real-time algorithmic trading dashboard with millisecond latency data visualization.",
        problem:
            "Retail traders lack access to institutional grade, low-latency execution and visualization tools.",
        architecture:
            "WebSockets for real-time market data streaming pushing to a highly optimized React frontend using WebGL for rendering thousands of data points.",
        stack: ["TypeScript", "Next.js", "WebGL", "Node.js", "WebSockets"],
        link: "#", // TODO: Replace with actual project URL
        image: "/projects/quantum.jpg", // TODO: Add project screenshot
        color: "#0076FF",
    },
    {
        id: "03",
        title: "Nautilus Auth",
        summary: "Zero-trust authentication and identity management service.",
        problem:
            "Implementing robust, secure auth from scratch is error-prone and time-consuming for MVP builders.",
        architecture:
            "Microservice pattern using JWTs, bcrypt for hashing, and Redis for session blacklisting. Deployed to edge network for low latency verifications.",
        stack: ["Rust", "Actix", "Redis", "Cloudflare Workers"],
        link: "#", // TODO: Replace with actual project URL
        image: "/projects/nautilus.jpg", // TODO: Add project screenshot
        color: "#FAFAFA",
    },
];

// ─── Experience ───────────────────────────────────────────────

export const experience: ExperienceItem[] = [
    // TODO: Replace with your actual experience
    {
        id: "exp-1",
        role: "Software Engineer",
        company: "Company Name",
        period: "2024 — Present",
        description:
            "Led development of high-performance microservices handling millions of transactions. Architected event-driven systems with sub-100ms latency requirements.",
        tech: ["Go", "Kafka", "PostgreSQL", "Kubernetes"],
    },
    {
        id: "exp-2",
        role: "Full-Stack Developer",
        company: "Company Name",
        period: "2023 — 2024",
        description:
            "Built and shipped customer-facing products from ideation to production. Owned the full stack including CI/CD pipelines and monitoring infrastructure.",
        tech: ["TypeScript", "Next.js", "Node.js", "AWS"],
    },
    {
        id: "exp-3",
        role: "Backend Engineering Intern",
        company: "Company Name",
        period: "2022 — 2023",
        description:
            "Contributed to core platform APIs serving 50K+ daily active users. Improved query performance by 40% through index optimization and caching strategies.",
        tech: ["Python", "Django", "Redis", "Docker"],
    },
];

// ─── Education ────────────────────────────────────────────────

export const education: EducationItem[] = [
    // TODO: Replace with your actual education
    {
        id: "edu-1",
        institution: "University Name",
        degree: "B.Tech in Computer Science & Engineering",
        period: "2020 — 2024",
        details:
            "Relevant coursework: Distributed Systems, Database Management, Operating Systems, Computer Networks, Data Structures & Algorithms.",
    },
];

// ─── Skills ───────────────────────────────────────────────────

export const skills: SkillsMap = {
    core: ["System Design", "Microservices", "API Design", "Performance Optimization"],
    languages: ["TypeScript", "Go", "Python", "Rust", "Java"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    backend: ["Node.js", "Express", "gRPC", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
    cloud: ["AWS", "Docker", "Kubernetes", "Vercel", "Cloudflare"],
};

// ─── Social Links ─────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
    { label: "Email", href: "mailto:hello@debanjandas.com", icon: "mail" }, // TODO: Replace with actual email
    { label: "GitHub", href: "https://github.com/debanjan-das", icon: "github" }, // TODO: Replace with actual GitHub URL
    { label: "LinkedIn", href: "https://linkedin.com/in/debanjan-das", icon: "linkedin" }, // TODO: Replace with actual LinkedIn URL
    { label: "X (Twitter)", href: "https://x.com/debanjan_das", icon: "twitter" }, // TODO: Replace with actual X URL
];

// ─── Navigation ───────────────────────────────────────────────

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "/blog" },
];
