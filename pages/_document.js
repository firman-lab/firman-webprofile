import { Html, Head, Main, NextScript } from 'next/document';
import { useState } from 'react';


export default function Document() {

    return (
        <Html lang="en">
            <Head>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Signika:wght@500;600;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/icons/logo.svg" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
