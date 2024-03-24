import clsx from 'clsx';
import Image from 'next/image';

interface Props {
  image: string;
}
export default function ArticleThumbnail({ image }: Props) {
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <Image src={image} alt="thumbnail" width={800} height={450} className="rounded-[10px]" />
    </div>
  );
}
