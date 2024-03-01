const publicConfig = {
  auth: {
    signIn: '/v1/auth/common/sign-in',
    signUp: '/v1/auth/common/sign-up',
  },
  oauth: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
    },
    kakao: {
      clientId: process.env.NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID,
    },
    github: {
      clientId: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    },
  },
  url: {
    client: process.env.NEXT_PUBLIC_CLIENT_URL,
    server: process.env.NEXT_PUBLIC_SERVER_URL,
  },
  article: {
    create: '/v1/articles',
  },
};

export default publicConfig;
