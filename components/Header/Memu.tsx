import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { GitHub } from '@mui/icons-material';

export default function HeaderMenu() {
  return (
    <nav className="w-full">
      <ul className="flex flex-row items-center justify-center gap-[100px]">
        <li className="flex cursor-pointer flex-row items-center justify-center gap-[10px]">
          Category
          <KeyboardArrowDownIcon />
        </li>
        <li>
          <Link href="https://github.com/imkdw/blog" target="_blank">
            <GitHub sx={{ width: '40px', height: '40px' }} />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About me</Link>
        </li>
      </ul>
    </nav>
  );
}
