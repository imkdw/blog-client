/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useEffect, useState } from 'react';
import ArticleDetailContent from './_components/content';
import ArticleDetailThumbnail from './_components/thumbnail';
import ArticleTags from './_components/tags';
import ArticleButtons from './_components/buttons';
import ArticleList from '../../../components/Articles/articleList';
import ArticleComments from './_components/comments';
import ArticleCommentForm from './_components/commentForm';
import { useArticle } from '../../../store/use-article';

interface Props {
  params: {
    slug: string;
  };
}

export default function ArticleDetailPage({ params: { slug } }: Props) {
  const articleId = slug;
  const { setCurrentArticleId } = useArticle((state) => state);

  // const [articleDetail, setArticleDetail] = useState<GetArticleDetailResponseData | null>(null);
  // const [articleTags, setArticleTags] = useState<GetArticleTagsResponseData[] | null>(null);
  // const [articleComments, setArticleComments] = useState<GetArticleCommentsResponseData[] | null>(null);

  // 게시글 상세페이지 접속시 스크롤을 맨 위로 올림
  useEffect(() => {
    const fetchArticleDetail = async () => {
      // const responseArticleDetail = await get<GetArticleDetailResponse>(`/v1/articles/${articleId}`);
      // const responseArticleTags = await get<GetArticleTagsResponse>(`/v1/tags?key=articleId&value=${articleId}`);
      // const responseArticleComments = await get<GetArticleCommentsResponse>(`/v1/articles/${articleId}/comments`);
      // setArticleDetail(responseArticleDetail.data);
      // setArticleTags(responseArticleTags.data.tags);
      // setArticleComments(responseArticleComments.data.comments);
    };

    window.scrollTo(0, 0);
    setCurrentArticleId(articleId);

    fetchArticleDetail();

    return () => {
      // 페이지를 이탈할때 null로 초기화
      setCurrentArticleId(null);
    };
  }, [articleId, setCurrentArticleId]);

  return (
    <main className="flex flex-col gap-10 pt-10">
      {/* {articleDetail && articleTags && articleComments && (
        <>
          <ArticleDetailThumbnail thumbnail={articleDetail.thumbnail} />
          <ArticleDetailContent
            title={articleDetail.title}
            summary={articleDetail.summary}
            content={articleDetail.content}
          />
          <ArticleTags createAt={articleDetail.createAt} tags={articleTags} />
          <ArticleButtons commentCount={articleDetail.commentCount} likeCount={0} isLike />
          <ArticleComments comments={articleComments} />
          <ArticleCommentForm articleId={articleId} />
          <ArticleList articles={[]} type="recommend" />
        </>
      )} */}
    </main>
  );
}
