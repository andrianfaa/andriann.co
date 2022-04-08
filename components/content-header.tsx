/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/require-default-props */
import React from 'react';
import Image from 'next/image';
import Me from '@/assets/images/me.png';
import Container from './container';

export interface ContentHeaderProps {
  title: string;
  description?: string;
  imgSrc?: string;
}

export default function ContentHeader({ title, description, imgSrc }: ContentHeaderProps): React.ReactElement {
  return (
    <header className="border-b border-b-slate-800 pb-6 mb-6">
      <Container className="p-0">
        {imgSrc && (
          <figure className="w-full max-w-lg mx-auto rounded-md mb-6">
            <Image
              src={imgSrc}
              alt={title}
              width={1280}
              height={720}
              className="rounded-md w-full h-fit"
              layout="intrinsic"
            />
          </figure>
        )}

        <h1 className="heading-1 mb-4 md:mb-6">{title}</h1>

        {description && <p className="mb-6">{description}</p>}

        <div className="flex items-center">
          <Image
            src={Me}
            alt="Andrian Fadhilla"
            width={48}
            height={48}
            layout="intrinsic"
            loading="lazy"
            className="rounded-full w-12 h-12 object-cover mr-4"
          />

          <div className="ml-4">
            <span className="block w-full leading-3 text-gray-100">Andrian Fadhilla</span>
            <small className="leading-3">@andrianfaa</small>
          </div>
        </div>
      </Container>
    </header>
  );
}
