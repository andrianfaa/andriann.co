import React, { ReactElement } from 'react';

export default function UnderDevelopment(): ReactElement {
  return (
    <div className="relative text-sm bg-slate-800 text-slate-100 mb-4 py-3">
      <p className="text-center">
        This website is under development.
      </p>
    </div>
  );
}
