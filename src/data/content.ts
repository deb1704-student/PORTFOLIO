export const projects = [
    {
        id: "01",
        title: "Vanguard Payment Gateway",
        summary: "A high-throughput, horizontally scalable payment processing system built for modern sub-ledger architectures.",
        problem: "Legacy financial systems often struggle with race conditions and slow reconciliation times during high volume peak hours.",
        architecture: "Event-driven architecture utilizing Kafka for message broking, Redis for distributed locking, and PostgreSQL for ACID transactions.",
        stack: ["Go", "Kafka", "PostgreSQL", "Redis", "gRPC"],
        link: "https://github.com",
        image: "/project-1.jpg",
        color: "#00F0FF"
    },
    {
        id: "02",
        title: "Quantum Ledge",
        summary: "Real-time algorithmic trading dashboard with millisecond latency data visualization.",
        problem: "Retail traders lack access to institutional grade, low-latency execution and visualization tools.",
        architecture: "WebSockets for real-time market data streaming pushing to a highly optimized React frontend using WebGL for rendering thousands of data points.",
        stack: ["TypeScript", "Next.js", "WebGL", "Node.js", "WebSockets"],
        link: "https://github.com",
        image: "/project-2.jpg",
        color: "#0076FF"
    },
    {
        id: "03",
        title: "Nautilus Auth",
        summary: "Zero-trust authentication and identity management service.",
        problem: "Implementing robust, secure auth from scratch is error-prone and time-consuming for MVP builders.",
        architecture: "Microservice pattern using JWTs, bcrypt for hashing, and Redis for session blacklisting. Deployed to edge network for low latency verifications.",
        stack: ["Rust", "Actix", "Redis", "Cloudflare Workers"],
        link: "https://github.com",
        image: "/project-3.jpg",
        color: "#FAFAFA"
    }
];

export const skills = {
    core: ["System Design", "Microservices", "API Design", "Performance Optimization"],
    languages: ["TypeScript", "Go", "Python", "Rust", "Java"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    backend: ["Node.js", "Express", "gRPC", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Kafka"],
    cloud: ["AWS", "Docker", "Kubernetes", "Vercel", "Cloudflare"]
};
