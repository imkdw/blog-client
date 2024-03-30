'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCategorySelector from '../../containers/article/category/categorySelector';
import ArticleList from '../../containers/article/list/articleList';
import { IArticleListItem } from '../../types/article';
import { getArticlesByCategory } from '../../services/article';

export default function ArticlesPage() {
  const [articles, setArticles] = useState<IArticleListItem[]>([]);

  const searchParams = useSearchParams();
  const parentCategory = searchParams.get('parent') ?? '';
  const childCategory = searchParams.get('child') ?? '';

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticlesByCategory(parentCategory, childCategory);
      setArticles(response.articles);
    };

    fetchArticles();
  }, [childCategory, parentCategory]);

  return (
    <div className="flex h-full w-full flex-1 flex-col gap-5">
      <h2 className="text-[28px] font-bold">카테고리</h2>
      <Suspense fallback={<div>로딩중...</div>}>
        <ArticleCategorySelector isHaveAll />
        <ArticleList type="all" articles={articles} />
      </Suspense>
    </div>
  );
}
