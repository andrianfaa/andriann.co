import React from 'react';

import { Container, SEO, Footer } from '@/components';

export default function ErrorPage() {
  return (
    <>
      <SEO title="About | Andrian Fadhilla" />

      <Container className="fade-up min-h-[400px] flex items-center justify-center">
        <h1 className="heading-1">About</h1>
      </Container>

      <Footer />
    </>
  );
}
