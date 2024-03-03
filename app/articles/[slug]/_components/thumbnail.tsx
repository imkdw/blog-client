import Image from 'next/image';

interface Props {
  thumbnail: string;
}
export default function ArticleDetailThumbnail({ thumbnail }: Props) {
  console.log('thumbnail', thumbnail);
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <Image src={thumbnail} alt="thumbnail" width="800" height="450" />
    </div>
  );
}
