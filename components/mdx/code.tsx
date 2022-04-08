/* eslint-disable react/no-danger */
import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup';

interface CodeProps {
  children: any;
  className: string;
}

export default function Code({
  children,
  className,
}: CodeProps): React.ReactElement {
  const [code, setCode] = React.useState<string>('');
  const lang = className.replace(/language-/, '');

  React.useEffect(() => {
    setCode(Prism.highlight(children, Prism.languages[lang] ?? Prism.languages.javascript, lang));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, className]);

  return (
    <code
      className={`${className ?? ''} bg-transparent`}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
