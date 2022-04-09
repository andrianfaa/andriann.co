import React, { useEffect, useRef } from 'react';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
// import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import MDXComponents from '@/components/mdx';

import '@/styles/globals.scss';
import '@/styles/prism.css';

import { Navbar } from '@/components';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';
import UnderDevelopment from '@/components/under-development-alert';

function MyApp({ Component, pageProps }: any) {
  const components = useMDXComponents(MDXComponents);
  const router = useRouter();
  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    router.events.on('routeChangeStart', () => loadingBarRef.current?.continuousStart(0, 60));
    router.events.on('routeChangeComplete', () => loadingBarRef.current?.complete());
    router.events.on('routeChangeError', () => loadingBarRef.current?.complete());
  }, [router]);

  return (
    <MDXProvider components={components}>
      <LoadingBar
        color="#3b82f6"
        height={4}
        ref={loadingBarRef}
      />

      <Navbar />
      <div id="spacer" className="h-[60px] w-full" />

      <UnderDevelopment />

      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
