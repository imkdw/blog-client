'use client';

import { KeyboardArrowDown, KeyboardArrowUp, Menu } from '@mui/icons-material';
import clsx from 'clsx';
import { useState, MouseEvent } from 'react';
import AddingCategoryItem from './addingCategoryItem';

interface Props {
  id: number;
  name: string;
  childCategories?: {
    id: number;
    name: string;
  }[];
}

export default function ManageCategoryItem({ id, name, childCategories }: Props) {
  const [isSpreadCategory, setIsSpreadCategory] = useState(false);

  const [isParentHover, setIsParentHover] = useState(false);
  const [childHoverStates, setChildHoverStates] = useState<{ [key: number]: boolean }>({});

  const [isAddingChildCategory, setIsAddingChildCategory] = useState(false);

  const childHoverHandler = (childId: number) => {
    setChildHoverStates((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  const categorySpreadHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsSpreadCategory((prev) => !prev);
  };

  const handleParentMouseEnter = () => {
    setIsParentHover(true);
  };

  const handleParentMouseLeave = () => {
    setIsParentHover(false);
  };

  // const submitHandler = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  const onAddingChildCategoryHandler = () => {
    setIsAddingChildCategory((prev) => !prev);
  };

  return (
    <li className="flex h-[auto] w-full flex-col items-end border-t first:border-t-0 last:border-b-0" key={id}>
      <div
        className={clsx('flex h-[60px] w-full flex-row items-center border-gray-300', isSpreadCategory && 'border-b')}
        onMouseEnter={handleParentMouseEnter}
        onMouseLeave={handleParentMouseLeave}
      >
        <button
          className="h-full w-[50px] bg-gray-100"
          type="button"
          aria-label="카테고리 펼치기 버튼"
          onClick={categorySpreadHandler}
        >
          {isSpreadCategory ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </button>
        <div className="flex h-full w-[80px] cursor-grab items-center justify-center active:cursor-grabbing">
          <Menu className="text-gray-300" />
        </div>
        <p className="flex flex-1 items-center">{name}</p>

        {/* 카테고리 엘리먼트에 마우스를 올릴때 버튼 UI 렌더링 */}
        {isParentHover && (
          <div className="flex flex-1 flex-row justify-end gap-2 pr-3">
            <button
              type="submit"
              className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200"
              onClick={onAddingChildCategoryHandler}
            >
              추가
            </button>
            <button type="button" className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200">
              수정
            </button>
            <button type="submit" className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200">
              삭제
            </button>
          </div>
        )}
      </div>

      {/* 카테고리 오픈 상태일때 자식 카테고리 렌더링 */}
      {isSpreadCategory && childCategories?.length && (
        <ul className="w-[90%]">
          {childCategories.map((category) => (
            <li
              className="flex h-[60px] flex-row items-center border-b border-l border-gray-200 last:border-b-0"
              key={category.id}
              onMouseEnter={() => childHoverHandler(category.id)}
              onMouseLeave={() => childHoverHandler(category.id)}
            >
              <div className="flex h-full w-[80px] cursor-grab items-center justify-center active:cursor-grabbing">
                <Menu className="text-gray-300" />
              </div>
              <p className="flex flex-1 items-center">{category.name}</p>

              {childHoverStates[category.id] && (
                <div className="flex flex-1 flex-row justify-end gap-2 pr-3">
                  <button type="button" className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200">
                    수정
                  </button>
                  <button type="submit" className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200">
                    삭제
                  </button>
                </div>
              )}
            </li>
          ))}
          {isAddingChildCategory && (
            <li>
              <AddingCategoryItem type="child" onClick={onAddingChildCategoryHandler} />
            </li>
          )}
        </ul>
      )}
    </li>
  );
}
