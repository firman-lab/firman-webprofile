import dayjs from "dayjs";
import React from "react";
import Head from "next/head";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import { getSlug, getArticleFromSlug } from "../../utils/mdx";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function Blog({ post: { source, frontmatter } }) {
    return (
        <>
            <Head>
                <title>{frontmatter.title} | My blog</title>
            </Head>
            <div className="px-32">
                <h1 className="text-xl font-poppins font-medium">{frontmatter.title}</h1>
                <p className="text-xs">
                    {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
                    {frontmatter.readingTime}
                </p>
                <div className="pt-16">
                    <MDXRemote {...source} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    //fetch the particular file based on the slug
    const { slug } = params;
    const { content, frontmatter } = await getArticleFromSlug(slug);

    const mdxSource = await serialize(content
        //     , {
        //     mdxOptions: {
        //         rehypePlugins: [
        //             rehypeSlug,
        //             [
        //                 rehypeAutolinkHeadings,
        //                 {
        //                     properties: { className: ["anchor"] },
        //                 },
        //                 { behaviour: "wrap" },
        //             ],
        //             rehypeHighlight,
        //             rehypeCodeTitles,
        //         ],
        //     },
        // }
    );

    return {
        props: {
            post: {
                source: mdxSource,
                frontmatter,
            },
        },
    };
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
    // getting all paths of each article as an array of
    // objects with their unique slugs
    const paths = (await getSlug()).map((slug) => ({ params: { slug } }));

    console.log("conslolssse", paths);

    return {
        paths,
        // in situations where you try to access a path
        // that does not exist. it'll return a 404 page
        fallback: false,
    };
}