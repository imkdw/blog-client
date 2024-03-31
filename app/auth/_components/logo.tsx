import Image from 'next/image';
import Link from 'next/link';

export default function AuthLogo() {
  return (
    <div className="flex w-full items-center justify-center">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="Authenticate Page Logo"
          title="Authenticate Page Logo"
          width="200"
          height="100"
        />
      </Link>
    </div>
  );
}
