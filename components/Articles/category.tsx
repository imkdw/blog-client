'use client';

import React, { useEffect, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import clsx from 'clsx';
import { ArticleCategories, ArticleSubCategories } from '../../@types/article/Article';

interface Props {
  text?: string;
}

export default function ArticleCategory({ text = '전체' }: Props) {
  const [isSpreadCategory, setIsSpreadCategory] = useState(false);
  const [subCategoryData, setSubCategoryData] = useState<ArticleSubCategories[]>([]);

  const categories: ArticleCategories[] = [
    {
      id: '1',
      title: '카테고리 1',
      subCategory: [
        {
          id: '1-1',
          title: '카테고리 1-1',
        },
        {
          id: '1-2',
          title: '카테고리 1-2',
        },
        {
          id: '1-3',
          title: '카테고리 1-3',
        },
        {
          id: '1-4',
          title: '카테고리 1-4',
        },
        {
          id: '1-5',
          title: '카테고리 1-5',
        },
        {
          id: '1-6',
          title: '카테고리 1-6',
        },
      ],
    },
    {
      id: '2',
      title: '카테고리 2',
      subCategory: [
        {
          id: '2-1',
          title: '카테고리 2-1',
        },
        {
          id: '2-2',
          title: '카테고리 2-2',
        },
        {
          id: '2-3',
          title: '카테고리 2-3',
        },
        {
          id: '2-4',
          title: '카테고리 2-4',
        },
        {
          id: '2-5',
          title: '카테고리 2-5',
        },
        {
          id: '2-6',
          title: '카테고리 2-6',
        },
      ],
    },
  ];

  useEffect(() => {
    // setSubCategoryData(categories[0].subCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const spreadCategoryHandler = () => {
    setIsSpreadCategory((prev) => !prev);
    setSubCategoryData([]);
  };

  const subCategoryChangeHandler = (categoryId: string) => {
    const category = categories.find((item) => item.id === categoryId);
    setSubCategoryData(category?.subCategory || []);
  };

  return (
    <div
      className="relative flex h-[40px] cursor-pointer text-[24px]"
      onMouseEnter={spreadCategoryHandler}
      onMouseLeave={spreadCategoryHandler}
    >
      {text}

      {/* 카테고리 오픈 여부에 따른 화살표 방향전환 */}
      {isSpreadCategory ? (
        <KeyboardArrowUp className="flex h-full items-center" />
      ) : (
        <KeyboardArrowDown className="flex h-full items-center" />
      )}

      {/* 카테고리 오픈시 스프레드 */}
      <div className={clsx('absolute top-[100%] flex h-auto flex-row', isSpreadCategory && 'min-w-[300px]')}>
        <ul className={clsx('mt-[20px] h-full w-[50%]', isSpreadCategory && 'border border-gray-300 bg-white')}>
          {isSpreadCategory &&
            categories.map((category) => (
              <li
                key={category.id}
                onMouseOver={() => subCategoryChangeHandler(category.id)}
                onFocus={() => subCategoryChangeHandler(category.id)}
                className="p-2"
              >
                {category.title}
              </li>
            ))}
        </ul>

        <ul className={clsx('mt-[20px] h-auto w-[50%]', subCategoryData.length && 'border border-gray-300 bg-white')}>
          {subCategoryData.map((item) => (
            <li key={item.id} className="p-2">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
