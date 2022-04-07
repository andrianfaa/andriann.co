/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState, useCallback } from 'react';
import {
  SEO, Container, Footer, PortfolioCard,
} from '@/components';
import type { DefaultApiResponse, PortfolioType } from '@/app/types';
import { Fetch } from '@/utils';
import { useDebounce } from '@/hooks';

import { FiSearch } from 'react-icons/fi';

export async function getServerSideProps() {
  const response = await Fetch<DefaultApiResponse<PortfolioType[]>>('/api/v1/portfolio', 'get');

  return {
    props: {
      portfolios: response.data.data,
    },
  };
}

interface Props {
  portfolios: PortfolioType[];
}

export default function PortfolioPage({
  portfolios,
}: Props): React.ReactElement {
  const [keyword, setKeyword] = useState<string>('');

  const debouncedKeyword = useDebounce<string>(keyword, 500);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, [setKeyword]);

  const filteredPortfolios = useMemo(() => {
    if (debouncedKeyword !== '') {
      const filter = portfolios.filter((portfolio: PortfolioType) => {
        const { title } = portfolio;

        return title.toLowerCase().includes(debouncedKeyword.toLowerCase());
      });

      if (filter.length === 0) {
        return [];
      }

      return filter;
    }

    return portfolios;
  }, [debouncedKeyword, portfolios]);

  return (
    <>
      <SEO
        title="Portfolio | Andrian Fadhilla"
        description="List of projects I've worked on and the technologies I used."
        url="https://andriann.co/portfolio"
        keywords={[
          'Portfolio',
          'Andrian Fadhilla',
          'Andrian',
          'Fadhilla',
          'Portfolio Andrian Fadhilla',
          'Portfolio Andrian',
          'Portfolio Fadhilla',
        ]}
      />

      <Container className="min-h-[400px] fade-up">
        <h1 className="heading-1">Portfolio</h1>
        <p>
          List of projects I've worked on and the technologies I used.
        </p>

        <Container className="px-0 relative flex items-center">
          <FiSearch className="absolute text-lg left-3" />
          <input
            type="search"
            className="input-base w-full max-w-[500px] pl-10   focus:outline-none"
            placeholder="Search"
            onChange={handleSearch}
          />
        </Container>

        <Container className="p-0">
          {filteredPortfolios.length > 0 ? (
            <ul className="portfolio-row fade-up">
              {filteredPortfolios.map((portfolio: PortfolioType) => (
                <PortfolioCard key={portfolio.id} {...portfolio} />
              ))}
            </ul>
          ) : (
            <p className="text-center">No results found</p>
          )}
        </Container>
      </Container>
      <Footer />
    </>
  );
}
