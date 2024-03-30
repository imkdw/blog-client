import { marked } from 'marked';

import '../editor.css';

interface Props {
  content: string;
}

export default function Preview({ content }: Props) {
  const html = marked.parse(content);
  return (
    <div
      className="preview flex h-full w-1/2 resize-none flex-col gap-3 overflow-y-scroll p-2 outline-none"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
