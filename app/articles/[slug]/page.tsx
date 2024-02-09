'use client';

import { useEffect } from 'react';
import { Article } from '../../../@types/article/Article';
import { getArticleDetail } from '../../../actions/article';
import ArticleDetailContent from './_components/content';
import ArticleDetailThumbnail from './_components/thumbnail';
import ArticleTags from './_components/tags';
import ArticleButtons from './_components/buttons';

interface Props {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params: { slug } }: Props) {
  const articleId = slug;
  const articleDetail = getArticleDetail(articleId);
  const article: Article = { ...articleDetail };

  // 게시글 상세페이지 접속시 스크롤을 맨 위로 올림
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col gap-[50px]">
      <ArticleDetailThumbnail />
      <ArticleDetailContent title={article.title} summary={article.summary} content={article.content} />
      <ArticleTags createdAt={article.createdAt} tags={article.tags} />
      <ArticleButtons commentCount={article.commentCount} likeCount={article.likeCount} isLike />
      {/* 댓글창 */}
      {/* 댓글 입력창 */}
      {/* 추천 게시글 */}
    </main>
  );
}
