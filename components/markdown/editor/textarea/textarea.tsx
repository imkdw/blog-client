import { ChangeEvent, ClipboardEvent, ForwardedRef, forwardRef } from 'react';
import { getPresignedUrl } from '../../../../services/s3.service';
import { generateUUID } from '../../utils/uuid.util';

interface Props {
  content: string;
  changeContent: (value: string) => void;
  setImage: (image: string) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ content, changeContent, setImage }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      changeContent(event.target.value);
    };

    const pasteHandler = async (event: ClipboardEvent<HTMLTextAreaElement>) => {
      const PRESIGNED_URL = process.env.NEXT_PUBLIC_PREGISNED_URL ?? '';
      if (!PRESIGNED_URL) {
        // eslint-disable-next-line no-alert
        window.alert('이미지 업로드 실패');
        return;
      }

      const file = event.clipboardData.items[0].getAsFile();
      if (!file || !file.type.includes('image')) {
        return;
      }

      const fileName = generateUUID();
      const extension = file?.name.split('.').pop();
      const fullFileName = `${fileName}.${extension}`;

      try {
        const getPresignedUrlResponse = await getPresignedUrl(fileName, extension || '');
        await fetch(getPresignedUrlResponse.presignedUrl, {
          method: 'PUT',
          body: file,
        });

        if (content.length) {
          changeContent(`${content}\n![](${PRESIGNED_URL}/${fullFileName})`);
        } else {
          changeContent(`![](${PRESIGNED_URL}/${fullFileName})`);
        }

        setImage(fullFileName);
      } catch {
        // eslint-disable-next-line no-alert
        window.alert('이미지 업로드 실패');
      }
    };

    return (
      <textarea
        className="h-full w-1/2 resize-none border-r border-gray-300 p-2 outline-none"
        value={content}
        onChange={changeHandler}
        ref={ref}
        onPaste={pasteHandler}
      />
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
