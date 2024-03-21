import { Close } from '@mui/icons-material';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import useDebounce from '../../../hooks/use-debounce';
import { getSearchTag } from '../../../services/tag';
import { ITag } from '../../../types/tag';

interface Props {
  tags: string[];
  changeHandler: (tag: string) => void;
  deleteHandler: (deleteTag: string) => void;
}

export default function ArticleTagEditor({ tags, changeHandler, deleteHandler }: Props) {
  const [tag, setTag] = useState('');
  const [searchedTags, setSearchedTags] = useState<ITag[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const debounceTag = useDebounce(tag, 200);

  useEffect(() => {
    const searchTag = async () => {
      const response = await getSearchTag(debounceTag);
      setSearchedTags(response.tags);
    };

    if (debounceTag) searchTag();
  }, [debounceTag]);

  const changeTagHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTag(event.currentTarget.value);
  };

  const addTagHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Tab') return;

    // tab 버튼을 클릭했을때만 태그를 추가함
    event.preventDefault();

    if (!tag.length) {
      // eslint-disable-next-line no-alert
      window.alert('태그를 입력해주세요.');
      return;
    }

    const MAX_TAGS = 5;
    if (tags.length === MAX_TAGS) {
      // eslint-disable-next-line no-alert
      window.alert('태그는 최대 5개까지만 입력 가능합니다.');
      return;
    }

    const isExistTag = tags.find((_tag) => _tag === tag);
    if (isExistTag) {
      // eslint-disable-next-line no-alert
      window.alert('이미 존재하는 태그입니다.');
      return;
    }

    changeHandler(tag);
    setSearchedTags([]);
    setTag('');
  };

  const tagClickHandler = (clickedTag: ITag) => {
    setTag(clickedTag.name);
    setSearchedTags([]);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-4 border-b border-gray-300 p-2">
      <div className="relative">
        <input
          type="text"
          placeholder="태그를 입력해주세요. tab으로 구분 가능합니다. (최대 5개)"
          className="w-full pl-3"
          name="tag"
          onChange={changeTagHandler}
          onKeyDown={addTagHandler}
          value={tag}
          ref={inputRef}
        />
        {searchedTags?.length ? (
          <ul className="absolute top-[120%] flex flex-col border border-gray-300 bg-white">
            {searchedTags.map((searchedTag) => (
              <li key={searchedTag.id} className="cursor-pointer p-1 pl-2 pr-2 text-[16px] hover:bg-gray-200">
                <button onClick={() => tagClickHandler(searchedTag)} type="button">
                  {searchedTag.name}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <ul className="flex flex-row gap-2 pl-3">
        {tags.map((_tag) => (
          <li
            className="flex w-auto flex-row items-center justify-between gap-1 whitespace-nowrap rounded bg-gray-300 p-1"
            key={_tag}
          >
            <div className="flex h-full overflow-hidden text-ellipsis p-1 text-[18px] font-semibold">{_tag}</div>
            <button
              type="button"
              aria-label="remove tag button"
              className="flex h-full w-[20px] items-center justify-center"
              onClick={() => deleteHandler(_tag)}
            >
              <Close fontSize="small" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
