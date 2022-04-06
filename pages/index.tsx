/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { Container, SEO, Footer } from '@/components';
import getArticles from '@/helpers/getArticles';
import { ArticleType } from '@/app/types';

export async function getServerSideProps() {
  const latestArticle = await getArticles(2, 0);

  return {
    props: {
      articles: latestArticle,
    },
  };
}

export default function Home({ articles }: any): React.ReactElement {
  const router = useRouter();

  const handleOnClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/about');
  }, [router]);

  return (
    <>
      <SEO title="Andrian Fadhilla" />

      <Container className="min-h-[400px] fade-up">
        <header className="flex flex-col sm:flex-row-reverse justify-start sm:justify-between items-center py-6 sm:min-h-[350px]">
          <figure className="w-32 sm:w-44 mb-4 md:mb-0 md:mr-12 lg:mr-32 rounded-full">
            <Image
              src="https://avatars.githubusercontent.com/u/74356783?v=4"
              alt="Andrian Fadhilla"
              width={200}
              height={200}
              layout="responsive"
              className="rounded-full"
            />
          </figure>

          {/* Text */}
          <div className="w-full sm:max-w-[500px] text-center sm:text-left">
            <h1 className="heading-1 text-center sm:text-left text-gray-100">Andrian Fadhilla</h1>
            <h2 className="text-center sm:text-left my-2 text-blue-500 font-semibold">Frontend Developer</h2>
            <p className="text-center sm:text-left md:max-w-[500px]">
              I'm a frontend developer based in Bekasi, Indonesia. I'm passionate
              {' '}
              about building web applications with Reactjs
            </p>

            <button
              type="button"
              className="btn-primary mt-4"
              onClick={handleOnClick}
            >
              More About Me
            </button>
          </div>
        </header>

        {/* Latest Article */}
        <Container className="px-0">
          <h2 className="heading-2 text-gray-100">Latest Article</h2>

          <div className="article-container mt-4">
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
        </Container>
      </Container>

      <Footer />
    </>
  );
}
