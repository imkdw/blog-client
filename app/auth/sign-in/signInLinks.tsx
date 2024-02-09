import Link from 'next/link';

export default function SignInLinks() {
  return (
    <ul className="flex h-[50px] w-[50%] flex-row items-center justify-center">
      <li className="border-grey-300 flex w-[30%] items-center justify-center border-r text-[#505454]">
        <Link href="/auth/find-id" className="text-[16px]">
          아이디 찾기
        </Link>
      </li>
      <li className="border-grey-300 flex w-[30%] items-center justify-center border-r text-[#505454]">
        <Link href="/auth/find-password" className="text-[16px]">
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