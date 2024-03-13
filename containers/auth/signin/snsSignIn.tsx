'use client';

import { GitHub } from '@mui/icons-material';
import Image from 'next/image';

import PUBLIC_CONFIG from '../../../config/public/public.config';

export default function SnsSignIn() {
  const CLIENT_URL = PUBLIC_CONFIG.url.client;

  const googleHandler = () => {
    const oAuthEndpoint = 'https://accounts.google.com/o/oauth2/auth';
    const googleClientId = PUBLIC_CONFIG.oauth.google.clientId;
    const redirectUrl = `${CLIENT_URL}/auth/oauth/google`;
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    window.location.href = `${oAuthEndpoint}?client_id=${googleClientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope}`;
  };

  const kakaoHandler = () => {
    const oAuthEndpoint = 'https://kauth.kakao.com/oauth/authorize';
    const kakaoClientId = PUBLIC_CONFIG.oauth.kakao.clientId;
    const redirectUrl = `${CLIENT_URL}/auth/oauth/kakao`;
    const parameter = `?client_id=${kakaoClientId}&redirect_uri=${redirectUrl}&response_type=code`;

    window.location.href = oAuthEndpoint + parameter;
  };

  const githubHandler = () => {
    const oAuthEndpoint = 'https://github.com/login/oauth/authorize';
    const githubClientId = PUBLIC_CONFIG.oauth.github.clientId;
    const redirectUrl = `${CLIENT_URL}/auth/oauth/github`;
    const parameter = `?client_id=${githubClientId}&redirect_uri=${redirectUrl}&scope=user`;

    window.location.href = oAuthEndpoint + parameter;
  };

  return (
    <ul className="relative flex h-[90px] w-[50%] flex-row items-end justify-center gap-[30px] border-t border-gray-300">
      <p className="absolute top-[-13px] w-[40%] bg-white text-center text-[15px] text-gray-400">SNS 계정으로 로그인</p>
      <li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
        <button onClick={googleHandler} type="button" aria-label="google login button">
          <Image src="/images/icon/google.png" alt="facebook" width="35" height="35" />
        </button>
      </li>
      <li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
        <button onClick={githubHandler} type="button" aria-label="google login button">
          <GitHub sx={{ width: '35px', height: '35px' }} />
        </button>
      </li>
      <li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
        <button onClick={kakaoHandler} type="button" aria-label="google login button">
          <Image
            src="/images/icon/kakaotalk.png"
            alt="facebook"
            width="35"
            height="35"
            style={{ borderRadius: '5px' }}
          />
        </button>
      </li>
    </ul>
  );
}