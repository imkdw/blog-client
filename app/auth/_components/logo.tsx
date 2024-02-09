import Image from 'next/image';
import Link from 'next/link';

export default function AuthLogo() {
  return (
    <div className="flex w-full items-center justify-center">
      <Link href="/">
        <Image src="/images/logo.svg" alt="인증페이지 로고" width="200" height="100" />
      </Link>
    </div>
  );
}
