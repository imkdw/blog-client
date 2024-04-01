import 'react-quill/dist/quill.snow.css';
import MarkdownViewer from '../../../components/markdown/viewer/viewer';
import ArticleManageButtons from './manageButtons';

interface Props {
  articleId: string;
  title: string;
  summary: string;
  content: string;
}

export default function ArticleContent({ title, summary, content, articleId }: Props) {
  const summaryArr = summary.split('.');

  return (
    <div className="flex w-full flex-col gap-5">
      <h2 className="break-words text-center text-[32px] font-bold">{title}</h2>
      <div className="flex flex-col">
        {summaryArr.map((data) => (
          <p className="break-words text-center text-[24px] font-medium text-gray-400" key={data}>
            {data}
          </p>
        ))}
      </div>
      <ArticleManageButtons articleId={articleId} />
      <MarkdownViewer content={content} />
    </div>
  );
}
