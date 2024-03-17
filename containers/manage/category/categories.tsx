'use client';

import { useCallback, useEffect, useState } from 'react';

import ManageCategoryItem from './categoryItem';
import ManageCategoryAddButton from './categoryAddButton';
import AddingCategoryItem from './addingCategoryItem';
import { ICategory } from '../../../types/category';
import { getCategories } from '../../../services/category';

export default function ManangeCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const changeIsAddingHanlder = useCallback(() => {
    setIsAddingCategory((prev) => !prev);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.categories);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <ul className="border border-gray-300">
        {categories.map((category) => (
          <ManageCategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            param={category.param}
            childCategories={category.children}
          />
        ))}
      </ul>
      {isAddingCategory && <AddingCategoryItem type="parent" cancelAddingCategory={changeIsAddingHanlder} />}
      <ManageCategoryAddButton onClick={changeIsAddingHanlder} />
    </>
  );
}
