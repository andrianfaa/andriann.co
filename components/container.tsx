/* eslint-disable react/require-default-props */
import React from 'react';
import type { ReactNode, ReactElement } from 'react';

export interface ContainerProps {
  children: ReactNode;
  maxWidth?: number;
  className?: string;
  id?: string;
}

export default function Container({
  children,
  maxWidth,
  className,
  id,
}: ContainerProps): ReactElement {
  return (
    <div
      id={id}
      className={`w-full ${
        maxWidth ? `max-w-[${maxWidth}px]` : 'max-w-[900px]'
      } mx-auto p-6 ${className}`}
    >
      {children}
    </div>
  );
}
