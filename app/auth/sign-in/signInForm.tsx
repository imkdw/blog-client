'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { post } from '../../../api/api';
import { SignInBody } from '../../../api/@types/request/auth/auth.interface';
import publicConfig from '../../../config/public/public.config';
import useUser from '../../../store/use-user';
import { SignInResponse } from '../../../api/@types/response/auth/auth.interface';

export default function SignInForm() {
  const { setEmail, setNickname, setProfile, setIsLoggedIn } = useUser((state) => state);

  // TOOD: 기본값 제거
  const [account, setAccount] = useState({
    email: 'imkdw@kakao.com',
    password: 'Test121212!@',
  });
  const { email, password } = account;
  const router = useRouter();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: 유효성검증 추가

    const response = await post<SignInBody, SignInResponse>(publicConfig.auth.signIn, {
      email,
      password,
    });

    if (response.data.accessToken) {
      setEmail(response.data.email);
      setNickname(response.data.nickname);
      setProfile(response.data.profile);
      setIsLoggedIn(true);
      localStorage.setItem('accessToken', response.data.accessToken);
      router.back();
    }
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
