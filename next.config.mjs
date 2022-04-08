/* eslint-disable import/extensions */
/** @type {import('next').NextConfig} */
import remarkFrontmatter from 'remark-frontmatter';
import withPwa from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

export default withPwa({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'og-image.vercel.app', 'images.unsplash.com'],
    lazyLoad: true,
    layoutRaw: true,
  },
  pwa: {
    runtimeCaching,
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});
