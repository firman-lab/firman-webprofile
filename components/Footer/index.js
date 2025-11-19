import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='py-6 lg:py-4 xl:pt-16 bg-gradient-to-b  from-[#34996b] to-[#0c683d] dark:bg-gradient-to-b dark:from-slate-900 dark:to-[#2a554249]'>
      <div className='max-w-screen-2xl grid grid-cols-12 mx-auto'>
        <div className='col-span-10 col-start-2 text-white py-4'>
          <div className='grid gap-x-0 gap-y-10 sm:grid-cols-12 lg:gap-x-10'>
            <div className='col-span-full sm:col-span-6 lg:col-span-4'>
              <h3 className='mb-4 font-bold uppercase'>Skill</h3>
              <div className='space-y-2 md:space-y-4 text-xs lg:text-sm font-medium font-poppins'>
                <div className='flex justify-start items-center gap-2'>
                  <Image alt='ic-react' src={'/icons/react.svg'} width={24} height={24} />
                  <span>React Js</span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <Image alt='ic-next' src={'/icons/nextjs.svg'} width={24} height={24} />
                  <span>Next Js</span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <Image alt='ic-vue' src={'/icons/vue.svg'} width={24} height={24} />
                  <span>Vue Js</span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <Image alt='ic-tail' src={'/icons/tailwind.svg'} width={24} height={24} />
                  <span>Tailwind CSS</span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <Image alt='ic-ex' src={'/icons/js.svg'} width={24} height={24} />
                  <span>Express Js</span>
                </div>
                <div className='flex justify-start items-center gap-2'>
                  <Image alt='ic-sql' src={'/icons/postgresql.svg'} width={24} height={24} />
                  <span>Sql</span>
                </div>
              </div>
            </div>
            <div className='col-span-full sm:col-span-6 lg:col-span-4'>
              <h3 className='mb-4 font-bold uppercase'>Media</h3>
              <div className='space-y-2 md:space-y-4 text-xs lg:text-sm font-medium font-poppins'>
                <Link className=' flex justify-start items-center gap-1' href='https://www.instagram.com/fir_manh/' target='_blank'>
                  <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/ig.svg' />
                  <span>Instagram</span>
                </Link>
                <Link className='flex justify-start items-center gap-1' href='https://www.linkedin.com/in/fhidayat400/' target='_blank'>
                  <Image alt='ic-linkedin' className='object-contain' width={24} height={24} src='/icons/linkind.svg' />
                  <span>Linked In</span>
                </Link>
                <Link className='flex justify-start items-center gap-1' href='https://github.com/firman-lab' target='_blank'>
                  <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/git.svg' />
                  <span>Github</span>
                </Link>
              </div>
            </div>
            <div className='col-span-full sm:col-span-6 lg:col-span-4 text-sm'>
              <h3 className='mb-4 font-bold uppercase'>Contact</h3>
              <div className='space-y-2 md:space-y-4 text-xs lg:text-sm font-medium font-poppins'>
                <Link className='flex justify-start items-center gap-1' href='mailto:fhidayat400@gmail.com'>
                  <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/mail.svg' />
                  <span>fhidayat400@gmail.com</span>
                </Link>
                <Link className='flex justify-start items-center gap-1' href='https://wa.me/6283100553101' target='_blank'>
                  <Image alt='ic-ig' className='object-contain' width={24} height={24} src='/icons/wa.svg' />
                  <span>(+62) 831-0055-3101</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-4 mx-8 pt-4 border-t border-purple-200/60 dark:border-slate-600/60 text-center text-xs font-light font-poppins text-white flex flex-row justify-center items-center '>
        <p className='font-medium py-2 my-auto'>Copyright 2023 SoonPro.

        </p>
        <span className='text-white'>&nbsp;All right reserved</span>
      </div>
    </footer>
  );
}
