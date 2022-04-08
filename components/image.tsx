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
}

export default function CustomImage({
  parentClassName,
  imageClassName,
  src,
  width,
  height,
  alt,
}: Props): React.ReactElement {
  return (
    <figure className={parentClassName}>
      <Image
        src={src}
        alt={alt}
        layout="intrinsic"
        quality={60}
        width={width}
        height={height}
        className={`object-cover w-full h-full ${imageClassName}`}
        loading="eager"
      />
    </figure>
  );
}
