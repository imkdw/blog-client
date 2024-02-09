import { Article } from '../@types/article/Article';

export function getArticleDetail(articleId: string): Article {
  return {
    id: parseInt(articleId, 10),
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
  };
}

export function temp() {}
