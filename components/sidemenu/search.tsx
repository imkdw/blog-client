'use client';

import { Search } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';

export default function MenuSearch() {
  const [searchText, setSearchText] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex h-[80px] w-full items-center justify-center">
      <div className="relative h-[60px] w-[85%] rounded-xl bg-gray-100">
        <Search className="absolute bottom-[50%] left-2 top-[50%] -translate-y-[50%] text-gray-300" fontSize="large" />
        <input type="text" onChange={changeHandler} value={searchText} className="h-full w-full bg-transparent pl-12" />
      </div>
    </div>
  );
}
