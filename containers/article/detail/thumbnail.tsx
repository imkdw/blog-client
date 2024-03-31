import Image from 'next/image';

interface Props {
  image: string;
  title: string;
}
export default function ArticleThumbnail({ image, title }: Props) {
  return (
    <div className="relative flex h-[500px] w-[80%] justify-center">
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
