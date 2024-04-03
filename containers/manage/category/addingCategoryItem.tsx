'use client';

import clsx from 'clsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import { postCreateCategory } from '../../../services/category';

interface Props {
  cancelAddingCategory: () => void;
  type: 'parent' | 'child';
  parentId?: number;
}
export default function AddingCategoryItem({ cancelAddingCategory, type, parentId }: Props) {
  const [categoryData, setCategoryData] = useState({
    name: '',
    param: '',
  });

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postCreateCategory({ name: categoryData.name, param: categoryData.param, ...(parentId && { parentId }) });

    // TODO: 새로고침 없이 카테고리 데이터 리로드하는 방식으로 변경하기
    window.location.reload();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <form
      className={clsx(
        'flex h-[60px] w-full flex-row items-center gap-1 border border-t-0 border-gray-300',
        type === 'child' && 'border-b-0 border-r-0',
      )}
      onSubmit={submitHandler}
    >
      <div className="flex h-full w-[40px] items-center justify-center text-gray-300">·</div>
      <input
        type="text"
        className="h-8 border border-gray-300 pl-2 text-sm"
        onChange={changeHandler}
        placeholder="카테고리 이름"
        value={categoryData.name}
        name="name"
      />
      <input
        type="text"
        className="h-8 border border-gray-300 pl-2 text-sm"
        onChange={changeHandler}
        placeholder="카테고리 파라미터"
        value={categoryData.param}
        name="param"
      />
      <div className="flex flex-1 flex-row justify-end gap-2 pr-3">
        <button type="submit" className="border border-gray-300 p-1 pl-4 pr-4 text-sm hover:bg-gray-200">
          저장
        </button>
        <button
          type="button"
          className="border border-gray-300 p-1 pl-4 pr-4 text-sm hover:bg-gray-200"
          onClick={cancelAddingCategory}
        >
          취소
        </button>
      </div>
    </form>
  );
}
