import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';
import { generateUUID } from '../../../components/markdown/utils/uuid.util';
import { getPresignedUrl } from '../../../services/s3.service';

interface Props {
  changeHandler: (thumbnail: string) => void;
}

export default function ArticleThumbnailSelector({ changeHandler }: Props) {
  const [image, setImage] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    inputRef.current?.click();
  };

  const imageUploadHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const PRESIGNED_URL = process.env.NEXT_PUBLIC_PREGISNED_URL ?? '';

    const uploadedImage = event.target.files?.[0];
    const fileName = generateUUID();
    const extension = uploadedImage?.name.split('.').pop();
    const fullFileName = `${fileName}.${extension}`;

    try {
      const getPresignedUrlResponse = await getPresignedUrl(fileName, extension || '');
      await fetch(getPresignedUrlResponse.presignedUrl, {
        method: 'PUT',
        body: uploadedImage,
      });

      const imageUrl = `${PRESIGNED_URL}/${fullFileName}`;
      setImage(imageUrl);
      changeHandler(fullFileName);
    } catch {
      // eslint-disable-next-line no-alert
      window.alert('이미지 업로드 실패');
    }
  };

  return (
    <div className="relative h-[200px] w-full">
      {image.length ? (
        <button
          className="relative h-full w-[30%] border border-gray-300 text-gray-400"
          type="button"
          onClick={clickHandler}
        >
          <Image src={image} alt="thumbnail" fill />
        </button>
      ) : (
        <button className="h-full w-[30%] border border-gray-300 text-gray-400" type="button" onClick={clickHandler}>
          썸네일을 선택해주세요
        </button>
      )}

      <input type="file" accept="image/*" hidden onChange={imageUploadHandler} ref={inputRef} />
    </div>
  );
}
