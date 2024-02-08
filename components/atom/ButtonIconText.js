import React from 'react';
import Image from 'next/image';

export default function ButtonIconText({ icon, title }) {
  return (
    <button className='px-3 lg:px-6 py-2 lg:py-2 text-sm lg:text-base text-white font-medium flex gap-2  font-poppins rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200 '>
      <span>
        <Image src={icon} alt='b' width={24} height={24} className='w-5 lg:w-6' />
      </span>
      {title}
    </button>
  );
}
