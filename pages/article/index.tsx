/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useMemo } from 'react';
import {
  Container, SEO, Footer, ArticleCard,
} from '@/components';
import type { ArticleType, DefaultApiResponse } from '@/app/types';
import { useDebounce } from '@/hooks';

import { FiSearch } from 'react-icons/fi';
import { Fetch } from '@/utils';

interface Props {
  articles: ArticleType[];
}

export async function getServerSideProps() {
  const response = await Fetch<DefaultApiResponse<ArticleType[]>>('/api/v1/article', 'get');

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
      <SEO
        title="Article | Andrian Fadhilla"
        description="List of articles I've written."
        url="https://andriann.co/article"
        keywords={[
          'Andrian Fadhilla',
          'Andrian Fadhilla Blog',
          'Andrian Fadhilla Blog Articles',
          'Andrian Fadhilla Blog Article',
          'Andrian Fadhilla Blog Article List',
          'Article',
          'Blog',
          'Blog Articles',
          'Blog Article',
        ]}
      />
      <Container className="min-h-[400px] fade-up">
        <h1 className="heading-1 text-custom-text-light">Article</h1>
        <p>
          Article that I wrote in my journey.
        </p>

        <Container className="px-0 relative flex items-center">
          <FiSearch className="absolute text-lg left-3" />
          <input
            type="search"
            className="input-base w-full max-w-[500px] pl-10 focus:outline-none"
            placeholder="Search"
            onChange={handleSearch}
          />
        </Container>

        {filteredArticles && filteredArticles.length > 0 ? (
          <div className="article-row fade-up">
            {filteredArticles.flatMap((article: ArticleType) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <p>
            No article found.
          </p>
        )}
      </Container>
      <Footer />
    </>
  );
}
