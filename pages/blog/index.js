import React, { useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import { getAllArticles } from "../../utils/mdx";
import dayjs from "dayjs";
import Image from 'next/image';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

export default function BlogPage({ posts }) {
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
                    <title>Articles</title>
                    <meta name="description" content="Generated by create next app" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/icons/logo.svg" />
                </Head>
                <main className='w-full relative dark:bg-slate-900 transition-all ease-in duration-300'>
                    <Navbar dark={isDark} darkFunc={setDark} />
                    <div className='pt-32 pb-8 lg:pt-64 lg:pb-32 '>
                        <div className='grid grid-cols-12 max-w-screen-2xl mx-auto'>
                            <section className='col-span-10 col-start-2'>
                                <div className='relative flex flex-col-reverse lg:flex-row justify-between gap-6 lg:gap-12'>
                                    <div className='w-full lg:w-7/12'>
                                        <a className='font-bold max-w-xl text-xl lg:text-5xl tracking-tight leading-none dark:text-white' href='#'>
                                            <h1>Bootstrap Sudah Mendukung Color Modes</h1>
                                        </a>
                                        <div className='md:block hidden'>
                                            <div className='text-slate-500 dark:text-slate-400 mt-2 md:text-lg'>
                                                Sejak versi bootstrap v5.3, bootstrap sepenuh nya telah mendukung fitur yang namanya color modes, karena namanya color modes, maka ini juga sudah termasuk dengan yang namanya dark mode.
                                            </div>
                                        </div>
                                        <div className='text-xs tracking-tighter sm:text-sm mt-4'>
                                            <span className='h-px mt-6 mb-5 w-full hidden md:inline-block bg-gradient-to-r from-slate-300 dark:from-slate-700 via-transparent to-transparent'></span>
                                            <div className='text-xs text-slate-500 dark:text-slate-400 flex flex-col gap-y-2 [&_svg]:inline [&_svg]:w-4 [&_svg]:h-4 md:[&_svg]:w-5 md:[&_svg]:h-5 [&_svg]:stroke-1 [&_svg]:mr-2'>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <rect x="4" y="4" width="16" height="16" rx="1"></rect>
                                                        <path d="M12 7v5l3 3"></path><path d="M4 12h1"></path>
                                                        <path d="M19 12h1"></path><path d="M12 19v1"></path>
                                                    </svg>
                                                    4 min read
                                                </p>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                                        <line x1="16" y1="3" x2="16" y2="7"></line>
                                                        <line x1="8" y1="3" x2="8" y2="7"></line>
                                                        <line x1="4" y1="11" x2="20" y2="11"></line>
                                                        <line x1="11" y1="15" x2="12" y2="15"></line>
                                                        <line x1="12" y1="15" x2="12" y2="18"></line>
                                                    </svg>
                                                    Published on 25 Jan
                                                </p>
                                                <p>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                        <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                                        <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                                                    </svg>
                                                    Ditulis oleh : Irsyad A. P
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className='w-full lg:w-5/12 shrink-0' href='#'>
                                        <Image alt='img-article' src={'/images/blog-1.webp'} width={300} height={100} className='w-full rounded-lg sm:max-w-full' />
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='border-b border-t relative py-2.5 md:py-3.5 text-xs sm:text-tiny dark:border-slate-800/50 text-slate-800 dark:text-slate-50'>
                        <div className='grid grid-col-12 max-w-screen-2xl mx-auto'>
                            <section className='col-span-10 col-start-2'>
                                <div className='flex items-center gap-x-2'>
                                    <a className='font-semibold text-invert whitespace-nowrap gap-x-2 items-center sm:inline-flex hidden' href={'/'}>F-Blog
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>
                                    </a>
                                    <a className='font-semibold text-invert whitespace-nowrap gap-x-2 items-center inline-flex' href='#'>Artikel
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 inline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="9 6 15 12 9 18"></polyline></svg>
                                    </a>
                                    <a className='overflow-hidden text-slate-400'>Terbaru
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className='relative py-8 md:py-16 lg:py-20 xl:py-24'>
                        <div className='grid grid-cols-12 max-w-screen-2xl mx-auto'>
                            <section className='col-span-10 col-start-2'>
                                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-12 sm:gap-x-12 lg:gap-y-24 lg:gap-x-24'>
                                    {posts.map((frontMatter, index) => (
                                        <li key={index} className='overflow-hidden flex flex-col relative h-full'>
                                            <Link className='flex-1' href={`/blog/${frontMatter.slug}`} passHref>
                                                <div className='p-0'>
                                                    <Image src={frontMatter.hero_image} height={600} width={600} className='object-cover object-center' alt='banner-blog1' />
                                                    <div className='mt-2.5 lg:mt-3.5 flex gap-x-2 md:gap-x-3 text-xs md:text-sm flex-wrap items-center [&>div]:text-indigo-600 [&>div]:hover:text-indigo-700 '>
                                                        <div>{frontMatter.slug}</div>
                                                        <div>Realeased</div>
                                                    </div>
                                                    <div className='mt-2.5 text-slate-800 dark:text-slate-200 max-w-sm leading-tight font-medium lg:mt-3.5 text-base'>{frontMatter.title}</div>
                                                    <div className='text-slate-500 dark:text-slate-400 leading-relaxed mt-2.5 lg:mt-3.5 text-sm md:line-clamp-3'>
                                                        {frontMatter.excerpt}
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const articles = await getAllArticles();

    articles
        .map((article) => article.data)
        .sort((a, b) => {
            if (a.data.publishedAt > b.data.publishedAt) return 1;
            if (a.data.publishedAt < b.data.publishedAt) return -1;

            return 0;
        });

    return {
        props: {
            posts: articles.reverse(),
        },
    }
}