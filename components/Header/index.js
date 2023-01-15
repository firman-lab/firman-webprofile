import Image from 'next/image';
import React from 'react';

export default function Header() {
    return (
        <>
            <section className='container mx-auto pt-32 px-8 on-scroll-lg'>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
                    <div className=' flex-1'>
                        <h3 className=' pt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-purple-600 dark:bg-gradient-to-br dark:from-indigo-400 dark:to-purple-200'>Hi, I&apos;m Firman Hidayat</h3>
                        <h3 className='text-4xl pt-2 font-bold text-transparent bg-clip-text bg-indigo-800 dark:bg-purple-100'>Front End Developer</h3>
                        <p className='font-medium pt-6 dark:text-indigo-300'>
                        I&apos;ve experienced in building website with React Js, expecially with Next Js Framework, Express Js for Backend, and RDMBS like Postgree SQL or MySQL. I&apos;m Available for Remote Job, if you need someone to help your website better, let&apos;s talk over the chat!
                        </p>
                        <div className='flex flex-wrap justify-left items-center mt-8'>
                            <button className='px-6 py-3 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-700 text-white font-semibold md:mx-4 m-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-600'>Text me!</button>
                            <button className='bg-indigo-700 dark:hover:bg-indigo-300 hover:p-2 p-1 rounded-md hover:transition-all hover:ease-in hover:duration-150 m-1 md:mx-4'>
                                <Image src='/icons/ig.svg' alt='ic-ig' width={24} height={18} />
                            </button>
                            <button className='bg-indigo-700 dark:hover:bg-indigo-300 hover:p-2 p-1 rounded-md hover:transition-all hover:ease-in hover:duration-150 m-1 md:mx-4'>
                                <Image src='/icons/linkind.svg' alt='ic-ig' width={24} height={18} />
                            </button>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <div className='bg-purple-300/20 shadow-2xl shadow-purple-300/30 rounded-full'>
                            <Image src='/images/avatar.png' alt='avatar-head' width={400} height={200} className='drop-shadow-2xl' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='container relative mx-auto h-screen flex flex-col justify-center items-center snap-start'>
                <div className='pt-8 px-8 h-[200vh]'>
                    <h3 className='text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-800 dark:from-purple-100 dark:to-indigo-100'>Selected Project</h3>
                    <p className='text-center font-medium pt-2 dark:text-indigo-200 md:mb-8 mb-4 mx-auto'>This is some of project that I have code for a few years. its online and you can check it when you need</p>
                    <div className='flex flex-wrap justify-evenly items-center'>
                        <div className='relative rounded-lg w-96 h-96 m-2'>
                            <Image src='/images/peeps.png' alt='pj1' fill className='rounded-xl hover:shadow-2xl dark:hover:shadow-purple-600 hover:shadow-gray-600'/>
                        </div>
                        <div className='relative rounded-xl w-96 h-96 m-2'>
                            <Image src='/images/peeps.png' alt='pj1' fill className='rounded-xl hover:shadow-2xl dark:hover:shadow-purple-600 hover:shadow-gray-600'/>
                        </div>
                        <div className='relative rounded-lg w-96 h-96 m-2'>
                            <Image src='/images/peeps.png' alt='pj1' fill className='rounded-xl hover:shadow-2xl dark:hover:shadow-purple-600 hover:shadow-gray-600'/>
                        </div>                   
                    </div>
                </div>
            </section>
        </>
    );
}
