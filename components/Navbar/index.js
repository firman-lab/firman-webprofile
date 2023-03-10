import Image from 'next/image';
import React, { useState } from 'react';

const menu = [
    { name: 'Project', href: '/', active: true },
    { name: 'Blog', href: '/articles', active: false },
    { name: 'Contact', href: '/', active: false },
];

export default function Navbar({ dark, darkFunc }) {

    const [open, setOpen] = useState(false);
    // const [active, setActive] = useState('project');

    function setPop() {
        if (!open) {
            setOpen(true);
        } else {
            setOpen(false);
        }
        console.log(open);
    }

    return (
        <section className='fixed w-full z-10 px-8 md:px-12 dark:bg-slate-900/80 bg-white/80 backdrop-blur-md dark:transition dark:ease-in dark:duration-200'>
            <div className='flex justify-between items-center'>
                <div className='w-24 h-8 py-8 md:w-32 relative'>
                    <Image
                        src='/icons/main.svg'
                        alt="ic-main"
                        fill
                        className='bg-whiterounded-xl'
                    />
                </div>
                <div className='w-full hidden md:flex flex-row justify-between items-center transition ease-in-out duration-300'>
                    <div className='mx-auto '>
                        {menu.map((item, index) => (
                            <a href={item.href} key={index} className='px-4 lg:px-8 font-semibold dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200'>{item.name}</a>
                        ))}
                    </div>
                    {/* </div> */}
                    {/* <div className='flex items-center justify-between'> */}
                    <button className='p-1 rounded-lg bg-purple-800' onClick={darkFunc}>
                        {dark ?
                            (<Image src='/icons/sun.svg' width={24} height={24} alt='ic-sun' />)
                            :
                            (<Image src='/icons/moon.svg' width={24} height={24} alt='ic-sun' />)}
                    </button>
                    <button className='px-3 py-2 rounded-lg bg-gradient-to-tr from-purple-700 to-indigo-700 text-white text-sm font-semibold md:mx-4 m-2 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-600 hover:scale-110 hover:transition-all hover:duration-200'>
                        Mail me!
                    </button>
                </div>
                <div className='md:hidden'>
                    <button className='p-2 bg-purple-700 rounded-lg' onClick={setPop}>
                        {open ?
                            (<Image src='/icons/x.svg' alt='ic-bar' width={18} height={18} />)
                            :
                            (<Image src='/icons/bar.svg' alt='ic-bar' width={18} height={18} />)
                        }
                    </button>
                </div>
            </div>
            <div className={open ? 'mx-auto transition-all ease-in duration-400 md:hidden' : 'hidden'}>
                <div className='transition ease-in-out duration-300'>
                    <div className='pt-4 flex flex-col justify-start items-start'>
                        {menu.map((item, index) => (
                            <a href={item.href} key={index} className='pt-2 lg:px-8 font-semibold dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200'>{item.name}</a>
                        ))}
                    </div>
                    <div className='py-4'>
                        <button className='p-1 rounded-lg bg-purple-800' onClick={darkFunc}>
                            {dark ?
                                (<Image src='/icons/sun.svg' width={24} height={24} alt='ic-sun' />)
                                :
                                (<Image src='/icons/moon.svg' width={24} height={24} alt='ic-sun' />)}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
