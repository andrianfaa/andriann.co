/* eslint-disable react/require-default-props */
import React from 'react';
import Image from 'next/image';

interface Props {
  className?: string;
  src: string;
}

export default function CustomImage({
  className,
  src,
}: Props): React.ReactElement {
  return (
    <div className={className}>
      <Image
        src={src}
        alt="Andrian Fadhilla"
        layout="fill"
        quality={90}
        loading="lazy"
      />
    </div>
  );
}
