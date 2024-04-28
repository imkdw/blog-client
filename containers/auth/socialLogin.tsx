'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SocialLogin() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(match);
  }, []);

  const googleHandler = () => {
    const oAuthEndpoint = 'https://accounts.google.com/o/oauth2/auth';
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? '';
    const redirectUrl = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI ?? '';
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    window.location.href = `${oAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope}`;
  };

  const kakaoHandler = () => {
    const oAuthEndpoint = 'https://kauth.kakao.com/oauth/authorize';
    const clientId = process.env.NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID ?? '';
    const redirectUrl = process.env.NEXT_PUBLIC_KAKAO_OAUTH_REDIRECT_URI ?? '';
    const parameter = `?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`;

    window.location.href = oAuthEndpoint + parameter;
  };

  const githubHandler = () => {
    const oAuthEndpoint = 'https://github.com/login/oauth/authorize';
    const clientId = process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID ?? '';
    const redirectUrl = process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI ?? '';
    const parameter = `?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=user`;

    window.location.href = oAuthEndpoint + parameter;
  };

  return (
    <ul className={clsx('40%] relative flex flex-col items-center gap-5', isMobile ? 'w-[40%]' : 'w-[30%]')}>
      <li className="flex w-full rounded-[10px] bg-black p-2">
        <button onClick={githubHandler} type="button" aria-label="Github Login Button" className="flex w-full">
          <Image
            src="/images/icon/github-mark-white.png"
            alt="Google Logo Image"
            title="Google Logo Image"
            width="35"
            height="35"
          />
          <p className="flex h-full flex-1 items-center justify-center font-bold text-white">Login With Github</p>
        </button>
      </li>
      <li className="flex w-full rounded-[10px] bg-[#DC604F] p-2">
        <button onClick={googleHandler} type="button" aria-label="Google Login Button" className="flex w-full">
          <Image
            src="/images/icon/google.svg"
            alt="Google Logo Image"
            title="Google Logo Image"
            width="35"
            height="35"
          />
          <p className="flex h-full flex-1 items-center justify-center font-bold text-white">Login With Google</p>
        </button>
      </li>

      <li className="flex w-full rounded-[10px] bg-yellow-300 p-2">
        <button onClick={kakaoHandler} type="button" aria-label="Kakao Login Button" className="flex w-full">
          <Image
            src="/images/icon/kakaotalk.png"
            alt="Kakao Logo Image"
            title="Kakao Logo Image"
            width="35"
            height="35"
            style={{ borderRadius: '5px' }}
          />
          <p className="flex h-full flex-1 items-center justify-center font-bold">Login With Kakao</p>
        </button>
      </li>
    </ul>
  );
}
