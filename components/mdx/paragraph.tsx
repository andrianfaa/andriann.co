import React from 'react';

export interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps): React.ReactElement {
  return (
    <p className="w-full block mb-4">
      {children}
    </p>
  );
}
