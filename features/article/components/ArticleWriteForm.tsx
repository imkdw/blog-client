'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';

import { ICategory } from '../../category/types/category';
import { useArticle } from '../../../store/use-article';
import ParentCategory from '../../category/components/ParentCategory';
import ChildCategory from '../../category/components/ChildCategory';

export default function ArticleWriteForm() {
  const [parentCategory, setParentCategory] = useState<ICategory>();
  const [childCategory, setChildCategory] = useState<ICategory>();

  const [articleData, setArticleData] = useState({
    title: '',
    summary: '',
    content: '',
    tags: [],
  });
  const { content, summary, tags, title } = articleData;
  const { setIsWriting } = useArticle((state) => state);

  useEffect(() => {
    setIsWriting(true);

    return () => {
      setIsWriting(false);
    };
  }, [setIsWriting]);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={submitHandler} className="flex h-full w-full flex-col gap-10 pt-10">
      <ParentCategory enableLink={false} onChangeCategory={setParentCategory} />
      <ChildCategory enableLink={false} onChangeCategory={setChildCategory} />
      <div className="h-[40px] w-full border-b border-gray-300">
        <input type="text" placeholder="제목을 입력해주세요" className="w-full pl-2" onChange={changeHandler} />
      </div>
      <div className="h-[40px] w-full border-b border-gray-300">
        <input
          type="text"
          placeholder="게시글에 대한 소개를 작성해주세요. (줄바꿈은 . 으로 구분)"
          className="w-full pl-2"
          onChange={changeHandler}
        />
      </div>
      <div className="h-[500px] w-full border border-gray-300">
        <textarea onChange={changeHandler} />
      </div>
      <div className="flex flex-col gap-4 border-b border-gray-300 p-2">
        <input
          type="text"
          placeholder="태그를 입력해주세요. tab으로 구분 가능합니다. (최대 5개)"
          className="w-full pl-3"
        />
        <ul className="flex flex-row gap-2 pl-3">
          {tags.map((tag) => (
            <li className="flex flex-row items-center justify-center gap-1 rounded bg-gray-300 p-2" key={tag.id}>
              <span className="flex h-full w-2/3 items-center justify-center text-[18px] font-semibold">{tag.tag}</span>
              <button
                type="button"
                aria-label="remove tag button"
                className="flex h-full w-1/3 items-center justify-center"
              >
                <Close fontSize="small" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end gap-3">
        <button type="submit" className="h-[50px] w-[170px] rounded-[10px] bg-[#111926] text-white">
          임시저장
        </button>
        <button type="submit" className="h-[50px] w-[170px] rounded-[10px] bg-[#111926] text-white">
          작성하기
        </button>
      </div>
    </form>
  );
}
