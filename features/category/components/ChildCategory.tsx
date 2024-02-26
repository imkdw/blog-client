'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { API_URL, get } from '../../../api/api';
import { ICategory, ResponseGetCategories } from '../types/category';
import useCategory from '../../../store/use-category';

export default function ChildCategory() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const { parent, setChild } = useCategory();

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await get<ResponseGetCategories>(API_URL.category.getList.children(parent));
      setCategories(res.data.categories);
    };

    fetchCategories();
  }, [parent]);

  const changeChildHandler = (_child: string) => {
    setChild(_child);
  };

  return (
    <ul className="flex h-[45px] flex-row">
      {categories.map((category) => (
        <li key={category.id} className="flex items-center justify-center rounded-[10px] border p-2">
          <Link
            href={`/articles?parent=${parent}&child=${category.param}`}
            onClick={() => changeChildHandler(category.param)}
            className="text-[18px]"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
