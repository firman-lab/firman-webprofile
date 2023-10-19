import dayjs from "dayjs";
import React, { useState } from "react";
import Head from "next/head";
import rehypeSlug from "rehype-slug";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import { serialize } from "next-mdx-remote/serialize";
import { getSlug, getArticleFromSlug } from "../../utils/mdx";
import "highlight.js/styles/atom-one-dark-reasonable.css";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import MDXLayout from "../../components/MDXLayout";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Blog({ post: { source, frontmatter } }) {
    const [isDark, setIsDark] = useState(true);

    function setDark() {
        if (isDark === false) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
        console.log(isDark);
    }
    return (
        <>
            <div className={isDark ? 'dark' : ''}>
                <Head>
                    <title>{frontmatter.title} | blog</title>
                </Head>
                <Navbar dark={isDark} darkFunc={setDark} />
                <main className="font-poppins dark:bg-slate-900 pb-8 pt-32 lg:pb-32 m-0 p-0">
                    <div className="px-4 sm:px-6 md:px-8 ">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {dayjs(frontmatter.publishedAt).format("MMMM D, YYYY")} &mdash;{" "}
                                {frontmatter.readingTime}
                            </p>
                            <h1 className="pt-4 text-4xl font-poppins font-medium text-gray-800 dark:text-slate-100">{frontmatter.title}</h1>
                            <Image src={frontmatter.hero_image} width={500} height={500} alt="Image Article" className="md:w-3/4 object-contain pt-8" />
                            <article className="dark:text-white pt-8 flex flex-row justify-center items-center w-full">
                                <MDXLayout>
                                    <MDXRemote {...source} />
                                </MDXLayout>
                            </article>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export async function getStaticProps({ params }) {
    //fetch the particular file based on the slug
    const { slug } = params;
    const { content, frontmatter } = await getArticleFromSlug(slug);

    const mdxSource = await serialize(content
        , {
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [
                        rehypeAutolinkHeadings,
                        {
                            properties: { className: ["anchor"] },
                        },
                        { behaviour: "wrap" },
                    ],
                    rehypeHighlight,
                    rehypeCodeTitles,
                ],
            },
        }
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