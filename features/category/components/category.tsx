'use client';

import React, { useEffect, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Link from 'next/link';
import { API_URL, get } from '../../../api/api';
import { ICategory, ResponseGetCategories } from '../types/category';
import useCategory from '../../../store/use-category';

interface Props {
  text?: string;
}

export default function ArticleCategory({ text = '전체' }: Props) {
  const [isSpreadCategory, setIsSpreadCategory] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { setParent } = useCategory((state) => state);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await get<ResponseGetCategories>(API_URL.category.getList.parent);
      setCategories(res.data.categories);
    };

    fetchCategories();
  }, []);

  const spreadCategoryHandler = () => {
    setIsSpreadCategory((prev) => !prev);
  };

  return (
    <div
      className="relative flex h-[40px] w-auto cursor-pointer justify-center"
      onMouseEnter={spreadCategoryHandler}
      onMouseLeave={spreadCategoryHandler}
    >
      <span className="text-[24px] hover:font-bold">{text}</span>

      {/* 카테고리 오픈 여부에 따른 화살표 방향전환 */}
      {isSpreadCategory ? (
        <KeyboardArrowUp className="flex h-full items-center" />
      ) : (
        <KeyboardArrowDown className="flex h-full items-center" />
      )}

      {/* 카테고리 오픈시 스프레드 */}
      {/* TODO: tailwind에서 top-2 안되는 이슈 해결 */}
      {isSpreadCategory && (
        <ul className="absolute border bg-white" style={{ top: '100%' }}>
          {categories.map((category) => (
            <li key={category.id} className="w-auto p-2">
              <Link href={`/articles?parent=${category.param}`} className="whitespace-nowrap hover:font-bold">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
