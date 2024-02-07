'use client';

import { Search } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';

export default function ArticleSearch() {
  const [searchData, setSearchData] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchData(event.target.value);
  };

  return (
    <div className="flex h-[50px] w-[40%] flex-row items-center rounded-[10px] border border-gray-300">
      <input
        type="text"
        name=""
        placeholder="검색어를 입력해주세요"
        className="w-[90%] bg-inherit pl-[15px] text-[18px] outline-none"
        value={searchData}
        onChange={changeHandler}
      />
      <Search />
    </div>
  );
}
