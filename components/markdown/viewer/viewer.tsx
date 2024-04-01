'use client';

import { marked } from 'marked';
import hljs from 'highlight.js';

import '../editor/editor.css';
import './github-dark.min.css';
import { useEffect } from 'react';

interface Props {
  content: string;
}

export default function MarkdownViewer({ content }: Props) {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  const parsedContent = marked.parse(content);

  return (
    <div
      className="preview flex h-full w-full resize-none flex-col gap-3 break-words p-2 outline-none"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: parsedContent }}
    />
  );
}
