'use client';

import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import useUser from '../../../store/use-user';
import { postSendEmailVerificationCode, postSignUp, postVerifyCodeValidate } from '../../../services/auth';
import { getCheckDuplicate } from '../../../services/user';
import { CheckDuplicateType } from '../../../types/enum/user';

export default function SignUpForm() {
  const router = useRouter();

  const { setLoggedInUser, setIsLoggedIn } = useUser((state) => state);
  const [isSendVerifyCode, setIsSendVerifyCode] = useState(false);
  const [emailVerificationId, setEmailVerificationId] = useState(0);
  const [verificationCode, setVerificationCode] = useState('');

  // TODO: 기본값 제거
  const [account, setAccount] = useState({
    email: 'admin@imkdw.dev',
    password: 'Test121212!@',
    rePassword: 'Test121212!@',
    nickname: 'testName',
  });
  const { email, nickname, password, rePassword } = account;

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await postSignUp({ email, password, nickname });

    if (response.accessToken) {
      setLoggedInUser({
        email: response.email,
        nickname: response.nickname,
        profile: response.profile,
        role: response.role,
      });
      setIsLoggedIn(true);
      router.back();
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [event.target.name]: event.target.value,
    });
  };

  const changeVerificationCodeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value);
  };

  // 이메일 인증코드 발송
  const sendVerifyCodeHandler = async () => {
    const duplicateCheckResponse = await getCheckDuplicate(CheckDuplicateType.EMAIL, email);
    if (duplicateCheckResponse.isDuplicate) {
      // eslint-disable-next-line no-alert
      window.alert('이미 사용중인 이메일입니다.');
      return;
    }

    const sendEmailVerificationCodeResponse = await postSendEmailVerificationCode({ email });
    if (sendEmailVerificationCodeResponse.verificationId) {
      // eslint-disable-next-line no-alert
      window.alert('인증코드가 발송되었습니다.');
      setEmailVerificationId(sendEmailVerificationCodeResponse.verificationId);
      setIsSendVerifyCode(true);
    }
  };

  // 이메일 인증코드 검증
  const verifyCodeValidateHandler = async () => {
    const response = await postVerifyCodeValidate({ verificationId: emailVerificationId, code: verificationCode });

    if (response.isVerified) {
      // TODO: 모달로 변경
      // eslint-disable-next-line no-alert
      window.alert('인증성공');
      setIsSendVerifyCode(false);
    } else {
      // TODO: 모달로 변경
      // eslint-disable-next-line no-alert
      window.alert('인증번호가 일치하지 않습니다');
    }
  };

  // 닉네임 중복체크
  const checkDuplicateNickname = async () => {
    const response = await getCheckDuplicate(CheckDuplicateType.NICKNAME, nickname);
    if (response.isDuplicate) {
      // eslint-disable-next-line no-alert
      window.alert('이미 사용중인 닉네임입니다.');
    } else {
      // eslint-disable-next-line no-alert
      window.alert('사용가능한 닉네임입니다.');
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex w-full flex-col items-center justify-center gap-[30px]">
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center justify-between rounded-[10px] border pl-[15px] text-sm">
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
          onClick={sendVerifyCodeHandler}
        >
          {isSendVerifyCode ? '재발송' : '인증하기'}
        </button>
      </div>
      {isSendVerifyCode && (
        <div className="border-grey-300 flex h-[60px] w-[50%] items-center rounded-[10px] border pl-[15px] text-sm">
          <input
            type="text"
            placeholder="인증코드"
            onChange={changeVerificationCodeHandler}
            className="w-[85%] outline-none"
            value={verificationCode}
          />
          <button
            type="button"
            className="mr-[10px] h-[40px] w-[15%] rounded-[10px] bg-[#26282b] text-[14px] text-[#e8ebed]"
            onClick={verifyCodeValidateHandler}
          >
            확인하기
          </button>
        </div>
      )}
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center rounded-[10px] border pl-[15px] text-sm">
        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={changeHandler}
          className="w-[85%] outline-none"
          value={password}
        />
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center rounded-[10px] border pl-[15px] text-sm">
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="rePassword"
          onChange={changeHandler}
          className="w-[85%] outline-none"
          value={rePassword}
        />
      </div>
      <div className="border-grey-300 flex h-[60px] w-[50%] items-center justify-between rounded-[10px] border pl-[15px] text-sm">
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
          onClick={checkDuplicateNickname}
        >
          중복확인
        </button>
      </div>
      <button
        type="submit"
        className={clsx('h-[50px] w-[50%] rounded-[10px] bg-[#28262b] text-sm font-bold text-[#e8ebed]')}
      >
        가입하기
      </button>
    </form>
  );
}
