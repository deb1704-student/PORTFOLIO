import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft, MoveUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Thoughts on software engineering, system design, fintech, and building products.",
};

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen w-full bg-background text-foreground pt-32 pb-24 px-4 md:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors font-sans text-sm uppercase tracking-widest mb-16 hoverable"
                >
                    <ArrowLeft size={16} />
                    Back
                </Link>

                {/* Header */}
                <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase mb-4">
                    Blog
                </h1>
                <p className="font-sans text-foreground/70 text-lg font-light mb-16 max-w-xl">
                    Thoughts on software engineering, system design, fintech, and building products.
                </p>

                {/* Posts List */}
                {posts.length === 0 ? (
                    <p className="font-sans text-foreground/50 text-lg">
                        No posts yet. Check back soon.
                    </p>
                ) : (
                    <div className="flex flex-col divide-y divide-white/10">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group py-8 first:pt-0 hoverable"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-tight font-medium group-hover:text-accent transition-colors duration-300 mb-2">
                                            {post.title}
                                        </h2>
                                        <p className="font-sans text-foreground/70 font-light leading-relaxed max-w-2xl">
                                            {post.excerpt}
                                        </p>
                                        {post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs font-mono px-2 py-0.5 rounded-full border border-white/10 text-foreground/50"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="font-mono text-xs text-foreground/40">
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <MoveUpRight
                                            size={16}
                                            className="text-foreground/30 group-hover:text-accent transition-colors"
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
