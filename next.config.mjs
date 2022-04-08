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
    domains: ['og-image.vercel.app'],
    lazyLoad: true,
    displaySizes: [350, 450, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768, 1024, 1280, 1440, 1920],
    minimumCacheCTL: 60,
  },
  pwa: {
    runtimeCaching,
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});
