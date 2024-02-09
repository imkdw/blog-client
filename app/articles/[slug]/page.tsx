'use client';

import { useEffect } from 'react';
import { getArticleDetail } from '../../../actions/article';
import ArticleDetailContent from './_components/content';
import ArticleDetailThumbnail from './_components/thumbnail';
import ArticleTags from './_components/tags';
import ArticleButtons from './_components/buttons';
import ArticleList from '../../../components/Articles/articleList';
import ArticleComments from './_components/comments';
import { IArticle } from '../../../@types/article/Article';
import ArticleCommentForm from './_components/commentForm';
import { useArticle } from '../../../store/use-article';

interface Props {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params: { slug } }: Props) {
  const articleId = slug;
  const articleDetail = getArticleDetail(articleId);
  const article: IArticle = { ...articleDetail };
  const { setCurrentArticleId } = useArticle((state) => state);

  const recommendArticles = Array(3)
    .fill(0)
    .map((_, i) => ({
      ...getArticleDetail(i.toString()),
    }));

  // 게시글 상세페이지 접속시 스크롤을 맨 위로 올림
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentArticleId(articleId);

    return () => {
      // 페이지를 이탈할때 null로 초기화
      setCurrentArticleId(null);
    };
  }, [articleId, setCurrentArticleId]);

  return (
    <main className="flex flex-col gap-10 pt-10">
      <ArticleDetailThumbnail />
      <ArticleDetailContent title={article.title} summary={article.summary} content={article.content} />
      <ArticleTags createdAt={article.createdAt} tags={article.tags} />
      <ArticleButtons commentCount={article.commentCount} likeCount={article.likeCount} isLike />
      <ArticleComments comments={article.comments} />
      <ArticleCommentForm />
      <ArticleList articles={recommendArticles} type="recommend" />
    </main>
  );
}
