'use client';

import { Menu } from '@mui/icons-material';

export default function HeaderMenu() {
  const clickHandler = () => {};

  return (
    <button type="button" aria-label="header hamberger menu" onClick={clickHandler} className="absolute right-5 h-full">
      <Menu className="text-gray-500" fontSize="large" />
    </button>
  );
}
