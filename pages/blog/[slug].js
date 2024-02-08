import dayjs from 'dayjs';
import React, { useState } from 'react';
import Head from 'next/head';
import rehypeSlug from 'rehype-slug';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import { serialize } from 'next-mdx-remote/serialize';
import { getSlug, getArticleFromSlug } from '../../utils/mdx';
import 'highlight.js/styles/atom-one-dark-reasonable.css';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import MDXLayout from '../../components/MDXLayout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

// this object will contain all the replacements we want to make
const components = {
  img: (props) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <Image
      {...props}
      width={500}
      height={500}
      className="w-full"
      alt="image"
      loading="lazy"
    />
  ),
};

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
          <title>{frontmatter.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* <meta property="og:url" content={`https://soonpro.my.id/blog/${frontMatter.slug}`} />
                    <meta property="og:title" content={frontmatter.title} />
                    <meta property="og:description" content={frontmatter.title} /> */}
        </Head>
        <Navbar dark={isDark} darkFunc={setDark} />
        <main className="font-poppins dark:bg-slate-900 pt-32 m-0 p-0">
          <div className="px-4 sm:px-6 md:px-8 pb-16 md:pb-32">
            <div className="max-w-4xl lg:mx-auto sm:mx-2">
              <p className="text-xs font-thin text-gray-500 dark:text-gray-400">
                {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                {frontmatter.readingTime}
              </p>
              <h1 className="pt-4 text-2xl sm:text-3xl md:text-4xl font-poppins font-medium text-gray-800 dark:text-slate-100">
                {frontmatter.title}
              </h1>
              <div className="w-full flex flex-auto justify-center items-center">
                <Image
                  src={frontmatter.hero_image}
                  width={500}
                  height={500}
                  alt="Image Article"
                  className="md:w-full object-contain pt-8"
                />
              </div>
              <article className="dark:text-white pt-8 flex flex-row justify-center items-center w-full">
                <MDXLayout>
                  <MDXRemote {...source} components={components} />
                </MDXLayout>
              </article>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params;
  const { content, frontmatter } = await getArticleFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

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

  console.log('conslolssse', paths);

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  };
}
