'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import useUser from '../../../store/use-user';
import { postSignIn } from '../../../services/auth';
import { MOBILE_WIDTH } from '../../../constants/mobile.constant';

export default function SignInForm() {
  const [isMobile, setIsMobile] = useState(false);
  const { setIsLoggedIn, setLoggedInUser } = useUser((state) => state);

  const [account, setAccount] = useState({ email: '', password: '' });
  const { email, password } = account;
  const router = useRouter();

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await postSignIn({ email, password });

    setIsLoggedIn(true);
    setLoggedInUser({
      email: response.email,
      nickname: response.nickname,
      profile: response.profile,
      role: response.role,
    });

    localStorage.setItem('accessToken', response.accessToken);
    router.back();
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full flex-col items-center justify-center gap-[30px]">
      <input
        className={clsx(
          'border-grey-300 h-[60px] rounded-[10px] border pl-[15px] text-sm outline-none',
          isMobile ? 'w-[80%]' : 'w-[50%]',
        )}
        type="text"
        placeholder="이메일"
        name="email"
        onChange={changeHandler}
        value={email}
      />
      <input
        className={clsx(
          'border-grey-300 h-[60px] rounded-[10px] border pl-[15px] text-sm outline-none',
          isMobile ? 'w-[80%]' : 'w-[50%]',
        )}
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={changeHandler}
        value={password}
      />
      <button
        type="submit"
        className={clsx(
          'h-[50px] rounded-[10px] bg-[#28262b] text-sm font-bold text-[#e8ebed]',
          isMobile ? 'w-[80%]' : 'w-[50%]',
        )}
      >
        로그인
      </button>
    </form>
  );
}
