'use client';

import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import SignInForm from './signInForm';
import SignInLinks from './signInLinks';
import SnsSignIn from './snsSignIn';

export default function SignInPage() {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isValidAccount, setIsValidAccount] = useState(false);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-[30px]">
      <SignInForm>
        <input
          className="border-grey-300 h-[60px] w-[50%] rounded-[10px] border pl-[15px] text-[16px] outline-none"
          type="text"
          placeholder="이메일"
          name="email"
          onChange={changeHandler}
        />
        <input
          className="border-grey-300 h-[60px] w-[50%] rounded-[10px] border pl-[15px] text-[16px] outline-none"
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={changeHandler}
        />
        <button
          type="submit"
          className={clsx(
            'h-[50px] w-[50%] rounded-[10px] text-[16px] font-bold text-[#e8ebed]',
            isValidAccount ? 'bg-[#28262b]' : 'bg-[#c9cdd2]',
          )}
        >
          로그인
        </button>
      </SignInForm>
      <SignInLinks />
      <SnsSignIn />
    </div>
  );
}
