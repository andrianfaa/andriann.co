/* eslint-disable react/destructuring-assignment */
import React from 'react';

interface AnchorType {
  children: React.ReactNode;
  href: string;
}

export default function Anchor({
  children,
  href,
}: AnchorType): React.ReactElement {
  return (
    <a
      href={href}
      className="text-primary border-b border-b-custom-black-700 hover:border-b-primary border-dashed hover:border-solid"
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}
