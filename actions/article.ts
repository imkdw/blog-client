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
    title: '테스트용 게시글 입니다.',
    thumbnail: 'http://via.placeholder.com/640x480',
    content: '테스트용 게시글 입니다.',
    commentCount: 1,
    likeCount: 2,
    summary: '테스트용 게시글 입니다.',
    tags: ['테스트1', '테스트2', '테스트3'],
    createdAt: new Intl.DateTimeFormat('ko', { dateStyle: 'short' }).format(new Date()),
    comments,
  };
}

export function temp() {}
