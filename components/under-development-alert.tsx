import React, { ReactElement } from 'react';

export default function UnderDevelopment(): ReactElement {
  return (
    <div className="relative text-sm bg-custom-black-800 text-custom-text mb-4 py-3">
      <p className="text-center">
        This website is under development.
      </p>
    </div>
  );
}
