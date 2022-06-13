import NextImage from "next/image";
import { memo } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

function Image({
  src,
  alt,
  className,
}: ImageProps) {
  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <NextImage
        src={src}
        alt={alt}
        layout="fill"
        blurDataURL={src}
        loading="lazy"
        placeholder="blur"
        className="object-cover w-full h-full"
        // loader={({ src }) => src}
        // unoptimized
      />
    </div>
  );
}

export default memo(Image);
