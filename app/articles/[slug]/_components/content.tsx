interface Props {
  title: string;
  summary: string;
  content: string;
}

export default function ArticleDetailContent({ title, summary, content }: Props) {
  // . 을 기준으로 줄바꿈 처리
  const summaryArr = summary.split('.');

  return (
    <div className="flex flex-col gap-[20px]">
      <h2 className="text-center text-[32px] font-bold">{title}</h2>
      <div className="flex flex-col">
        {summaryArr.map((data) => (
          <p className="text-center text-[20px] font-medium text-gray-400" key={data}>
            {data}
          </p>
        ))}
      </div>
      <p>{content}</p>
    </div>
  );
}
