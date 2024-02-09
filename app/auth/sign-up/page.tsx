'use client';

import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';

import SignUpForm from './signupForm';

export default function SignUpPage() {
  const [account, setAccount] = useState({
    email: '',
    password: '',
    rePassword: '',
    nickname: '',
  });

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isValidAccount, setIsValidAccount] = useState(false);

  return (
    <SignUpForm>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center justify-between rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="text"
          placeholder="이메일"
          name="email"
          onChange={changeHandler}
          className="w-[85%] outline-none"
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
        />
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="rePassword"
          onChange={changeHandler}
          className="w-[85%] outline-none"
        />
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center justify-between rounded-[10px] border pl-[15px] text-[16px]">
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          onChange={changeHandler}
          className="w-[85%] outline-none"
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
        className={clsx(
          'h-[50px] w-[50%] rounded-[10px] text-[16px] font-bold text-[#e8ebed]',
          isValidAccount ? 'bg-[#28262b]' : 'bg-[#c9cdd2]',
        )}
      >
        가입하기
      </button>
    </SignUpForm>
  );
}
