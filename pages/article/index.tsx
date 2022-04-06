/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Container, SEO, Footer } from '@/components';
import getArticles from '@/helpers/getArticles';
import type { ArticleType } from '@/app/types';
import { useDebounce } from '@/hooks';

import { FiSearch } from 'react-icons/fi';

interface Props {
  articles: any;
}

export async function getServerSideProps() {
  const articles = await getArticles(10);

  return {
    props: {
      articles,
    },
  };
}

export default function Article({ articles }: Props): React.ReactElement {
  const [keyword, setKeyword] = React.useState<string>('');

  const debouncedKeyword = useDebounce<string>(keyword, 500);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }, []);

  const filteredArticles = useMemo(() => {
    if (!debouncedKeyword) {
      return articles;
    }

    return articles.filter((article: any) => {
      const { title, description } = article;

      return (
        title.toLowerCase().includes(debouncedKeyword.toLowerCase())
        || description.toLowerCase().includes(debouncedKeyword.toLowerCase())
      );
    });
  }, [debouncedKeyword, articles]);

  return (
    <>
      <SEO title="Article | Andrian Fadhilla" />
      <Container className="min-h-[400px] fade-up">
        <h1 className="heading-1 text-gray-100">Article</h1>
        <p>
          Article that I wrote
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
          <div className="article-container">
            {filteredArticles.flatMap((article: ArticleType) => {
              const date = new Date(article.date);

              return (
                <Link href={article.url} key={article.slug} passHref>
                  <article className="article-card rounded-md">
                    <figure className="aspect-square w-[140px]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={800}
                        layout="responsive"
                        className="aspect-square object-cover rounded-tl-md rounded-bl-md"
                      />
                    </figure>

                    <div id="article-content" className="block flex-1 p-4 relative">
                      <h3 className="heading-3 text-gray-100">{article.title}</h3>
                      <small className="line-clamp-2 leading-5 mb-1 text-sm">{`${article.excerpt}`}</small>
                      <time dateTime={article.date} className=" text-xs">{date.toDateString()}</time>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="article-container">
            {articles.flatMap((article: ArticleType) => {
              const date = new Date(article.date);

              return (
                <Link href={article.url} key={article.slug} passHref>
                  <article className="article-card rounded-md">
                    <figure className="aspect-square w-[140px]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={800}
                        height={800}
                        layout="responsive"
                        className="aspect-square object-cover rounded-tl-md rounded-bl-md"
                      />
                    </figure>

                    <div id="article-content" className="block flex-1 p-4 relative">
                      <h3 className="heading-3 text-gray-100">{article.title}</h3>
                      <small className="line-clamp-2 leading-5 mb-1 text-sm">{`${article.excerpt}`}</small>
                      <time dateTime={article.date} className=" text-xs">{date.toDateString()}</time>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}
