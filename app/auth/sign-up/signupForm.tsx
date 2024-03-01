'use client';

import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import useUser from '../../../store/use-user';
import { post } from '../../../api/api';
import { SignUpBody } from '../../../api/@types/request/auth/auth.interface';
import { SignInResponse } from '../../../api/@types/response/auth/auth.interface';
import publicConfig from '../../../config/public/public.config';

export default function SignUpForm() {
  const { setEmail, setNickname, setProfile, setIsLoggedIn } = useUser((state) => state);

  const [account, setAccount] = useState({
    email: '',
    password: '',
    rePassword: '',
    nickname: '',
  });
  const { email, nickname, password, rePassword } = account;

  const router = useRouter();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await post<SignUpBody, SignInResponse>(publicConfig.auth.signUp, {
      email,
      password,
      nickname,
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
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full flex-col items-center justify-center gap-[30px]">
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center justify-between rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="text"
          placeholder="이메일"
          name="email"
          onChange={changeHandler}
          className="w-[85%] outline-none"
          value={email}
        />
        <button
          type="button"
          className="mr-[10px] h-[40px] w-[15%] rounded-[10px] bg-[#26282b] text-[14px] text-[#e8ebed]"
        >
          인증하기
        </button>
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={changeHandler}
          className="w-[85%] outline-none"
          value={password}
        />
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="rePassword"
          onChange={changeHandler}
          className="w-[85%] outline-none"
          value={rePassword}
        />
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center justify-between rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          onChange={changeHandler}
          className="w-[85%] outline-none"
          value={nickname}
        />
        <button
          type="button"
          className="mr-[10px] h-[40px] w-[15%] rounded-[10px] bg-[#26282b] text-[14px] text-[#e8ebed]"
        >
          중복확인
        </button>
      </div>
      <button
        type="submit"
        className={clsx('h-[50px] w-[50%] rounded-[10px] bg-[#28262b] text-[16px] font-bold text-[#e8ebed]')}
      >
        가입하기
      </button>
    </form>
  );
}
