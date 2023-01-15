import Image from 'next/image';
import React, { useState } from 'react';

const menu = [
    {name : 'Project', href: '/'},
    {name : 'Blog', href: '/'},
    {name : 'Contact', href: '/'},
];

export default function Navbar({dark, darkFunc}) {

    const [open, setOpen] = useState(false);

    function setPop(){
        if(!open){
            setOpen(true);
        }else{
            setOpen(false);
        }
        console.log(open);
    }
    
    return (
        <section className='fixed w-full z-10 px-8 md:px-12 dark:bg-slate-800/80 backdrop-blur-md dark:transition dark:ease-in dark:duration-200'>
            <div className='flex justify-between items-center'>
                <div className='w-24 h-16 md:w-32 md:h-24 relative'>
                    <Image
                        src='/icons/main.svg'
                        alt="ic-main"
                        fill 
                        className='bg-whiterounded-xl'
                    />
                </div>
                <div className='w-full hidden md:flex flex-row justify-between items-center transition ease-in-out duration-300'>
                    <div className='mx-auto '>
                        {menu.map((item, index)=>(
                            <a href={item.href} key={index} className='px-4 lg:px-8 font-semibold dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200'>{item.name}</a>
                        ))}
                    </div>
                    {/* </div> */}
                    {/* <div className='flex items-center justify-between'> */}
                    <button className='p-1 rounded-lg bg-purple-800' onClick={darkFunc}> 
                        {dark ? 
                            (<Image src='/icons/sun.svg' width={24} height={24} alt='ic-sun'/>) 
                            : 
                            (  <Image src='/icons/moon.svg' width={24} height={24} alt='ic-sun'/>)} 
                    </button>
                    <button className='mx-8 px-3 py-2 bg-purple-800 text-white rounded-md'>
                      Email me!
                    </button>
                </div>
                <div className='md:hidden'>
                    <button className='p-2 bg-purple-700 rounded-lg' onClick={setPop}>
                        {open ?
                            (<Image src='/icons/x.svg' alt='ic-bar' width={18} height={18}/>)
                            : 
                            (<Image src='/icons/bar.svg' alt='ic-bar' width={18} height={18}/>)
                        }
                    </button>
                </div>
            </div>
            <div className={open ? 'mx-auto transition-all ease-in duration-400 md:hidden' : 'hidden' }>
                <div className='transition ease-in-out duration-300'>
                    <div className='pt-4 flex flex-col justify-start items-start'>
                        {menu.map((item, index)=>(
                            <a href={item.href} key={index} className='pt-2 lg:px-8 font-semibold dark:text-slate-300 hover:text-purple-700 dark:hover:text-white hover:transition-all hover:ease-in hover:duration-200'>{item.name}</a>
                        ))}
                    </div>
                    {/* </div> */}
                    {/* <div className='flex items-center justify-between'> */}
                    <div className='py-4'>
                        <button className='p-1 rounded-lg bg-purple-800' onClick={darkFunc}> 
                            {dark ? 
                                (<Image src='/icons/sun.svg' width={24} height={24} alt='ic-sun'/>) 
                                : 
                                (  <Image src='/icons/moon.svg' width={24} height={24} alt='ic-sun'/>)} 
                        </button>
                    </div>
                    {/* <button className='mx-8 px-3 py-2 bg-purple-800 text-white rounded-md'>
                      Email me!
                    </button> */}
                </div>
            </div>
        </section>
    );
}
