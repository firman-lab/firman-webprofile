import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ButtonText from '../atom/ButtonText';
import ButtonIcon from '../atom/ButtonIcon';
import sunIcon from '../../public/icons/sun.svg'
import moonIcon from '../../public/icons/moon.svg'


const menu = [
    { name: 'Project', href: '/' },
    { name: 'Blog', href: '/articles' },
    { name: 'Free Template', href: '/template' },
];

export default function Navbar({ dark, darkFunc }) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

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
                <div className='w-24 h-8 my-6 md:w-32 flex flex-row justify-center items-center gap-2'>
                    <Image
                        src='/icons/logo.svg'
                        alt="ic-main"
                        width={24}
                        height={24}
                    />
                    <p className='dark:text-white text-[#29af77] drop-shadow-md font-poppins font-semibold tracking-wider text-lg md:text-xl'>SoonPro</p>
                </div>
                <div className='w-full hidden md:flex flex-row justify-between items-center transition ease-in-out duration-300'>
                    <div className='mx-auto '>
                        {menu.map((item, index) => (
                            <a href={item.href} key={index} className={`px-4 lg:px-8 font-semibold dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200 ${item.href === router.asPath ? 'active' : ''}`}>{item.name}</a>
                        ))}
                    </div>
                    {/* </div> */}
                    {/* <div className='flex items-center justify-between'> */}
                    {/* <button className='p-2 text-sm rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200' onClick={darkFunc}>
                        {dark ?
                            (<Image src='/icons/sun.svg' width={20} height={20} alt='ic-sun' />)
                            :
                            (<Image src='/icons/moon.svg' width={20} height={20} alt='ic-moon' />)}
                    </button> */}
                    <ButtonIcon onClick={darkFunc} icon={dark ? sunIcon : moonIcon} />
                    <ButtonText title={'Mail me!'} />
                </div>
                <div className='md:hidden'>
                    <button className='p-2 bg-button-green rounded-lg' onClick={setPop}>
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
                        <button className='p-2 text-sm rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200' onClick={darkFunc}>
                            {dark ?
                                (<Image src='/icons/sun.svg' width={20} height={20} alt='ic-sun' />)
                                :
                                (<Image src='/icons/moon.svg' width={20} height={20} alt='ic-moon' />)}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
