'use client';

import Link from 'next/link';
import { GitHub } from '@mui/icons-material';
import Image from 'next/image';
import publicConfig from '../../../config/public/public.config';

export default function SnsSignIn() {
  const CLIENT_URL = publicConfig.url.client;

  const googleHandler = () => {
    const oAuthEndpoint = 'https://accounts.google.com/o/oauth2/auth';
    const { clientId } = publicConfig.oauth.google;
    const redirectUrl = `${CLIENT_URL}/auth/oauth/google`;
    const responseType = 'token';
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    window.location.href = `${oAuthEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope}`;
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
        <Link href="https://github.com/">
          <GitHub sx={{ width: '35px', height: '35px' }} />
        </Link>
      </li>
      <li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
        <Link href="https://www.kakaocorp.com/page/">
          <Image
            src="/images/icon/kakaotalk.png"
            alt="facebook"
            width="35"
            height="35"
            style={{ borderRadius: '5px' }}
          />
        </Link>
      </li>
    </ul>
  );
}
