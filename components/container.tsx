/* eslint-disable react/require-default-props */
import React from 'react';
import type { ReactNode, ReactElement } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Container({
  children,
  className,
  id,
}: ContainerProps): ReactElement {
  return (
    <div
      id={id}
      className={`w-full max-w-[900px] mx-auto p-6 ${className}`}
    >
      {children}
    </div>
  );
}
