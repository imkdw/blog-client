'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { API_URL, get } from '../../../api/api';
import { ICategory, ResponseGetCategories } from '../types/category';
import useCategory from '../../../store/use-category';
import clsx from 'clsx';

interface Props {
  enableLink: boolean;
  onChangeCategory?: (category: ICategory) => void;
}
export default function ChildCategory({ enableLink = false, onChangeCategory }: Props) {
  const { setAllChild, currentParent, setCurrentChild, allChild, currentChild } = useCategory((state) => state);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await get<ResponseGetCategories>(API_URL.category.getList.children(currentParent?.param!));
      setAllChild(res.data.categories);
    };

    if (currentParent) {
      fetchCategories();
    }
  }, [currentParent, setAllChild]);

  const changeChildHandler = (_child: ICategory) => {
    setCurrentChild(_child);
    if (onChangeCategory) {
      onChangeCategory(_child);
    }
  };

  return (
    <ul className="flex h-[45px] flex-row">
      {allChild.map((childCategory) => (
        <li
          key={childCategory.id}
          className={clsx(
            'flex items-center justify-center rounded-[10px] border p-2',
            currentChild?.name === childCategory.name && 'bg-slate-300',
          )}
        >
          {enableLink ? (
            <Link
              href={`/articles?parent=${currentParent?.param}&child=${childCategory.param}`}
              onClick={() => changeChildHandler(childCategory)}
              className="text-[18px]"
            >
              {childCategory.name}
            </Link>
          ) : (
            <button onClick={() => changeChildHandler(childCategory)} className={clsx('text-[18px]')} type="button">
              {childCategory.name}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
