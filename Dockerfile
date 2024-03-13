FROM node:20-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

ARG NEXT_PUBLIC_SERVER_URL
ARG NEXT_PUBLIC_CLIENT_URL
ARG NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID
ARG NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID
ARG NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID

ENV NODE_ENV=production
ENV NEXT_PUBLIC_SERVER_URL=${NEXT_PUBLIC_SERVER_URL}
ENV NEXT_PUBLIC_CLIENT_URL=${NEXT_PUBLIC_CLIENT_URL}
ENV NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}
ENV NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID=${NEXT_PUBLIC_KAKAO_OAUTH_CLIENT_ID}
ENV NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID=${NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID}

RUN npm install -g pnpm

RUN pnpm i -P

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
