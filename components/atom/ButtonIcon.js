import React from 'react';
import Image from 'next/image';

export default function ButtonIcon({ icon, onClick }) {
    return (
        <button disabled onClick={onClick} className='p-2 max-h-12 rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200'>
            <Image src={icon} alt='instagram' width={20} height={20} />
        </button>
    );
}
