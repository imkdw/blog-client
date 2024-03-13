'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import useUser from '../../../store/use-user';
import { postSignIn } from '../../../services/auth';

export default function SignInForm() {
  const { setIsLoggedIn, setLoggedInUser } = useUser((state) => state);

  // TOOD: 기본값 제거
  const [account, setAccount] = useState({
    email: 'test@test.com',
    password: 'Test121212!@',
  });

  const { email, password } = account;
  const router = useRouter();

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
        className="border-grey-300 h-[60px] w-[50%] rounded-[10px] border pl-[15px] text-[16px] outline-none"
        type="text"
        placeholder="이메일"
        name="email"
        onChange={changeHandler}
        value={email}
      />
      <input
        className="border-grey-300 h-[60px] w-[50%] rounded-[10px] border pl-[15px] text-[16px] outline-none"
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={changeHandler}
        value={password}
      />
      <button
        type="submit"
        className={clsx('h-[50px] w-[50%] rounded-[10px] bg-[#28262b] text-[16px] font-bold text-[#e8ebed]')}
      >
        로그인
      </button>
    </form>
  );
}
