import React from 'react';
import {
  Main, Html, Head, NextScript,
} from 'next/document';

export default function Document(): React.ReactElement {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png?v=1" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png?v=1" />
        <link rel="manifest" href="/manifest.json?v=1" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg?v=1" color="#e4ff14" />
        <link rel="shortcut icon" href="/favicons/favicon.ico?v=1" />
        <link rel="icon" href="/favicons/favicon.ico?v=1" />
        <meta name="msapplication-TileColor" content="#0a0c0f" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml?v=1" />
        <meta name="theme-color" content="#0a0c0f" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
