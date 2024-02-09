import Image from 'next/image';

export default function ArticleDetailThumbnail() {
  return (
    <div className="flex h-[450px] w-full items-center justify-center">
      <Image src="http://via.placeholder.com/800x450" alt="thumbnail" width="800" height="450" />
    </div>
  );
}
