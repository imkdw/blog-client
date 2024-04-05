import 'react-quill/dist/quill.snow.css';
import { headers } from 'next/headers';
import clsx from 'clsx';

import MarkdownViewer from '../../../components/markdown/viewer/viewer';
import ArticleManageButtons from './manageButtons';
import { isMobile } from '../../../utils/is-mobile';

interface Props {
  articleId: string;
  title: string;
  summary: string;
  content: string;
}

export default function ArticleContent({ title, summary, content, articleId }: Props) {
  const summaryArr = summary.split('.');

  const isMobileView = isMobile(headers());

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <h2 className={clsx('break-words text-center font-bold', isMobileView ? 'text-2xl' : 'text-4xl')}>{title}</h2>
      <div className="flex flex-col">
        {summaryArr.map((data) => (
          <p
            className={clsx('break-words text-center font-medium text-gray-400', isMobileView ? 'text-lg' : 'text-2xl')}
            key={data}
          >
            {data}
          </p>
        ))}
      </div>
      <ArticleManageButtons articleId={articleId} />
      <MarkdownViewer content={content} />
    </div>
  );
}
