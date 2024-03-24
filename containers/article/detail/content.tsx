/* eslint-disable react/no-danger */
import 'react-quill/dist/quill.snow.css';

interface Props {
  title: string;
  summary: string;
  content: string;
}

export default function ArticleContent({ title, summary, content }: Props) {
  const summaryArr = summary.split('.');

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center text-[32px] font-bold">{title}</h2>
      <div className="flex flex-col">
        {summaryArr.map((data) => (
          <p className="text-center text-[20px] font-medium text-gray-400" key={data}>
            {data}
          </p>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} className="list-decimal" />
    </div>
  );
}
