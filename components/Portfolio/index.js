import React from 'react';
import Image from 'next/image';
import CardPortfolio from '../atom/CardPortfolio';

export default function Portfolio() {
  return (
    <section className='container py-8 lg:py-12 xl:py-16 mx-auto mb-8'>
      <hr className='pb-8 mx-8 md:hidden'></hr>
      <div className='px-8'>
        <h3 className='text-2xl lg:text-3xl xl:text-4xl text-center font-bold text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-[#29af77] dark:to-[#53e0a1] bg-[#26a76d] drop-shadow-md !leading-normal font-signika'>Client & Project</h3>
        <p className='text-sm lg:text-base xl:text-lg text-center max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl font-medium pt-2 text-gray-500 dark:text-gray-300 md:mb-8 mb-4 mx-auto font-poppins'>This is some of project that I have code for a few years. it&lsquo;s online and you can check it when you want.</p>
      </div>
      <div className='flex flex-wrap gap-8 justify-center items-center px-4 pt-8 lg:px-16 lg:pt-12'>
        <CardPortfolio title={'ERP Website'} imgProject={'pf8.png'} link={'#'} desc={'Part of dev team build ERP Sistem PT. Giri Mas Indah'} label={'PT. Giri Mas Indah'}/>
        <CardPortfolio title={'Playfix'} imgProject={'pf7.png'} link={'https://playfix.co.id'} desc={'Bussiness Service Website'} label={'Playfix Indonesia'}/>
        <CardPortfolio title={'PCXFX by Primecodex LLC'} imgProject={'pf6.png'} link={'https://pcxfx.com'} desc={'Forex Market'} label={'Turnkey Inside'}/>
        <CardPortfolio title={'CMS Website'} imgProject={'pf5.png'} link={'#'} desc={'CMS for Website'} label={'iFixied Global ID'}/>
        <CardPortfolio title={'iFixied Website'} imgProject={'pf4.png'} link={'https://ifixied.co.id'} desc={'Bussiness Service Website'} label={'iFixied Global ID'}/>
        <a href='#'>
          <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
            <Image alt='Finance Website for Company Journaling Report' src={'/images/pf1.png'} className='object-fill w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]' width={350} height={350} />
            <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
              <div className='flex gap-1 justify-between pl-6 items-center'>
                <div className='p-0 w-1/2'>
                  <h1 className='text-lg md:text-2xl text-white font-medium'>Finance Web</h1>
                  <h4 className='text-emerald-500 drop-shadow-md shadow-white text-sm font-semibold'>Private/Internal Apps</h4>
                </div>
                <div className='pr-0'>
                  <div className='text-xs bg-[#299467] text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                                        Amikom Yogyakarta
                  </div>
                </div>

              </div>
            </div>
          </div>
        </a>
        <a href='https://fist-beta.netlify.app' target={'_blank'} rel='noreferrer'>
          <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
            <Image alt='Tax Consultant for classificate a journal report' src={'/images/pf2.png'} className='object-fill w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]' width={350} height={350} />
            <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
              <div className='flex gap-1 justify-between pl-6 items-center'>
                <div className='p-0 w-1/2'>
                  <h1 className='text-lg md:text-2xl text-white font-medium'>Tax Consultant</h1>
                  <h4 className='text-emerald-500 drop-shadow-md shadow-white text-sm font-semibold'>Classificate Tax (AI)</h4>
                </div>
                <div className='pr-0'>
                  <div className='text-xs bg-[#299467] text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                                        Self Project
                  </div>
                </div>

              </div>
            </div>
          </div>
        </a>
        <a href='https://data-converter.netlify.app' target={'_blank'} rel='noreferrer'>
          <div className='relative overflow-hidden rounded-xl scale-100 shadow-lg hover:scale-105 ease-in-out duration-200 group'>
            <Image alt='convert finance report a company to international standart accounting report' src={'/images/pf3.png'} className='object-fill w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]' width={350} height={350} />
            <div className='w-full absolute bottom-0 left-0 pt-10 pb-3 bg-gradient-to-t from-black to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity ease-in-out duration-300'>
              <div className='flex gap-1 justify-between pl-6 items-center'>
                <div className='p-0 w-1/2'>
                  <h1 className='text-lg md:text-2xl text-white font-medium'>Converter Finance Report</h1>
                  <h4 className='text-emerald-500 drop-shadow-md shadow-white text-sm font-semibold'>Convert Into Std Report </h4>
                </div>
                <div className='pr-0'>
                  <div className='text-xs bg-[#299467] text-white rounded-tl-lg rounded-bl-lg  px-2 py-1'>
                                        Kemenhan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>);
}
