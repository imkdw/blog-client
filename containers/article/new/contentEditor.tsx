'use client';

import MarkdownEditor from '../../../components/markdown/editor/editor';

interface Props {
  content: string;
  changeHandler: (content: string) => void;
  setImage: (image: string) => void;
}

export default function ArticleContentEditor({ content, changeHandler, setImage }: Props) {
  return (
    <MarkdownEditor width="100%" height="600px" content={content} changeContent={changeHandler} setImage={setImage} />
  );
}
