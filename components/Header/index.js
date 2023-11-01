import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonIcon from '../atom/ButtonIcon';
import igIcon from '../../public/icons/ig.svg';
import linkedinIcon from '../../public/icons/linkind.svg';
import gitIcon from '../../public/icons/git.svg';
import Typewriter from 'typewriter-effect';

export default function Header() {
    return (
        <>
            <section className='container mx-auto sm:px-8 pt-28 xl:pt-36'>
                <div className='flex flex-col-reverse lg:flex-row gap-8 items-center justify-between'>
                    <div className='flex-1'>
                        <h3 className=' pt-1 lg:pt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-300 dark:bg-gradient-to-br dark:from-gray-100 dark:text-gray-200 font-signika'>Hi, I&apos;m Firman</h3>
                        {/* <h3 className='text-3xl lg:text-4xl xl:text-6xl pt-2 font-bold text-transparent bg-clip-text bg-[#29af77] drop-shadow-md dark:bg-[#80ddb3] font-signika'>Front End Developer</h3> */}

                        <h3 className='text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl !leading-tight pt-2 font-bold text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-[#29af77] dark:to-[#b0fa02ea] drop-shadow-md bg-[#26a76d] font-signika'
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        'Front End Developer',
                                        'Next.Js Developer',
                                        'UI/UX Designer',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 40
                                }}
                            />
                        </h3>
                        <p className='font-medium text-slate-600 dark:text-gray-300 text-sm lg:max-w-2xl text-justify lg:text-base xl:text-lg pt-2 lg:pt-4 font-poppins'>
                            I&apos;ve experience website development with React Js, expecially with Next Js Framework, Express Js for Backend, and Sql or NoSql Database. I&apos;m willing to collaborate with you, if you need someone to help your website better, let&apos;s talk over the chat!
                        </p>
                        <div className='flex flex-wrap justify-between md:justify-left gap-4 lg:gap-8 items-center mt-8 max-w-sm'>
                            <a href='/Firman-resume.pdf' download={true} target='_blank' rel="noopener noreferrer">
                                <button className='px-3 lg:px-6 py-2 lg:py-2 text-sm lg:text-base text-white font-medium flex gap-2  font-poppins rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200 '>
                                    <span>
                                        <Image src={'/icons/download.svg'} alt='download resume' width={24} height={24} className='w-5 lg:w-6' />
                                    </span>
                                    Resume
                                </button>
                            </a>
                            <Link href={'https://www.instagram.com/fir_manh/'} target="_blank">
                                <ButtonIcon icon={igIcon} />
                            </Link>
                            <Link href={'https://www.linkedin.com/in/fhidayat400/'} target="_blank">
                                <ButtonIcon icon={linkedinIcon} />
                            </Link>
                            <Link href={'https://github.com/firman-lab'} target="_blank">
                                <ButtonIcon icon={gitIcon} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='bg-[#34996b]/20 shadow-2xl shadow-[#34996b]/30 rounded-full flex flex-auto justify-center w-32 sm:w-96 xl:w-full'>
                            <Image src='/images/avatar.png' alt='avatar-head' width={600} height={600} className='drop-shadow-2xl object-cover' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative mx-auto w-full overflow-x-hidden py-6 lg:py-8 xl:py-0 hidden md:block lg:block xl:block'>
                <div className='flex'>
                    <div className='flex flex-row justify-between py-12 animate-marquee whitespace-nowrap bg-gradient-to-t  from-[#34996b] to-[#118b6b] dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800 w-full px-5 md:px-8 lg:px-16 xl:px-32'>
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
                    <div className='absolute flex flex-row justify-between py-12 animate-marquee2 whitespace-nowrap bg-gradient-to-t  from-[#34996b] to-[#118b6b]  dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800 w-full px-5 md:px-8 lg:px-16 xl:px-32'>
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
