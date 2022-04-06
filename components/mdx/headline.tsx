/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import React from 'react';

interface HeadlineProps {
  children?: React.ReactNode;
}

export function H1({ children }: HeadlineProps): React.ReactElement {
  return (
    <h1 className="heading-1">
      {children}
    </h1>
  );
}

export function H2({ children }: HeadlineProps): React.ReactElement {
  return (
    <h2 className="heading-2">
      {children}
    </h2>
  );
}
