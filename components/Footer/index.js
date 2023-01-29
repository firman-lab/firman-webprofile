import Image from 'next/image';
import React from 'react';

export default function footer() {
    return (
        <footer className='py-6 lg:py-8 xl:pt-16 bg-gradient-to-tr from-indigo-900 to-purple-800 dark:bg-gradient-to-b dark:from-slate-700 dark:to-slate-800'>
            <div className='max-w-screen-2xl grid grid-cols-12 mx-auto'>
                <div className='col-span-10 col-start-2 text-white py-4'>
                    <div className='grid gap-x-0 gap-y-10 sm:grid-cols-12 lg:gap-x-10'>
                        <div className='col-span-full sm:col-span-6 lg:col-span-4'>
                            <h3 className='mb-4 font-bold uppercase'>Skill</h3>
                            <div className='space-y-2 md:space-y-4 text-sm'>
                                <div className='flex justify-start items-center gap-1'>
                                    <Image alt='ic-react' src={'/icons/react.svg'} width={24} height={24} />
                                    <span>React Js</span>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <Image alt='ic-next' src={'/icons/nextjs.svg'} width={24} height={24} />
                                    <span>Next Js</span>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <Image alt='ic-tail' src={'/icons/tailwind.svg'} width={24} height={24} />
                                    <span>Tailwind CSS</span>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <Image alt='ic-ex' src={'/icons/js.svg'} width={24} height={24} />
                                    <span>Express Js</span>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <Image alt='ic-sql' src={'/icons/postgresql.svg'} width={24} height={24} />
                                    <span>Sql</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-full sm:col-span-6 lg:col-span-4'>
                            <h3 className='mb-4 font-bold uppercase'>Media</h3>
                            <div className='space-y-2 md:space-y-4 text-sm'>
                                <a className=' flex justify-start items-center gap-1' href='#'>
                                    <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/ig.svg' />
                                    <span>Instagram</span>
                                </a>
                                <a className='flex justify-start items-center gap-1' href='#'>
                                    <Image alt='ic-linkedin' className='object-contain' width={24} height={24} src='/icons/linkind.svg' />
                                    <span>Linked In</span>
                                </a>
                                <a className='flex justify-start items-center gap-1' href='#'>
                                    <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/git.svg' />
                                    <span>Github</span>
                                </a>
                            </div>
                        </div>
                        <div className='col-span-full sm:col-span-6 lg:col-span-4 text-sm'>
                            <h3 className='mb-4 font-bold uppercase'>Contact</h3>
                            <div className='space-y-2 md:space-y-4'>
                                <a className='flex justify-start items-center gap-1' href='#'>
                                    <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/mail.svg' />
                                    <span>fhidayat400@gmail.com</span>
                                </a>
                                <a className='flex justify-start items-center gap-1' href='#'>
                                    <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/wa.svg' />
                                    <span>(+62) 831-0055-3101</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 mx-8 pt-8 border-t border-purple-200/60 dark:border-slate-600/60 text-center text-xs text-white flex flex-row justify-center items-center '>
                <p className='font-semibold py-2 my-auto'>Copyright 2023 Firman.

                </p>
                <span className='text-white'>&nbsp;All right reserved</span>
            </div>
        </footer>
    );
}
