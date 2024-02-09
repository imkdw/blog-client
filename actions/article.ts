import { IArticle, IArticleComments } from '../@types/article/Article';

export function getArticleDetail(articleId: string): IArticle {
  const comments: IArticleComments[] = Array(3)
    .fill(0)
    .map(
      (_, i): IArticleComments => ({
        id: i,
        content: '댓글 내용입니다.',
        createdAt: new Intl.DateTimeFormat('ko', { dateStyle: 'short' }).format(new Date()),
        user: {
          profile: 'http://via.placeholder.com/50x50',
          nickname: '닉네임',
          isOwner: false,
        },
        replies: Array(2)
          .fill(0)
          // eslint-disable-next-line @typescript-eslint/no-shadow
          .map((_, j) => ({
            id: j,
            content: '대댓글 내용입니다.',
            createdAt: new Intl.DateTimeFormat('ko', { dateStyle: 'short' }).format(new Date()),
            user: {
              profile: 'http://via.placeholder.com/50x50',
              nickname: '닉네임',
              isOwner: false,
            },
          })),
      }),
    );

  comments[1].replies = [];

  return {
    id: articleId,
    title: '타입스크립트에서 SOLID 원칙에 의거한 OOP 설계하기',
    thumbnail: 'http://via.placeholder.com/640x480',
    content:
      '타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.타입스크립트 OOP 설계 내용입니다.',
    commentCount: 1,
    likeCount: 2,
    summary:
      '타입스크립트에서 SOLID 원칙에 의거한 객체지향 설계에 대한 글 입니다. 반복하지 않고 클린한 코드를 만드는 방법에 대해 소개합니다.',
    tags: ['타입스크립트', '객체지향', 'SOLID'],
    createdAt: new Intl.DateTimeFormat('ko', { dateStyle: 'short' }).format(new Date()),
    comments,
  };
}

export function temp() {}
