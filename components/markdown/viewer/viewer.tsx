'use client';

import { marked } from 'marked';
import hljs from 'highlight.js';

import '../editor/editor.css';
import './github-dark.min.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { MOBILE_WIDTH } from '../../../constants/mobile.constant';

interface Props {
  content: string;
}

export default function MarkdownViewer({ content }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    hljs.highlightAll();

    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  const parsedContent = marked.parse(content);

  return (
    <div
      className={clsx(
        'preview flex h-full resize-none flex-col gap-3 break-words p-2 outline-none',
        isMobile ? 'w-[95%]' : 'w-full',
      )}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
}
