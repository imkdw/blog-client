'use client';

import { Add } from '@mui/icons-material';

interface Props {
  onClick: () => void;
}
export default function ManageCategoryAddButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="mt-2 flex h-[60px] w-full cursor-pointer flex-row items-center gap-1 border border-dashed border-gray-300"
      type="button"
    >
      <Add className="flex h-full items-start pl-2 text-gray-400" />
      <p className="flex h-full items-center text-sm text-gray-400">카테고리 추가</p>
    </button>
  );
}
