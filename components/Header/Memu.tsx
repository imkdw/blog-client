import Link from 'next/link';
import ArticleCategory from '../Articles/category';

export default function HeaderMenu() {
  return (
    <nav className="w-full">
      <ul className="flex flex-row items-center justify-center gap-[100px]">
        <li className="h-[40px] cursor-pointer">
          <ArticleCategory text="Category" />
        </li>
        <li className="h-[40px] cursor-pointer">
          <Link href="/about" className="flex h-full items-center text-[24px]">
            Github
          </Link>
        </li>
        <li className="h-[40px] cursor-pointer">
          <Link href="/about" className="flex h-full items-center text-[24px]">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
