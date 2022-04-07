/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { PortfolioType } from '@/app/types';

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
          <figure className="w-full h-full">
            <Image
              src={image}
              alt={title}
              width={1280}
              height={720}
              layout="responsive"
              className="aspect-video object-cover rounded-tr-md rounded-tl-md"
              priority
            />
          </figure>

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
