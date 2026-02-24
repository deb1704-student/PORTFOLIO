import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
}

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) return [];

    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .filter((name) => name.endsWith(".mdx"))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title ?? slug,
                date: data.date ?? "",
                excerpt: data.excerpt ?? "",
                tags: data.tags ?? [],
            } satisfies BlogPost;
        })
        .sort((a, b) => (a.date > b.date ? -1 : 1));

    return posts;
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        meta: {
            slug,
            title: data.title ?? slug,
            date: data.date ?? "",
            excerpt: data.excerpt ?? "",
            tags: data.tags ?? [],
        } satisfies BlogPost,
        content,
    };
}
