/* eslint-disable import/prefer-default-export */
import React from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface PreProps {
  children: any;
}

export function Pre({ children }: PreProps): React.ReactElement {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);

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
    <div className="relative rounded-md text-sm bg-custom-black-800 text-custom-text mb-4">
      <div className="bg-custom-black-700 inline rounded-tl-md px-4 py-1 font-mono font-semibold absolute top-0 left-0 z-10">
        {lang}
      </div>

      <button
        type="button"
        onClick={handeCopy}
        disabled={isCopied}
        className="absolute top-0 right-0 mr-2 mt-2 h-10 w-10 rounded-md border border-custom-black-700 flex items-center justify-center p-0 disabled:opacity-100"
        title="Copy to clipboard"
        aria-label="Copy to clipboard"
      >
        {isCopied ? (
          <FiCheck className="w-5 h-5" />
        ) : (
          <FiCopy className="w-5 h-5" />
        )}
      </button>
      <pre className="overflow-x-auto font-mono px-4 pt-12 pb-5 focus:outline-none">
        {children}
      </pre>
    </div>
  );
}
