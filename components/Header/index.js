import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <>
            <section className='container mx-auto px-8 pt-36'>
                <div className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-between'>
                    <div className='flex-1'>
                        <h3 className=' pt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-600 dark:bg-gradient-to-br dark:from-indigo-400 dark:to-purple-200 font-signika'>Hi, I&apos;m Firman Hidayat</h3>
                        <h3 className='text-4xl xl:text-6xl pt-2 font-bold text-transparent bg-clip-text bg-indigo-800 dark:bg-purple-100 font-signika'>Front End Developer</h3>
                        <p className='font-medium text-slate-600 lg:text-lg pt-6 dark:text-indigo-300 font-poppins'>
                            I&apos;ve experienced in building website with React Js, expecially with Next Js Framework, Express Js for Backend, and RDMBS like Postgree SQL or MySQL. I&apos;m Available for Remote Job, if you need someone to help your website better, let&apos;s talk over the chat!
                        </p>
                        <div className='flex flex-wrap justify-left gap-4 lg:gap-8 items-center mt-8'>
                            <a href='/Firman Hidayat-resume-3.pdf' download={true} target='_blank' rel="noopener noreferrer">
                                <button className='px-6 py-2 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-700 text-white font-semibold  hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-600 hover:scale-110 hover:transition-all hover:duration-200'>Get Resume</button>
                            </a>
                            <Link href={'https://www.instagram.com/fir_manh/'} target="_blank">
                                <button className='bg-indigo-700 dark:hover:bg-indigo-300 hover:p-2 p-1 rounded-md hover:transition-all hover:ease-in hover:duration-150 '>
                                    <Image src='/icons/ig.svg' alt='instagram' width={24} height={18} />
                                </button>
                            </Link>
                            <Link href={'https://www.linkedin.com/in/fhidayat400/'} target="_blank">
                                <button className='bg-indigo-700 dark:hover:bg-indigo-300 hover:p-2 p-1 rounded-md hover:transition-all hover:ease-in hover:duration-150'>
                                    <Image src='/icons/linkind.svg' alt='ic-ig' width={24} height={18} />
                                </button>
                            </Link>
                            <Link href={'https://github.com/firman-lab'} target="_blank">
                                <button className='bg-indigo-700 dark:hover:bg-indigo-300 hover:p-2 p-1 rounded-md hover:transition-all hover:ease-in hover:duration-150'>
                                    <Image src='/icons/git.svg' alt='ic-ig' width={24} height={18} />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='bg-purple-300/20 shadow-2xl shadow-purple-300/30 rounded-full'>
                            <Image src='/images/avatar.png' alt='avatar-head' width={800} height={800} className='drop-shadow-2xl object-cover' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative mx-auto w-full overflow-x-hidden py-6 lg:py-8 xl:py-0 hidden md:block lg:block xl:block'>
                <div className='flex'>
                    <div className='flex flex-row justify-between py-12 animate-marquee whitespace-nowrap bg-gradient-to-t from-purple-800 to-indigo-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-900 w-full px-5 md:px-8 lg:px-16 xl:px-32'>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/react.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>React Js</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/redux.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Redux</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/nextjs.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Next.Js</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/tailwind.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Tailwind Css</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/gits.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Git</div>
                        </div>
                    </div>
                    <div className='absolute flex flex-row justify-between py-12 animate-marquee2 whitespace-nowrap bg-gradient-to-t from-purple-800 to-indigo-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-900 w-full px-5 md:px-8 lg:px-16 xl:px-32'>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/react.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>React Js</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/redux.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Redux</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/nextjs.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Next.Js</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/tailwind.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Tailwind CSS</div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image alt='ol' className='object-fill' width={42} height={42} src='/icons/gits.svg' />
                            <div className='pl-2 text-white text-lg font-semibold'>Git</div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
