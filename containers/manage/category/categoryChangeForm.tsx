import { FormEvent, useState } from 'react';
import { patchUpdateCategory } from '../../../services/category';
import { PatchUpdateCategoryBody } from '../../../types/api/category';

interface Props {
  id: number;
  name: string;
  param: string;
  cancelEdit: () => void;
}

export default function CategoryChangeForm({ id, name, param, cancelEdit }: Props) {
  const [category, setCategory] = useState({ name, param });

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody: PatchUpdateCategoryBody = {};

    if (category.name !== name) {
      requestBody.name = category.name;
    }

    if (category.param !== param) {
      requestBody.param = category.param;
    }
    await patchUpdateCategory(id, requestBody);

    // TODO: 새로고침 방식 변경
    window.location.reload();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          className="h-8 border border-gray-300 pl-2 text-[16px]"
          placeholder="카테고리 이름"
          name="name"
          value={category.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          className="h-8 border border-gray-300 pl-2 text-[16px]"
          placeholder="카테고리 파라미터"
          name="param"
          value={category.param}
          onChange={changeHandler}
        />
      </div>
      <form className="flex flex-1 flex-row justify-end gap-2 pr-3" onSubmit={submitHandler}>
        <button type="submit" className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200">
          확인
        </button>
        <button
          type="button"
          className="border border-gray-300 p-1 pl-4 pr-4 text-[16px] hover:bg-gray-200"
          onClick={cancelEdit}
        >
          취소
        </button>
      </form>
    </>
  );
}
