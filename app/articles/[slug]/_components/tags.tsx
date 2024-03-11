interface Props {
  createAt: string;
  tags: any[];
}

export default function ArticleTags({ createAt, tags }: Props) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[18px] text-gray-500">작성일 : {createAt}</p>
      <ul className="flex flex-row gap-[10px]">
        {tags.map((tag) => (
          <li key={tag.id} className="rounded bg-gray-300 p-1 text-[16px] font-semibold">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
