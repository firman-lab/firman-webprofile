import Head from 'next/head';
import { Inter } from '@next/font/google';
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  function setDark() {
    if (isDark === false) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
    console.log(isDark);
  }
  return (
    <>
      <div className={isDark ? 'dark' : ''}>
        <Head>
          <title>Firman | Web Developer</title>
          <meta name="description" content="Website Developer" />
        </Head>
        <main className='w-full relative dark:bg-slate-900 transition-all ease-in duration-300'>
          <Navbar dark={isDark} darkFunc={setDark} />
          <Header />
          <Portfolio />
          <Footer/>
        </main>
      </div>
    </>
  );
}
