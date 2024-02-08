import Link from 'next/link';
import React from 'react';

export default function ButtonGreen({ title }) {
  return (
    <Link href={'https://wa.me/6283863011200'} target='_blank'>
      <button className="px-3 py-2 max-h-12 rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 font-poppins border-[1px] text-white text-sm md:mx-4 m-2 hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200">
        {title}
      </button>
    </Link>
  );
}
