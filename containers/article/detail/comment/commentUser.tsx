import Image from 'next/image';
import { convertDate } from '../../../../utils/date';

interface Props {
  nickname: string;
  profile: string;
  createdAt: string;
}
export default function CommentUser({ nickname, profile, createdAt }: Props) {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      <Image
        src={profile}
        alt={`User of ${nickname}'s profile image`}
        title={`User of ${nickname}'s profile image`}
        width={50}
        height={50}
        className="rounded-full object-cover"
      />
      <div className="flex h-full flex-col">
        <p className="h-1/2">{nickname}</p>
        <p className="h-1/2 text-sm text-gray-500">{convertDate(createdAt)}</p>
      </div>
    </div>
  );
}
