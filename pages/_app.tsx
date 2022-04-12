import React, { useEffect, useRef } from 'react';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { useRouter } from 'next/router';
import MDXComponents from '@/components/mdx';

import '@/styles/globals.scss';
import '@/styles/prism.css';

import { Navbar } from '@/components';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

function MyApp({ Component, pageProps }: any) {
  const components = useMDXComponents(MDXComponents);
  const router = useRouter();
  const loadingBarRef = useRef<LoadingBarRef>(null);

  useEffect(() => {
    router.events.on('routeChangeStart', () => loadingBarRef.current?.continuousStart(0, 20));
    router.events.on('routeChangeComplete', () => loadingBarRef.current?.complete());
    router.events.on('routeChangeError', () => loadingBarRef.current?.complete());
  }, [router]);

  return (
    <MDXProvider components={components}>
      <LoadingBar
        color="#e4ff14"
        height={4}
        ref={loadingBarRef}
      />

      <Navbar />
      <div id="spacer" className="h-[60px] w-full" />

      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
