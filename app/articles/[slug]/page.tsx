'use client';

import { useEffect, useState } from 'react';
import { useArticle } from '../../../store/use-article';
import { GetArticleDetailResponse } from '../../../types/api/article';
import { getArticleDetail, getArticleTags } from '../../../services/article';
import ArticleThumbnail from '../../../containers/article/detail/thumbnail';
import ArticleContent from '../../../containers/article/detail/content';
import ArticleTags from '../../../containers/article/detail/tags';
import { ITag } from '../../../types/tag';
import ArticleButtons from '../../../containers/article/detail/buttons';
import CommentWriteForm from '../../../containers/article/detail/comment/writeForm';
import Comments from '../../../containers/article/detail/comment/comments';

interface Props {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params: { slug } }: Props) {
  const articleId = slug;
  const { setCurrentArticleId } = useArticle((state) => state);

  const [articleDetail, setArticleDetail] = useState<GetArticleDetailResponse | null>(null);
  const [articleTags, setArticleTags] = useState<ITag[]>([]);
  // const [articleComments, setArticleComments] = useState<GetArticleCommentsResponseData[] | null>(null);

  // 게시글 상세페이지 접속시 스크롤을 맨 위로 올림
  useEffect(() => {
    const fetchArticleDetail = async () => {
      const response = await getArticleDetail(articleId);
      setArticleDetail(response);
    };

    const fetchArticleTags = async () => {
      const response = await getArticleTags(articleId);
      setArticleTags(response.tags);
    };

    window.scrollTo(0, 0);
    setCurrentArticleId(articleId);

    fetchArticleDetail();
    fetchArticleTags();

    return () => {
      // 페이지를 이탈할때 null로 초기화
      setCurrentArticleId(null);
    };
  }, [articleId, setCurrentArticleId]);

  return (
    <main className="flex flex-col gap-10 pt-10">
      {articleDetail && articleTags && (
        <>
          <ArticleThumbnail image={articleDetail.thumbnail} />
          <ArticleContent title={articleDetail.title} summary={articleDetail.summary} content={articleDetail.content} />
          <ArticleTags createAt={articleDetail.createdAt} tags={articleTags} />
          {/* TODO: isLike 처리하기 */}
          <ArticleButtons commentCount={articleDetail.commentCount} likeCount={articleDetail.likeCount} isLike />
        </>
      )}
      <Comments articleId={articleId} />
      <CommentWriteForm articleId={articleId} />
      {/* {articleDetail && articleTags && articleComments && (
        <>
          <ArticleComments comments={articleComments} />
          <ArticleCommentForm articleId={articleId} />
          <ArticleList articles={[]} type="recommend" />
        </>
      )} */}
    </main>
  );
}
