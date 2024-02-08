import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function CardPortfolio({link, imgProject, title, desc, label}) {
  return (
    <Link href={link} target={'_blank'} rel='noreferrer'>
      <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
        <Image alt='Tax Consultant for classificate a journal report' src={`/images/${imgProject}`} className='object-fill w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]' width={350} height={350} />
        <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
          <div className='flex gap-1 justify-between pl-6 items-center'>
            <div className='p-0 w-1/2'>
              <h1 className='text-lg md:text-2xl text-white font-medium'>{title}</h1>
              <h4 className='text-emerald-500 drop-shadow-md shadow-white text-sm font-semibold'>{desc}</h4>
            </div>
            <div className='pr-0'>
              <div className='text-xs bg-[#299467] text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                {label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>    );
}
