'use client';

import { ChangeEvent, FormEvent, useEffect, useState, KeyboardEvent } from 'react';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

import { ICategory } from '../../category/types/category';
import { useArticle } from '../../../store/use-article';
import ParentCategory from '../../category/components/ParentCategory';
import ChildCategory from '../../category/components/ChildCategory';
import { post } from '../../../api/api';
import { CraeteArticleBody } from '../../../api/@types/request/article/article.interface';
import publicConfig from '../../../config/public/public.config';
import { CreateArticleResponse } from '../../../api/@types/response/article/article.interface';
import ArticleContentEditor from './ArticleContentEditor';

export default function ArticleWriteForm() {
  const [parentCategory, setParentCategory] = useState<ICategory>();
  const [childCategory, setChildCategory] = useState<ICategory>();
  const [content, setContent] = useState('');
  const router = useRouter();

  const [articleData, setArticleData] = useState<{
    id: string;
    title: string;
    summary: string;
    tag: string;
    tags: string[];
  }>({
    id: '',
    title: '',
    summary: '',
    tag: '',
    tags: [],
  });
  const { summary, tags, tag, title, id } = articleData;
  const { setIsWriting } = useArticle((state) => state);

  useEffect(() => {
    setIsWriting(true);

    return () => {
      setIsWriting(false);
    };
  }, [setIsWriting]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tagWithSort = tags.map((_tag, index) => ({
      tagName: _tag,
      sort: index,
    }));

    const response = await post<CraeteArticleBody, CreateArticleResponse>(publicConfig.article.create, {
      id,
      title,
      summary,
      content,
      parentCategoryId: parentCategory?.id!,
      childCategoryId: childCategory?.id!,
      tags: tagWithSort,
    });

    router.push(response.data.id);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setArticleData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const addTagHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    // tab 버튼을 클릭했을때만 태그를 추가함
    if (event.key === 'Tab') {
      event.preventDefault();

      if (!tag.length) {
        // TODO: 모달로 변경
        // eslint-disable-next-line no-alert
        window.alert('태그를 입력해주세요.');
        return;
      }

      const MAX_TAGS = 5;
      if (tags.length === MAX_TAGS) {
        // TODO: 모달로 변경
        // eslint-disable-next-line no-alert
        window.alert('태그는 최대 5개까지만 입력 가능합니다.');
        return;
      }

      const isExistTag = tags.find((_tag) => _tag === tag);
      if (isExistTag) {
        // TODO: 모달로 변경
        // eslint-disable-next-line no-alert
        window.alert('이미 존재하는 태그입니다.');
        return;
      }

      setArticleData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));

      setArticleData((prev) => ({
        ...prev,
        tag: '',
      }));
    }
  };

  const deleteTagHandler = (deleteTag: string) => {
    setArticleData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_tag) => _tag !== deleteTag),
    }));
  };

  return (
    <form onSubmit={submitHandler} className="flex h-full w-full flex-col gap-10 pt-10">
      <ParentCategory enableLink={false} onChangeCategory={setParentCategory} />
      <ChildCategory enableLink={false} onChangeCategory={setChildCategory} />
      <div className="h-[40px] w-full border-b border-gray-300">
        <input
          type="text"
          placeholder="게시글 아이디를 입력해주세요"
          className="w-full pl-2"
          onChange={changeHandler}
          name="id"
        />
      </div>
      <div className="h-[40px] w-full border-b border-gray-300">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          className="w-full pl-2"
          onChange={changeHandler}
          name="title"
        />
      </div>
      <div className="h-[40px] w-full border-b border-gray-300">
        <input
          type="text"
          placeholder="게시글에 대한 소개를 작성해주세요. (줄바꿈은 . 으로 구분)"
          className="w-full pl-2"
          onChange={changeHandler}
          name="summary"
        />
      </div>
      <div className="h-[500px] w-full border border-gray-300">
        <ArticleContentEditor content={content} setContent={setContent} />
      </div>
      <div className="flex flex-col gap-4 border-b border-gray-300 p-2">
        <input
          type="text"
          placeholder="태그를 입력해주세요. tab으로 구분 가능합니다. (최대 5개)"
          className="w-full pl-3"
          name="tag"
          onKeyDown={addTagHandler}
          onChange={changeHandler}
          value={tag}
        />
        <ul className="flex flex-row gap-2 pl-3">
          {tags.map((_tag) => (
            <li
              className="flex w-auto flex-row items-center justify-between gap-1 whitespace-nowrap rounded bg-gray-300 p-2"
              key={_tag}
            >
              <div className="flex h-full overflow-hidden text-ellipsis p-1 text-[18px] font-semibold">{_tag}</div>
              <button
                type="button"
                aria-label="remove tag button"
                className="flex h-full w-[20px] items-center justify-center"
                onClick={() => deleteTagHandler(_tag)}
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
