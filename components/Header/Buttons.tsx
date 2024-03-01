'use client';

import Link from 'next/link';
import { AccountCircle, Language, LightMode, DarkMode, Logout } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useUser from '../../store/use-user';

export default function HeaderButtons() {
  const { isLoggedIn, setIsLoggedIn, setEmail, setNickname, setProfile } = useUser((state) => state);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [themeMode, setThemeMode] = useState('LIGHT');

  const router = useRouter();

  const themeChangeHandler = () => {
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다');
    // const willChangeThemeMode = themeMode === 'LIGHT' ? 'DARK' : 'LIGHT';
    // setThemeMode(willChangeThemeMode);
  };

  const languageChangeHandler = () => {
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다');
  };

  const logoutHandler = async () => {
    localStorage.removeItem('accessToken');
    setEmail('');
    setNickname('');
    setProfile('');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <ul className="flow-row flex h-[40px] w-[20%] items-center justify-between">
      <li>
        {/* TODO: 설정된 테마 모드에 따라서 아이콘 분기처리 */}
        <button aria-label="다크/화이트 모드 변경" onClick={themeChangeHandler} type="button">
          {themeMode === 'LIGHT' ? <LightMode /> : <DarkMode />}
        </button>
      </li>
      <li>
        <button aria-label="언어 변경" type="button" onClick={languageChangeHandler}>
          <Language />
        </button>
      </li>
      <li>
        {/* TODO: 로그인 여부에 따라서 마이페이지 또는 로그인 페이지로 이동 분기처리 */}
        {isLoggedIn ? (
          <button onClick={logoutHandler} aria-label="logout button" type="button">
            <Logout />
          </button>
        ) : (
          <Link href="/auth/sign-in">
            <AccountCircle />
          </Link>
        )}
      </li>
    </ul>
  );
}
