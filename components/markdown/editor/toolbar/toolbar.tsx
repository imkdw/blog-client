import { ForwardedRef, forwardRef } from 'react';
import Bold from './buttons/bold';
import Heading1 from './buttons/h1';
import Heading2 from './buttons/h2';
import Heading3 from './buttons/h3';
import Heading4 from './buttons/h4';
import ToolbarItem from './toobarItem';
import Underline from './buttons/underline';
import Stroke from './buttons/stroke';
import Blockquote from './buttons/blockquote';
import CodeBlock from './buttons/codeBlock';

interface Props {
  content: string;
  changeContent: (value: string) => void;
}

const Toolbar = forwardRef<HTMLTextAreaElement, Props>(
  ({ changeContent, content }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const TOOLBAR_DATA = [
      {
        id: 1,
        icon: <Heading1 changeContent={changeContent} content={content} />,
      },
      {
        id: 2,
        icon: <Heading2 changeContent={changeContent} content={content} />,
      },
      {
        id: 3,
        icon: <Heading3 changeContent={changeContent} content={content} />,
      },
      {
        id: 4,
        icon: <Heading4 changeContent={changeContent} content={content} />,
      },
      {
        id: 5,
        icon: <Bold changeContent={changeContent} content={content} ref={ref} />,
      },
      // {
      //   id: 6,
      //   icon: <FormatColorText />,
      // },
      // {
      //   id: 7,
      //   icon: <FormatPaint />,
      // },
      {
        id: 8,
        icon: <Underline changeContent={changeContent} content={content} ref={ref} />,
      },
      {
        id: 9,
        icon: <Stroke changeContent={changeContent} content={content} ref={ref} />,
      },
      // {
      //   id: 10,
      //   icon: <FormatListBulleted />,
      // },
      // {
      //   id: 11,
      //   icon: <FormatListNumbered />,
      // },
      {
        id: 12,
        icon: <Blockquote changeContent={changeContent} content={content} />,
      },
      {
        id: 13,
        icon: <CodeBlock changeContent={changeContent} content={content} ref={ref} />,
      },
    ];

    return (
      <ul className="absolute top-0 z-10 flex h-[50px] w-full flex-row items-center border-b border-gray-300 bg-white">
        {TOOLBAR_DATA.map((item) => (
          <ToolbarItem key={item.id}>{item.icon}</ToolbarItem>
        ))}
      </ul>
    );
  },
);

Toolbar.displayName = 'Toolbar';

export default Toolbar;
