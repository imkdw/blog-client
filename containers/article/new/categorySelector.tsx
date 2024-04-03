'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { getCategories } from '../../../services/category';
import { ICategory } from '../../../types/category';

interface Props {
  parent: ICategory | null;
  setParent: (category: ICategory) => void;
  child: ICategory | null;
  setChild: (category: ICategory) => void;
}

export default function ArticleCategorySelector({ parent, setParent, child, setChild }: Props) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const childCategories = categories.find((category) => category.param === parent?.param)?.children;

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex w-full flex-col gap-2">
      <ul className="flex w-full flex-row gap-2 border-b border-gray-300 pb-2">
        {categories.map((category) => (
          <li
            key={category.id}
            className={clsx(
              'flex w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 pb-1 pl-2 pr-2 pt-1 text-sm hover:bg-gray-200',
              parent?.param === category.param && 'bg-gray-200',
            )}
          >
            <button onClick={() => setParent(category)} type="button">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className="flex h-[40px] w-full flex-row gap-2">
        {childCategories?.map((category) => (
          <li
            key={category.id}
            className={clsx(
              'flex w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 pb-1 pl-2 pr-2 pt-1 text-sm hover:bg-gray-200',
              child?.param === category.param && 'bg-gray-200',
            )}
          >
            <button onClick={() => setChild(category)} type="button">
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
