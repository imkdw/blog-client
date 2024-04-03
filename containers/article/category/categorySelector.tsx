'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

import { ICategory } from '../../../types/category';
import { getCategories } from '../../../services/category';
import { MOBILE_WIDTH } from '../../../constants/mobile.constant';

interface Props {
  isHaveAll: boolean;
}

export default function ArticleCategorySelector({ isHaveAll = false }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  const searchParams = useSearchParams();
  const parentCategory = searchParams.get('parent');
  const childCategory = searchParams.get('child');

  const childCategories = categories.find((category) => category.param === parentCategory)?.children;

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.categories);
    };

    fetchCategories();
  }, []);

  return (
    <div className={clsx('flex flex-col gap-2', isMobile ? 'w-[90%]' : 'w-full')}>
      <ul className="flex w-full flex-row gap-2 border-b border-gray-300 pb-2">
        {isHaveAll && (
          <li
            className={clsx(
              'flex h-[40px] w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 pb-1 pl-2 pr-2 pt-1 hover:bg-gray-200',
              !parentCategory && 'bg-gray-200',
            )}
          >
            <Link href="/articles" className="text-sm">
              전체
            </Link>
          </li>
        )}

        {categories.map((category) => (
          <li
            key={category.id}
            className={clsx(
              'flex w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 pb-1 pl-2 pr-2 pt-1 hover:bg-gray-200',
              parentCategory === category.param && 'bg-gray-200',
            )}
          >
            <Link href={`/articles?parent=${category.param}`} className="text-sm">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex h-[40px] w-full flex-row gap-2">
        <li
          className={clsx(
            'flex w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 pb-1 pl-2 pr-2 pt-1 hover:bg-gray-200',
            !childCategory && 'bg-gray-200',
          )}
        >
          <Link href={`/articles?parent=${parentCategory}`} className="text-sm">
            전체
          </Link>
        </li>

        {childCategories?.map((category) => (
          <li
            key={category.id}
            className={clsx(
              'flex w-auto cursor-pointer items-center justify-center rounded-xl border border-gray-300 pb-1 pl-2 pr-2 pt-1 hover:bg-gray-200',
              childCategory === category.param && 'bg-gray-200',
            )}
          >
            <Link href={`/articles?parent=${parentCategory}&child=${category.param}`} className="text-sm">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
