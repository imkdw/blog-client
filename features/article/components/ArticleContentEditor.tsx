'use client';

import MDEditor from '@uiw/react-md-editor';

interface Props {
  content: string;
  setContent: (content: string) => void;
}

export default function ArticleContentEditor({ content, setContent }: Props) {
  const changeHandler = (value?: string) => {
    setContent(value || '');
  };

  return <MDEditor value={content} className="h-full" height="100%" onChange={changeHandler} />;
}
