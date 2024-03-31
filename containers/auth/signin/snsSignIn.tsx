'use client';

import { GitHub } from '@mui/icons-material';
import Image from 'next/image';

export default function SnsSignIn() {
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
    <ul className="relative flex h-[90px] w-[50%] flex-row items-end justify-center gap-[30px] border-t border-gray-300">
      <p className="absolute top-[-13px] w-[40%] bg-white text-center text-[15px] text-gray-400">SNS 계정으로 로그인</p>
      <li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
        <button onClick={googleHandler} type="button" aria-label="google login button">
          <Image
            src="/images/icon/google.png"
            alt="Google Logo Image"
            title="Google Logo Image"
            width="35"
            height="35"
          />
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
            alt="Kakao Logo Image"
            title="Kakao Logo Image"
            width="35"
            height="35"
            style={{ borderRadius: '5px' }}
          />
        </button>
      </li>
    </ul>
  );
}
