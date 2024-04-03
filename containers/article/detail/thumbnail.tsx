import Image from 'next/image';
import { headers } from 'next/headers';
import clsx from 'clsx';

import { isMobile } from '../../../utils/is-mobile';

interface Props {
  image: string;
  title: string;
}
export default function ArticleThumbnail({ image, title }: Props) {
  const isMobileView = isMobile(headers());

  return (
    <div className={clsx('relative flex w-[80%] justify-center', isMobileView ? 'h-[200px]' : 'h-[500px]')}>
      {image && (
        <Image
          src={image}
          alt={`Article of ${title}'s thumbnail`}
          title={`Article of ${title}'s thumbnail`}
          fill
          className="rounded-xl shadow-lg"
        />
      )}
    </div>
  );
}
