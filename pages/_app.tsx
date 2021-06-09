import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return(
        <>
            <Head>
                <title>My Top App</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
