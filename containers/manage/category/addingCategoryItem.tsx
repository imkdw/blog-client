import clsx from 'clsx';
import { FormEvent } from 'react';

interface Props {
  onClick: () => void;
  type: 'parent' | 'child';
}
export default function AddingCategoryItem({ onClick, type }: Props) {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      className={clsx(
        'flex h-[60px] w-full flex-row items-center gap-1 border border-t-0 border-gray-200',
        type === 'child' && 'border-b-0 border-r-0',
      )}
      onSubmit={submitHandler}
    >
      <div className="flex h-full w-[40px] items-center justify-center text-gray-300">·</div>
      <input type="text" name="newCategory" className="h-8 border border-gray-300 pl-2 text-[16px]" />
      <div className="flex flex-1 flex-row justify-end gap-2 pr-3">
        <button type="submit" className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200">
          저장
        </button>
        <button
          type="button"
          className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200"
          onClick={onClick}
        >
          취소
        </button>
      </div>
    </form>
  );
}
