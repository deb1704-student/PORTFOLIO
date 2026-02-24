import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-8 text-foreground">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight uppercase mt-12 mb-4 text-foreground">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="font-heading text-xl md:text-2xl font-medium tracking-tight uppercase mt-8 mb-3 text-foreground">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="font-sans text-foreground/80 leading-relaxed mb-6 font-light">
                {children}
            </p>
        ),
        a: ({ href, children }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
            >
                {children}
            </a>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 font-sans text-foreground/80 font-light">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 font-sans text-foreground/80 font-light">
                {children}
            </ol>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-accent/50 pl-6 my-6 italic text-foreground/70 font-sans">
                {children}
            </blockquote>
        ),
        code: ({ children }) => (
            <code className="bg-card px-2 py-0.5 rounded text-sm font-mono text-accent">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="bg-card border border-white/5 rounded-xl p-6 overflow-x-auto mb-6 text-sm">
                {children}
            </pre>
        ),
        hr: () => <hr className="border-white/10 my-12" />,
        ...components,
    };
}
