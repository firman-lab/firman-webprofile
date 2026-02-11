import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonIcon from '../atom/ButtonIcon';
import igIcon from '../../public/icons/ig.svg';
import linkedinIcon from '../../public/icons/linkind.svg';
import gitIcon from '../../public/icons/git.svg';
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <>
      <section className="container mx-auto sm:px-8 pt-28 xl:pt-36">
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <h3 className=" pt-1 lg:pt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-300 dark:bg-gradient-to-br dark:from-gray-100 dark:text-gray-200 font-signika">
              Hi, I&apos;m Firman
            </h3>
            {/* <h3 className='text-3xl lg:text-4xl xl:text-6xl pt-2 font-bold text-transparent bg-clip-text bg-[#29af77] drop-shadow-md dark:bg-[#80ddb3] font-signika'>Front End Developer</h3> */}

            <h3 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl !leading-tight pt-2 font-bold text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-[#29af77] dark:to-[#b0fa02ea] drop-shadow-md bg-[#26a76d] font-signika">
              <Typewriter
                options={{
                  strings: [
                    'Front End Developer',
                    'React.Js Developer',
                    'Next.Js Developer',
                    'Laravel Developer',
                    'Front End Engineer',
                    'UI/UX Designer',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                }}
              />
            </h3>
            <p className="font-medium text-slate-600 dark:text-gray-300 text-sm lg:max-w-2xl text-justify lg:text-base xl:text-lg pt-2 lg:pt-4 font-poppins">
              Passionate about crafting{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">high-performance</span>{' '}
              and{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">pixel-perfect</span>{' '}
              web experiences. Specialized in{' '}
              <span className="font-semibold">React.js</span> &amp;{' '}
              <span className="font-semibold">Next.js</span> with strong backend skills in Express.js and database management.
              I turn ideas into clean, scalable, and user-friendly digital products.{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Let&apos;s build something amazing together!</span>
            </p>
            <div className="flex flex-wrap justify-between md:justify-left gap-4 lg:gap-8 items-center mt-8 max-w-sm">
              <a
                href="/Firman-resume.pdf"
                // download={true}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-3 lg:px-6 py-2 lg:py-2 text-sm lg:text-base text-white font-medium flex gap-2  font-poppins rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200 ">
                  <span>
                    <Image
                      src={'/icons/download.svg'}
                      alt="download resume"
                      width={24}
                      height={24}
                      className="w-5 lg:w-6"
                    />
                  </span>
                  Resume
                </button>
              </a>
              <Link
                href={'https://www.instagram.com/fir_manh/'}
                target="_blank"
                className="p-2 max-h-12 rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200"
              >
                {/* <ButtonIcon icon={igIcon} /> */}
                <Image src={igIcon} alt="ic-ig" width={20} height={20} />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/firmanhid/'}
                target="_blank"
                className="p-2 max-h-12 rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200"
              >
                <Image src={linkedinIcon} alt="ic-linkedin" width={20} height={20} />
              </Link>
              <Link
                href={'https://github.com/firman-lab'}
                target="_blank"
                className="p-2 max-h-12 rounded-lg bg-gradient-to-tr from-[#34996b] to-[#118b6b] border-emerald-400 border-[1px] hover:bg-gradient-to-tr hover:from-[#45A38C] hover:to-[#4a917e] hover:scale-110 hover:transition-all hover:duration-200"
              >
                <Image src={gitIcon} alt="ic-git" width={20} height={20} />
              </Link>
            </div>
          </div>
          {/* Profile Image Section */}
          <div className="relative flex-1 flex justify-center items-center w-72 sm:w-80 lg:w-[500px] h-80 sm:h-96 lg:h-[520px]">

            {/* === Radar Ripple Rings === */}
            <div className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full border border-emerald-400/40 dark:border-emerald-400/30 animate-ripple-1" />
            <div className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full border border-emerald-400/30 dark:border-emerald-400/20 animate-ripple-2" />
            <div className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full border border-emerald-400/20 dark:border-emerald-400/15 animate-ripple-3" />
            <div className="absolute top-1/2 left-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full border border-emerald-400/10 dark:border-emerald-400/10 animate-ripple-4" />

            {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-68 sm:h-68 lg:w-[360px] lg:h-[360px] rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 blur-2xl" />

            {/* Shadow circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full bg-gray-100 dark:bg-slate-800 shadow-[0_25px_80px_-10px_rgba(52,153,107,0.35)] dark:shadow-[0_25px_80px_-10px_rgba(52,153,107,0.25)]" />

            {/* Profile image - circular */}
            <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden">
              <Image
                src="/images/profile.png"
                alt="avatar-head"
                width={600}
                height={600}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* === Decorative vectors - close / overlapping the image === */}

            {/* Curved arc hugging top-right of circle */}
            <svg className="absolute z-20 top-[8%] right-[5%] sm:top-[10%] sm:right-[8%] lg:top-[6%] lg:right-[10%] w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 animate-spin-very-slow" viewBox="0 0 200 200" fill="none">
              <path d="M140 30 A90 90 0 0 1 185 130" stroke="url(#grad1)" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M130 22 A100 100 0 0 1 195 140" stroke="url(#grad1)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>

            {/* Curved arc hugging bottom-left of circle */}
            <svg className="absolute z-0 bottom-[10%] left-[5%] sm:bottom-[12%] sm:left-[8%] lg:bottom-[8%] lg:left-[15%] w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 animate-spin-very-slow" viewBox="0 0 200 200" fill="none">
              <path d="M60 170 A90 90 0 0 1 15 70" stroke="url(#grad2)" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M70 178 A100 100 0 0 1 5 60" stroke="url(#grad2)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
              <defs>
                <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a3e635" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>

            {/* Dots ON/near the circle edge */}
            <div className="absolute z-20 top-[5%] left-[30%] lg:top-[3%] lg:left-[32%] w-3 h-3 rounded-full bg-lime-400 animate-pulse-slow shadow-lg shadow-lime-400/50" />
            <div className="absolute z-20 top-[25%] right-[3%] lg:top-[22%] lg:right-[6%] w-2 h-2 rounded-full bg-emerald-300 animate-pulse-slow shadow-lg shadow-emerald-300/50" style={{ animationDelay: '1s' }} />
            <div className="absolute z-20 bottom-[25%] left-[3%] lg:bottom-[22%] lg:left-[6%] w-2.5 h-2.5 rounded-full bg-lime-300 animate-pulse-slow shadow-lg shadow-lime-300/50" style={{ animationDelay: '2s' }} />
            <div className="absolute z-20 bottom-[5%] right-[30%] lg:bottom-[3%] lg:right-[32%] w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow shadow-lg shadow-emerald-400/50" style={{ animationDelay: '3s' }} />

            {/* Plus icon - top left ON the circle */}
            <svg className="absolute z-20 top-[15%] left-[8%] lg:top-[12%] lg:left-[12%] w-5 h-5 lg:w-6 lg:h-6 text-lime-400 animate-float drop-shadow-lg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>

            {/* Diamond shape - right side ON the circle */}
            <svg className="absolute z-20 top-[45%] right-[2%] lg:top-[42%] lg:right-[5%] w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 animate-float-delayed drop-shadow-lg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 1 L19 10 L10 19 L1 10 Z" />
            </svg>

            {/* Arrow doodle - bottom right, close to circle */}
            <svg className="absolute z-20 bottom-[12%] right-[8%] lg:bottom-[10%] lg:right-[10%] w-10 h-10 lg:w-14 lg:h-14 text-emerald-500/60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 50 C20 20, 40 30, 50 10" />
              <path d="M44 8 L50 10 L48 18" />
            </svg>

            {/* Small star sparkle - top right ON circle */}
            <svg className="absolute z-20 top-[8%] right-[22%] lg:top-[5%] lg:right-[25%] w-4 h-4 lg:w-5 lg:h-5 text-lime-300 animate-pulse-slow drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
            </svg>

          </div>
        </div>
      </section>
      <section className="relative mx-auto w-full overflow-hidden mt-16 lg:mt-20 xl:mt-24 py-8 lg:py-12 hidden md:block">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/50 to-transparent dark:via-emerald-950/20" />
        
        {/* Top decorative line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
        
        {/* Label */}
        <div className="relative flex justify-center mb-6">
          <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 rounded-full border border-emerald-200 dark:border-emerald-800/50 font-poppins">
            Tech Stack
          </span>
        </div>

        {/* Marquee container - match line width */}
        <div className="relative w-2/3 mx-auto">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

          {/* Single smooth marquee track */}
          <div className="overflow-hidden py-3">
            <div className="flex animate-scroll-left w-max" style={{ willChange: 'transform' }}>
              {[...Array(4)].flatMap((_, setIndex) => [
                { icon: '/icons/react.svg', name: 'React Js' },
                { icon: '/icons/redux.svg', name: 'Redux' },
                { icon: '/icons/nextjs.svg', name: 'Next.Js' },
                { icon: '/icons/tailwind.svg', name: 'Tailwind CSS' },
                { icon: '/icons/gits.svg', name: 'Git' },
              ].map((tech, i) => (
                <div key={`${setIndex}-${i}`} className="flex-shrink-0 flex items-center gap-3 mx-4 lg:mx-6 px-5 py-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/50 shadow-sm hover:shadow-md hover:shadow-emerald-500/10 hover:border-emerald-300 dark:hover:border-emerald-600 hover:-translate-y-1 transition-all duration-300 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/40 dark:to-emerald-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image alt={tech.name} className="object-contain" width={28} height={28} src={tech.icon} />
                  </div>
                  <span className="text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-200 font-poppins whitespace-nowrap">{tech.name}</span>
                </div>
              )))}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      </section>
    </>
  );
}
