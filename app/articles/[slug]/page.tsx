import { Metadata } from 'next';

import { getArticleDetail, getArticleTags } from '../../../services/article';
import ArticleThumbnail from '../../../containers/article/detail/thumbnail';
import ArticleContent from '../../../containers/article/detail/content';
import ArticleTags from '../../../containers/article/detail/tags';
import ArticleUtilButtons from '../../../containers/article/detail/utilButtons';
import CommentWriteForm from '../../../containers/article/detail/comment/writeForm';
import Comments from '../../../containers/article/detail/comment/comments';
import generateCustomMetadata from '../../../utils/metadata';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const articleDetail = await getArticleDetail(slug);

  return {
    ...generateCustomMetadata({
      title: articleDetail.title,
      description: articleDetail.summary,
      link: `/articles/${slug}`,
      image: articleDetail.thumbnail,
    }),
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticleDetailPage({ params: { slug } }: Props) {
  const articleId = slug;

  const articleDetail = await getArticleDetail(articleId);
  const articleTags = await getArticleTags(articleId);

  return (
    <div className="flex h-auto w-full flex-col items-center gap-10">
      {articleDetail && articleTags && (
        <>
          <ArticleThumbnail image={articleDetail.thumbnail} title={articleDetail.title} />
          <ArticleContent
            title={articleDetail.title}
            summary={articleDetail.summary}
            content={articleDetail.content}
            articleId={articleId}
          />
          <ArticleTags createAt={articleDetail.createdAt} tags={articleTags.tags} />
          <ArticleUtilButtons
            commentCount={articleDetail.commentCount}
            _likeCount={articleDetail.like.likeCount}
            _isLike={articleDetail.like.isLiked}
            articleId={articleId}
          />
          <Comments articleId={articleId} />
          <CommentWriteForm articleId={articleId} />
        </>
      )}
    </div>
  );
}
