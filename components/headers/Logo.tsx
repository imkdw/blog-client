import Image from 'next/image';
import { headers } from 'next/headers';
import Link from 'next/link';
import clsx from 'clsx';

import { isMobile } from '../../utils/is-mobile';

export default function HeaderLogo() {
  const isMobileView = isMobile(headers());

  const width = isMobileView ? 100 : 120;
  const height = isMobileView ? 120 : 150;

  return (
    <div className={clsx('flex h-full items-center justify-center', isMobileView ? 'flex-1' : 'w-[20%]')}>
      <Link href="/">
        <Image
          src="/images/logo.svg"
          alt="IMKDW DEV's Logo Image"
          title="IMKDW DEV's Logo Image"
          width={width}
          height={height}
        />
      </Link>
    </div>
  );
}
