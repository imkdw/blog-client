import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { getArticleDetail, getArticleTags } from '../../../services/article';
import ArticleThumbnail from '../../../containers/article/detail/thumbnail';
import ArticleContent from '../../../containers/article/detail/content';
import ArticleTags from '../../../containers/article/detail/tags';
import ArticleUtilButtons from '../../../containers/article/detail/utilButtons';
import CommentWriteForm from '../../../containers/article/detail/comment/writeForm';
import Comments from '../../../containers/article/detail/comment/comments';
import generateCustomMetadata from '../../../utils/metadata';

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  try {
    const articleDetail = await getArticleDetail(slug);

    return {
      ...generateCustomMetadata({
        title: articleDetail.title,
        description: articleDetail.summary,
        link: `/articles/${slug}`,
        image: articleDetail.thumbnail,
      }),
    };
  } catch (error: any) {
    if (error.message?.includes('404')) {
      return notFound();
    }
  }

  return null;
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticleDetailPage({ params: { slug } }: Props) {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value || '';

  const articleDetail = await getArticleDetail(slug, accessToken);
  const articleTags = await getArticleTags(slug);

  return (
    <div className="flex h-auto w-full flex-col items-center gap-10">
      {articleDetail && articleTags && (
        <>
          <ArticleThumbnail image={articleDetail.thumbnail} title={articleDetail.title} />
          <ArticleContent
            title={articleDetail.title}
            summary={articleDetail.summary}
            content={articleDetail.content}
            articleId={slug}
          />
          <ArticleTags createAt={articleDetail.createdAt} tags={articleTags.tags} />
          <ArticleUtilButtons
            commentCount={articleDetail.commentCount}
            _likeCount={articleDetail.like.likeCount}
            _isLike={articleDetail.like.isLiked}
            articleId={slug}
            summary={articleDetail.summary}
            thumbnail={articleDetail.thumbnail}
            title={articleDetail.title}
          />
          <Comments articleId={slug} />
          <CommentWriteForm articleId={slug} />
        </>
      )}
    </div>
  );
}
