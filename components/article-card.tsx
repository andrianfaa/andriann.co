/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import type { ArticleType } from '@/app/types';
import NextImage from './image';

interface Props extends ArticleType {
  options?: {
    showImage: boolean;
  }
}

export default function ArticleCard({
  title,
  date,
  slug,
  url,
  image,
  excerpt,
  options = {
    showImage: true,
  },
}: Props): React.ReactElement {
  const releaseDate = new Date(date);

  return (
    <article className="article-card rounded-md">
      <Link href={url} key={slug} passHref>
        <a className="w-full flex items-center">
          {/* <figure className="w-[140px]">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              quality={80}
              loading="lazy"
              layout="responsive"
              className="w-full h-full object-cover rounded-tl-md rounded-bl-md"
            />
          </figure> */}
          {options.showImage && (
            <NextImage
              src={image}
              alt={title}
              width={140}
              height={140}
              parentClassName="w-[140px] h-[140px] object-cover rounded-tl-md rounded-bl-md"
              sizes="(max-width: 614px) 100vw, 614px"
            />
          )}

          <div id="article-content" className="block flex-1 p-4 relative">
            {options.showImage === false && (
              <span className="rounded-md bg-primary bg-opacity-25 text-primary text-xs py-1 px-3 inline-block mb-4 font-medium">
                Article
              </span>
            )}

            <h3 className="heading-3">{title}</h3>
            <small className="line-clamp-2 leading-5 mb-1 text-sm">{`${excerpt}`}</small>
            <time
              dateTime={date}
              className={
                options.showImage ? 'text-xs mt-1' : 'text-sm mt-4 block'
              }
            >
              {releaseDate.toDateString()}
            </time>
          </div>
        </a>
      </Link>
    </article>
  );
}
