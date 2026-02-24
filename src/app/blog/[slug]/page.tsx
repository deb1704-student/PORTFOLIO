import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.meta.title,
        description: post.meta.excerpt,
        openGraph: {
            title: post.meta.title,
            description: post.meta.excerpt,
            type: "article",
            publishedTime: post.meta.date,
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <main className="min-h-screen w-full bg-background text-foreground pt-32 pb-24 px-4 md:px-12 lg:px-24">
            <article className="max-w-3xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors font-sans text-sm uppercase tracking-widest mb-16 hoverable"
                >
                    <ArrowLeft size={16} />
                    All Posts
                </Link>

                {/* Post Header */}
                <header className="mb-16">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.meta.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="text-xs font-mono px-3 py-1 rounded-full border border-accent/30 text-accent/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
                        {post.meta.title}
                    </h1>
                    <time className="font-mono text-sm text-foreground/40">
                        {new Date(post.meta.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </header>

                {/* MDX Content */}
                <div className="prose-custom">
                    <MDXRemote source={post.content} />
                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-white/10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-foreground/70 hover:text-accent transition-colors font-sans text-sm uppercase tracking-widest hoverable"
                    >
                        <ArrowLeft size={16} />
                        Back to all posts
                    </Link>
                </div>
            </article>
        </main>
    );
}
