'use client';

import { useRef } from 'react';
import clsx from 'clsx';

import Preview from './preview/preview';
import TextArea from './textarea/textarea';
import Toolbar from './toolbar/toolbar';

import './editor.css';

interface Props {
  width: number | string;
  height: number | string;
  content: string;
  changeContent: (content: string) => void;
  setImage: (image: string) => void;
}
export default function MarkdownEditor({ width, height, content, changeContent, setImage }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const changeContentHandler = (value: string) => {
    if (textareaRef.current) {
      changeContent(value);
      textareaRef.current.focus();
    }
  };

  return (
    <div
      className={clsx('relative flex flex-col overflow-hidden border border-gray-300')}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width,
      }}
    >
      <Toolbar changeContent={changeContentHandler} content={content} ref={textareaRef} />
      <div className="flex h-full w-full flex-row pt-[50px]">
        <TextArea content={content} changeContent={changeContentHandler} ref={textareaRef} setImage={setImage} />
        <Preview content={content} />
      </div>
    </div>
  );
}
