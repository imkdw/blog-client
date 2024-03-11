/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import ArticleSearch from '../../components/Articles/Search';
import ArticleList from '../../components/Articles/articleList';
import ChildCategory from '../../features/category/components/ChildCategory';
import ParentCategory from '../../features/category/components/ParentCategory';

export default function ArticlesPage() {
  // const [articles, setArticles] = useState<GetArticlesResponseData[]>();

  // const searchParams = useSearchParams();
  // const [parent, child] = [searchParams.get('parent'), searchParams.get('child')];

  // useEffect(() => {
  //   const fetchArticles = async (categoryParam: string | null) => {
  //     const response = await get<GetArticlesResponse>(`/v1/articles?categoryParam=${categoryParam || ''}`);
  //     setArticles(response.data.articles);
  //   };

  //   const criteriaCategory = child || parent;
  //   fetchArticles(criteriaCategory);
  // }, [child, parent]);


  return (
    <main className="flex w-full flex-col items-start pt-[30px]">
      <div className="flex w-full flex-col justify-between gap-[30px]">
        <div className="flex flex-row justify-between">
          <ParentCategory enableLink />
          <ArticleSearch />
        </div>
        <ChildCategory enableLink />
        {/* <ArticleList type="all" articles={articles || []} /> */}
      </div>
    </main>
  );
}
