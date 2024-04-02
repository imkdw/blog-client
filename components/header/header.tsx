import { headers } from 'next/headers';
import clsx from 'clsx';

import HeaderButtons from './Buttons';
import HeaderLogo from './Logo';
import { isMobile } from '../../utils/is-mobile';
import HeaderNav from './headerNav';
import HeaderMenu from './headerMenu';

export default function Header() {
  const isMobileView = isMobile(headers());

  return (
    <header
      className={clsx(
        'z-10 flex w-full max-w-[1400px] items-center bg-white',
        isMobileView ? 'relative h-[80px] border-b border-gray-300' : 'h-[120px]',
      )}
    >
      <div className="flex h-full w-full flex-row items-center justify-center">
        <HeaderLogo />
        {!isMobileView ? (
          <>
            <HeaderNav />
            <HeaderButtons />
          </>
        ) : (
          <HeaderMenu />
        )}
      </div>
    </header>
  );
}
