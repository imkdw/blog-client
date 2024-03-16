'use client';

import { useEffect, useState } from 'react';

import ManageCategoryItem from './categoryItem';
import ManageCategoryAddButton from './categoryAddButton';
import AddingCategoryItem from './addingCategoryItem';
import { ICategory } from '../../../types/category';
import { getCategories } from '../../../services/category';

export default function ManangeCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const changeIsAddingHanlder = () => {
    setIsAddingCategory((prev) => !prev);
  };

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
          <ManageCategoryItem id={category.id} name={category.name} childCategories={category.children} />
        ))}
      </ul>
      {isAddingCategory && <AddingCategoryItem onClick={changeIsAddingHanlder} type="parent" />}
      <ManageCategoryAddButton onClick={changeIsAddingHanlder} />
    </>
  );
}
