import { GitHub, MailOutline } from '@mui/icons-material';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5">
      <h1 className="text-8xl">404</h1>
      <p className="text-2xl">페이지를 찾을수 없습니다.</p>
      <p className="text-2xl">해당 증상이 계속되면 아래 연락처로 문의주시면 감사하겠습니다.</p>
      <div className="flex flex-col gap-3">
        <Link
          href="https://github.com/imkdw/blog/issues"
          target="_blank"
          className="flex items-center justify-center gap-3 rounded border border-gray-300 p-2 hover:bg-gray-200"
        >
          <GitHub sx={{ width: '35px', height: '35px' }} />
          <p>Github Issue</p>
        </Link>
        <Link
          href="mailto:imkdw@kakao.com"
          className="flex items-center justify-center gap-3 rounded border border-gray-300 p-2 hover:bg-gray-200"
        >
          <MailOutline sx={{ width: '35px', height: '35px' }} />
          <p>Send Email</p>
        </Link>
      </div>
    </div>
  );
}
