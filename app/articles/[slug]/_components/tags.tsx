interface Props {
  createdAt: string;
  tags: string[];
}

export default function ArticleTags({ createdAt, tags }: Props) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[18px] text-gray-500">작성일 : {createdAt}</p>
      <ul className="flex flex-row gap-[10px]">
        {tags.map((tag) => (
          <li className="rounded bg-gray-300 p-1 text-[16px] font-semibold">{tag}</li>
        ))}
      </ul>
    </div>
  );
}
