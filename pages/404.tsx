/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Illustration from '@/assets/illustration/illustration-404-2.svg';

import { Container, SEO, Footer } from '@/components';

export default function ErrorPage() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <>
      <SEO
        title="Error 404 Page Not Found"
        description="The page you are looking for does not exist. Please check the URL or go back to the homepage."
        url={`https://andriann.co${router.asPath}`}
      />
      <Container className="min-h-[400px] flex items-center justify-center fade-up">
        <div className="text-center mb-8">
          <Image src={Illustration} alt="Illustration" layout="intrinsic" width={350} height={350} />
          <h1 className="heading-1">
            Page Not Found
          </h1>
          <p>
            The page you are looking for does not exist.
          </p>
          <button type="button" className="btn-primary mt-4" onClick={handleClick}>
            Go to Homepage
          </button>
        </div>
      </Container>
      <Footer />
    </>
  );
}
