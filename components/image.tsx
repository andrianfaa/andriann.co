/* eslint-disable react/require-default-props */
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface Props {
  parentClassName?: string;
  imageClassName?: string;
  src: string | StaticImageData;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
}

export default function CustomImage({
  parentClassName,
  imageClassName,
  src,
  width,
  height,
  alt,
  ...options
}: Props): React.ReactElement {
  return (
    <figure className={parentClassName}>
      <Image
        {...options}
        src={src}
        alt={alt}
        layout="responsive"
        quality={60}
        width={width}
        height={height}
        className={`object-cover w-full h-full ${imageClassName}`}
      />
    </figure>
  );
}
