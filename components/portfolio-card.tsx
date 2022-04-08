/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'next/link';
import type { PortfolioType } from '@/app/types';
import NextImage from './image';

export default function PortfolioCard({
  title,
  description,
  image,
  url,
  tags,
}: PortfolioType): React.ReactElement {
  return (
    <li className="portfolio-card">
      <Link href={url} passHref>
        <a className="w-full">
          {/* <figure className="w-full h-full"> */}
          <NextImage
            src={image}
            alt={title}
            width={614}
            height={345}
            imageClassName="object-cover w-full h-full rounded-tr-md rounded-tl-md"
            parentClassName="w-full h-full"
          />
          {/* </figure> */}

          <div className="w-full p-4">
            <h3 className="heading-3 line-clamp-2">{title}</h3>
            <small className="text-sm leading-5 block line-clamp-2 mb-3">{description}</small>

            <div id="tags" className="flex flex-row flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span key={tag} className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-gray-100 bg-opacity-10 text-custom-text-light">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
