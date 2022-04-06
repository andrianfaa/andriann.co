/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'redaxios';
import {
  Container, SEO, Footer, ArticleCard,
} from '@/components';

import config from '@/app/config';
import { ArticleType, DefaultApiResponse } from '@/app/types';

import { FiArrowRight } from 'react-icons/fi';

interface Props {
  articles: ArticleType[];
}

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY as string;
  const response = await axios<DefaultApiResponse<ArticleType[]>>({
    method: 'GET',
    url: config.baseUrl('/api/v1/article'),
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

export default function Home({ articles }: Props): React.ReactElement {
  const router = useRouter();

  const handleOnClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/about');
  }, [router]);

  const data = {
    profileImage: 'https://avatars.githubusercontent.com/u/74356783?v=4',
    name: 'Andrian Fadhilla',
    role: 'Frontend Developer',
    description: 'I\'m a frontend developer based in Bekasi, Indonesia. I\'m passionate about building web applications with Reactjs',
  };

  return (
    <>
      <SEO title={data.name} description={data.description} />

      <Container className="min-h-[400px] fade-up">
        <header className="flex flex-col sm:flex-row-reverse justify-start sm:justify-between items-center py-6 sm:min-h-[350px]">
          <figure className="w-32 sm:w-44 mb-4 md:mb-0 md:mr-12 lg:mr-32 rounded-full">
            <Image
              src={data.profileImage}
              priority
              alt="Andrian Fadhilla"
              width={200}
              height={200}
              layout="responsive"
              className="rounded-full"
            />
          </figure>

          {/* Text */}
          <div className="w-full sm:max-w-[500px] text-center sm:text-left">
            <h1 className="heading-1 text-gray-100">{data.name}</h1>
            <h2 className="my-2 text-blue-500 font-semibold">{data.role}</h2>
            <p className=" md:max-w-[500px]">
              {data.description}
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
          <div className="flex items-center justify-between">
            <h2 className="heading-2 mb-0 md:mb-0 text-custom-text-light">Latest Article</h2>

            <Link href="/article" passHref>
              <a className="hover:text-primary group">More Article <FiArrowRight className="text-base align-middle inline group-hover:ml-1 transition-all duration-300" /></a>
            </Link>
          </div>

          <div className="article-container mt-4">
            {articles.flatMap((article: ArticleType) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </Container>
      </Container>

      <Footer />
    </>
  );
}
