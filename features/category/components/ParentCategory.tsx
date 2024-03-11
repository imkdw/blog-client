/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { useEffect, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Link from 'next/link';
import { ICategory, ResponseGetCategories } from '../types/category';
import useCategory from '../../../store/use-category';

interface Props {
  enableLink: boolean;
  onChangeCategory?: (category: ICategory) => void;
}

export default function ParentCategory({ enableLink, onChangeCategory }: Props) {
  const [isSpreadCategory, setIsSpreadCategory] = useState(false);
  const { setAllParent, setCurrentParent, allParent, currentParent, setCurrentChild } = useCategory((state) => state);

  useEffect(() => {}, []);

  const spreadCategoryHandler = () => {
    setIsSpreadCategory((prev) => !prev);
  };

  const changeParentHandler = (parent: ICategory) => {
    setCurrentParent(parent);
    setCurrentChild(null);

    if (onChangeCategory) {
      onChangeCategory(parent);
    }
  };

  return (
    <div
      className="relative flex h-full w-[200px] cursor-pointer items-center "
      onMouseEnter={spreadCategoryHandler}
      onMouseLeave={spreadCategoryHandler}
    >
      <span className="text-[24px] hover:font-bold">{currentParent?.name || '전체'}</span>

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
          {allParent.map((parentCategory) => (
            <li key={parentCategory.id} className="w-auto p-2">
              {enableLink ? (
                <Link
                  href={`/articles?parent=${parentCategory.param}`}
                  className="whitespace-nowrap hover:font-bold"
                  onClick={() => {
                    changeParentHandler(parentCategory);
                    setIsSpreadCategory(false);
                  }}
                >
                  {parentCategory.name}
                </Link>
              ) : (
                <button
                  type="button"
                  className="whitespace-nowrap hover:font-bold"
                  onClick={() => {
                    changeParentHandler(parentCategory);
                    setIsSpreadCategory(false);
                  }}
                >
                  {parentCategory.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
