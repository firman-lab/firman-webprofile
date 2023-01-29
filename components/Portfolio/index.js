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
            <div className='flex lg:flex-row flex-col gap-12 justify-evenly items-center px-4 pt-8'>
                <div>
                    <Image alt='img1' src={'/images/pf1.png'} className='object-fill rounded-xl scale-100 hover:scale-110 ease-in-out duration-200' width={400} height={400} />
                </div>
                <div>
                    <Image alt='img1' src={'/images/pf2.png'} className='object-fill rounded-xl scale-100 hover:scale-110 ease-in-out duration-200' width={400} height={400} />
                </div>
                <div>
                    <Image alt='img1' src={'/images/peeps.png'} className='object-fill rounded-xl scale-100 hover:scale-110 ease-in-out duration-200' width={400} height={400} />
                </div>
            </div>
        </section>);
}
