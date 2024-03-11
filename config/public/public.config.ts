const PUBLIC_CONFIG = {
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
};

export default PUBLIC_CONFIG;
