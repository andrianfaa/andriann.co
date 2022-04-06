/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useMemo } from 'react';
import config from '@/app/config';
import axios from 'redaxios';
import {
  Container, SEO, Footer, ArticleCard,
} from '@/components';
import type { ArticleType, DefaultApiResponse } from '@/app/types';
import { useDebounce } from '@/hooks';

import { FiSearch } from 'react-icons/fi';

interface Props {
  articles: ArticleType[];
}

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY as string;
  const response = await axios<DefaultApiResponse<ArticleType[]>>({
    method: 'GET',
    url: `${config.baseUrl('/api/v1/article')}`,
    headers: {
      'x-api-key': apiKey,
    },
  });

  return {
    props: {
      articles: response.data.data,
    },
  };
}

export default function Article({ articles }: Props): React.ReactElement {
  const [keyword, setKeyword] = React.useState<string>('');

  const debouncedKeyword = useDebounce<string>(keyword, 500);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, [setKeyword]);

  const filteredArticles = useMemo(() => {
    if (debouncedKeyword !== '') {
      const filter = articles?.filter((article: ArticleType) => {
        const title = article.title.toLowerCase();
        const filterKeyword = debouncedKeyword.toLowerCase();

        return title.includes(filterKeyword);
      });

      if (filter && filter.length > 0) {
        return filter;
      }

      return [];
    }

    return articles;
  }, [debouncedKeyword, articles]);

  return (
    <>
      <SEO title="Article | Andrian Fadhilla" />
      <Container className="min-h-[400px] fade-up">
        <h1 className="heading-1 text-custom-text-light">Article</h1>
        <p>
          Article that I wrote in my journey.
        </p>

        <Container className="px-0 relative flex items-center">
          <FiSearch className="absolute text-lg left-3" />
          <input
            type="text"
            className="input-base w-full max-w-[500px] pl-10 focus:outline-none"
            placeholder="Search"
            onChange={handleSearch}
          />
        </Container>

        {filteredArticles && filteredArticles.length > 0 ? (
          <div className="article-container fade-up">
            {filteredArticles.flatMap((article: ArticleType) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <p>Article not found</p>
        )}
      </Container>
      <Footer />
    </>
  );
}
