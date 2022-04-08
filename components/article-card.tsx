/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import type { ArticleType } from '@/app/types';
import NextImage from './image';

export default function ArticleCard({
  title,
  date,
  slug,
  url,
  image,
  excerpt,
}: ArticleType): React.ReactElement {
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
          <NextImage
            src={image}
            alt={title}
            width={140}
            height={140}
            parentClassName="w-[140px] h-[140px] object-cover rounded-tl-md rounded-bl-md"
          />

          <div id="article-content" className="block flex-1 p-4 relative">
            <h3 className="heading-3">{title}</h3>
            <small className="line-clamp-2 leading-5 mb-1 text-sm">{`${excerpt}`}</small>
            <time dateTime={date} className="text-xs">
              {releaseDate.toDateString()}
            </time>
          </div>
        </a>
      </Link>
    </article>
  );
}
