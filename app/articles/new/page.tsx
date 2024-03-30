'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { marked } from 'marked';

import { useArticle } from '../../../store/use-article';
import { ICategory } from '../../../types/category';
import { INewArticle } from '../../../types/article';
import ArticleCategorySelector from '../../../containers/article/new/categorySelector';
import ArticleIdEditor from '../../../containers/article/new/idEditor';
import ArticleTitleEditor from '../../../containers/article/new/titleEditor';
import ArticleSummaryEditor from '../../../containers/article/new/summaryEditor';
import ArticleContentEditor from '../../../containers/article/new/contentEditor';
import ArticleTagEditor from '../../../containers/article/new/tagEditor';
import ArticleNewButtons from '../../../containers/article/new/buttons';
import { postCreateArticle } from '../../../services/article';

export default function NewArticlePage() {
  const router = useRouter();

  const { setIsWriting } = useArticle((state) => state);
  const [parentCategory, setParentCategory] = useState<ICategory | null>(null);
  const [childCategory, setChildCategory] = useState<ICategory | null>(null);

  const changeParentCategory = (category: ICategory) => setParentCategory(category);
  const changeChildCategory = (category: ICategory) => setChildCategory(category);

  const [articleData, setArticleData] = useState<INewArticle>({
    id: '',
    title: '',
    summary: '',
    tags: [],
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
    /**
     * 작성 페이지에 들어오면 전역 상태로 글쓰기를 활성화
     */
    setIsWriting(true);

    return () => {
      /**
       * 클린업 함수로 글쓰기 상태를 비활성화 처리하고 선택했던 카테고리를 null로 변경함
       */
      setIsWriting(false);
      setChildCategory(null);
      setParentCategory(null);
    };
  }, [setIsWriting]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsedContent = marked.parse(content).toString();

    const response = await postCreateArticle({
      articleId: articleData.id,
      title: articleData.title,
      childCategoryId: childCategory?.id ?? 0,
      parentCategoryId: parentCategory?.id ?? 0,
      content: parsedContent,
      summary: articleData.summary,
      tags: articleData.tags.map((tag) => tag.trim()),
      images,
    });

    setIsWriting(false);
    setChildCategory(null);
    setParentCategory(null);

    router.push(`/articles/${response.articleId}`);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeTagsHandler = (tag: string) => {
    setArticleData((prev) => ({
      ...prev,
      tags: [...prev.tags, tag],
    }));
  };

  const deleteTagHandler = (deleteTag: string) => {
    setArticleData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_tag) => _tag !== deleteTag),
    }));
  };

  return (
    <main>
      <form onSubmit={submitHandler} className="flex h-full w-full flex-col gap-10 pt-10">
        <ArticleCategorySelector
          child={childCategory}
          parent={parentCategory}
          setChild={changeChildCategory}
          setParent={changeParentCategory}
        />
        <ArticleIdEditor articleId={articleData.id} changeHandler={changeHandler} />
        <ArticleTitleEditor title={articleData.title} changeHandler={changeHandler} />
        <ArticleSummaryEditor summary={articleData.summary} changeHandler={changeHandler} />
        <ArticleContentEditor content={content} changeHandler={changeContentHandler} setImage={addImageHandler} />
        <ArticleTagEditor tags={articleData.tags} changeHandler={changeTagsHandler} deleteHandler={deleteTagHandler} />
        <ArticleNewButtons />
      </form>
    </main>
  );
}
