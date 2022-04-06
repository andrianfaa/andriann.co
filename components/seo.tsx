/* eslint-disable react/require-default-props */
import React from 'react';
import Head from 'next/head';

export interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({
  title,
  description = 'I\'m a Junior Frontend Developer and I\'m passionate about building web applications using Reactjs.',
  image = '/banner.png',
  url = 'https://andriann.co',
}: SEOProps): React.ReactElement {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/*  Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/*  Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
}
