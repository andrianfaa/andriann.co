/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface PreProps {
  children: any;
}

export function Pre({ children }: PreProps): React.ReactElement {
  const [isCopied, setIsCopied] = React.useState(false);

  const lang = children?.props.className.replace(/language-/, '');

  /**
   * Copy to clipboard
   */
  const handeCopy = (): void => {
    const content = children?.props.children;

    if ('navigator' in window) {
      const { clipboard } = navigator;

      if (clipboard) {
        clipboard.writeText(content);
      } else {
        const textarea = document.createElement('textarea');

        textarea.value = content;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        textarea.setSelectionRange(0, content.length);
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setIsCopied(true);
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div className="relative rounded-md text-sm bg-slate-800 text-slate-100 mb-4">
      <div className="bg-blue-500 rounded-tr-md rounded-tl-md px-4 py-1 font-mono font-semibold">
        {lang}
      </div>

      <button
        type="button"
        onClick={handeCopy}
        disabled={isCopied}
        className="absolute top-0 right-0 mr-4 mt-10 h-10 w-10 rounded-md flex items-center justify-center btn-primary p-0 disabled:opacity-100"
      >
        {isCopied ? (
          <FiCheck className="w-5 h-5" />
        ) : (
          <FiCopy className="w-5 h-5" />
        )}
      </button>
      <pre className="overflow-x-auto px-4 py-5 focus:outline-none">
        {children}
      </pre>
    </div>
  );
}
