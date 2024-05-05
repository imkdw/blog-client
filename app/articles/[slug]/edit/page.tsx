'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IEditArticle } from '../../../../types/article';
import { getArticleDetail, patchUpdateArticle } from '../../../../services/article';
import ArticleTitleEditor from '../../../../containers/article/new/titleEditor';
import ArticleSummaryEditor from '../../../../containers/article/new/summaryEditor';
import ArticleContentEditor from '../../../../containers/article/new/contentEditor';
import ArticleNewButtons from '../../../../containers/article/new/buttons';
import ArticleThumbnailSelector from '../../../../containers/article/new/thumbnailSelector';

interface Props {
  params: {
    slug: string;
  };
}

export default function EditArticlePage({ params: { slug } }: Props) {
  const articleId = slug;
  const router = useRouter();

  const [articleDetail, setArticleDetail] = useState<IEditArticle>({
    title: '',
    summary: '',
    thumbnail: '',
  });

  const [articleEditData, setArticleEditData] = useState<IEditArticle>(articleDetail);

  const [content, setContent] = useState('');
  const [editContent, setEditContent] = useState(content);
  const changeContentHandler = (value: string) => {
    setEditContent(value);
  };

  const [images, setImages] = useState<string[]>([]);
  const addImageHandler = (image: string) => {
    setImages((prev) => [...prev, image]);
  };

  const changeThumbnailHandler = (thumbnail: string) => {
    setArticleEditData((prev) => ({
      ...prev,
      thumbnail,
    }));
  };

  useEffect(() => {
    const fetchArticleDetail = async () => {
      const response = await getArticleDetail(articleId);
      setArticleDetail((prev) => ({
        ...prev,
        title: response.title,
        summary: response.summary,
        thumbnail: response.thumbnail,
      }));
      setContent(response.content);

      setArticleEditData((prev) => ({
        ...prev,
        title: response.title,
        summary: response.summary,
        thumbnail: response.thumbnail,
      }));

      setEditContent(response.content);
    };

    fetchArticleDetail();
  }, [articleId]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editedArticleData: Partial<IEditArticle> = {};

    if (articleEditData.title !== articleDetail.title) {
      editedArticleData.title = articleEditData.title;
    }

    if (articleEditData.summary !== articleDetail.summary) {
      editedArticleData.summary = articleEditData.summary;
    }

    if (articleDetail.thumbnail !== articleEditData.thumbnail) {
      editedArticleData.thumbnail = articleEditData.thumbnail;
    }

    await patchUpdateArticle(articleId, {
      ...editedArticleData,
      ...(content !== editContent && { content: editContent }),
      ...(images.length && { newImages: images }),
    });

    router.push(`/articles/${articleId}`);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleEditData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <main>
      <form onSubmit={submitHandler} className="flex h-full w-full flex-col gap-10 pt-10">
        <ArticleThumbnailSelector changeHandler={changeThumbnailHandler} thumbnail={articleEditData.thumbnail} />
        <ArticleTitleEditor title={articleEditData.title} changeHandler={changeHandler} />
        <ArticleSummaryEditor summary={articleEditData.summary} changeHandler={changeHandler} />
        <ArticleContentEditor content={editContent} changeHandler={changeContentHandler} setImage={addImageHandler} />
        <ArticleNewButtons />
      </form>
    </main>
  );
}
