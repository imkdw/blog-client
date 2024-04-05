import { headers } from 'next/headers';
import clsx from 'clsx';

import { ITag } from '../../../types/tag';
import { convertDate } from '../../../utils/date';
import { isMobile } from '../../../utils/is-mobile';

interface Props {
  createAt: string;
  tags: ITag[];
}

export default function ArticleTags({ createAt, tags }: Props) {
  const isMobileView = isMobile(headers());

  return (
    <div className={clsx('flex flex-col gap-[10px]', isMobileView ? 'w-[95%]' : 'w-full')}>
      <p className={clsx('text-gray-500', isMobileView ? 'text-sm' : 'text-lg')}>작성일 : {convertDate(createAt)}</p>
      <ul className="flex list-none flex-row gap-[10px]">
        {tags.map((tag) => (
          <li key={tag.id} className="rounded bg-gray-300 p-1 pl-2 pr-2 text-sm font-semibold">
            #{tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
