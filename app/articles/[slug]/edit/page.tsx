'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IEditArticle } from '../../../../types/article';
import { getArticleDetail, PatchUpdateArticle } from '../../../../services/article';
import ArticleTitleEditor from '../../../../containers/article/new/titleEditor';
import ArticleSummaryEditor from '../../../../containers/article/new/summaryEditor';
import ArticleContentEditor from '../../../../containers/article/new/contentEditor';
import ArticleNewButtons from '../../../../containers/article/new/buttons';

interface Props {
  params: {
    slug: string;
  };
}

export default function EditArticlePage({ params: { slug } }: Props) {
  const articleId = slug;
  const router = useRouter();

  const [articleData, setArticleData] = useState<IEditArticle>({
    title: '',
    summary: '',
  });

  const [content, setContent] = useState('');
  const changeContentHandler = (value: string) => {
    setContent(value);
  };

  const [images, setImages] = useState<string[]>([]);
  const addImageHandler = (image: string) => {
    setImages((prev) => [...prev, image]);
  };

  useEffect(() => {
    const fetchArticleDetail = async () => {
      const response = await getArticleDetail(articleId);
      setArticleData((prev) => ({
        ...prev,
        id: response.articleId,
        title: response.title,
        summary: response.summary,
      }));
      setContent(response.content);
    };

    fetchArticleDetail();
  }, [articleId]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: 기존 데이터랑 수정된 부분만 body로 보내기
    await PatchUpdateArticle(articleId, {
      title: articleData.title,
      summary: articleData.summary,
      content,
      newImages: images,
    });

    router.push(`/articles/${articleId}`);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <main>
      <form onSubmit={submitHandler} className="flex h-full w-full flex-col gap-10 pt-10">
        <ArticleTitleEditor title={articleData.title} changeHandler={changeHandler} />
        <ArticleSummaryEditor summary={articleData.summary} changeHandler={changeHandler} />
        <ArticleContentEditor content={content} changeHandler={changeContentHandler} setImage={addImageHandler} />
        <ArticleNewButtons />
      </form>
    </main>
  );
}
