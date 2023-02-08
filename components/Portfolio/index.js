import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <section className='container py-8 lg:py-12 xl:py-16 mx-auto mb-8'>
            <hr className='pb-8 mx-8 md:hidden'></hr>
            <div className='px-8'>
                <h3 className='text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-800 dark:from-purple-100 dark:to-indigo-100'>Selected Project</h3>
                <p className='text-center font-medium pt-2 dark:text-indigo-200 md:mb-8 mb-4 mx-auto'>This is some of project that I have code for a few years. its online and you can check it when you need</p>
            </div>
            <div className='flex flex-wrap gap-8 justify-around items-center px-4 pt-8'>
                <a href='#'>
                    <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
                        <Image alt='Finance Website for Company Journaling Report' src={'/images/pf1.png'} className='object-fill' width={350} height={350} />
                        <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
                            <div className='flex gap-1 justify-between pl-6 items-center'>
                                <div className='p-0 w-1/2'>
                                    <h1 className='text-2xl text-white font-medium'>Finance Web</h1>
                                    <h4 className='text-indigo-300 text-sm font-semibold'>Private/Internal Site</h4>
                                </div>
                                <div className='pr-0'>
                                    <div className='text-xs bg-purple-800 text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                                    Amikom Yogyakarta
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
                        <Image alt='Tax Consultant for classificate a journal report' src={'/images/pf2.png'} className='object-fill' width={350} height={350} />
                        <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
                            <div className='flex gap-1 justify-between pl-6 items-center'>
                                <div className='p-0 w-1/2'>
                                    <h1 className='text-2xl text-white font-medium'>Tax Consultant</h1>
                                    <h4 className='text-indigo-300 text-sm font-semibold'>Classificate Tax with AI</h4>
                                </div>
                                <div className='pr-0'>
                                    <div className='text-xs bg-purple-800 text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                                    Self Project
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>
                <a href='#'>
                    <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
                        <Image alt='convert finance report a company to international standart accounting report' src={'/images/pf3.png'} className='object-fill' width={350} height={350} />
                        <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
                            <div className='flex gap-1 justify-between pl-6 items-center'>
                                <div className='p-0 w-1/2'>
                                    <h1 className='text-xl text-white font-medium'>Converter Finance Report</h1>
                                    <h4 className='text-indigo-300 text-sm font-semibold'>Convert Into Std Report </h4>
                                </div>
                                <div className='pr-0'>
                                    <div className='text-xs bg-purple-800 text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                                    Kemenhan (Prototype)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>);
}
