import Link from 'next/link';
import { MouseEvent } from 'react';

export default function SignInLinks() {
  const clickHanlder = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다.');
  };

  return (
    <ul className="flex h-[50px] w-[50%] flex-row items-center justify-center">
      <li className="border-grey-300 flex w-[30%] items-center justify-center border-r text-[#505454]">
        <Link href="/auth/find-id" className="text-[16px]" onClick={clickHanlder}>
          아이디 찾기
        </Link>
      </li>
      <li className="border-grey-300 flex w-[30%] items-center justify-center border-r text-[#505454]">
        <Link href="/auth/find-password" className="text-[16px]" onClick={clickHanlder}>
          비밀번호 찾기
        </Link>
      </li>
      <li className="flex w-[30%] items-center justify-center text-[#505454]">
        <Link href="/auth/sign-up" className="text-[16px]">
          회원가입
        </Link>
      </li>
    </ul>
  );
}
