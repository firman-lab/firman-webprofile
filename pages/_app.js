import Script from 'next/script';
import '../styles/globals.css';
const ID = process.env.GA_MEASUREMENT_ID;

export default function App({ Component, pageProps }) {

  return (
    <>
      <Script strategy='afterInteractive' async src={'https://www.googletagmanager.com/gtag/js?id=G-MS1TSQE338'}></Script>
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
             
               gtag('config', 'G-MS1TSQE338');
            `}
      </Script>
      <Component {...pageProps} />
    </>
  );

}
