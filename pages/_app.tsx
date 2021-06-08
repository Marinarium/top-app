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
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
