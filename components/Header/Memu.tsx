import Link from 'next/link';
import ArticleCategory from '../../features/category/components/category';

export default function HeaderMenu() {
  return (
    <nav className="w-full">
      <ul className="flex flex-row items-center justify-center gap-[100px]">
        <li className="h-[40px] min-w-[200px]">
          <ArticleCategory text="Category" link="/articles" />
        </li>
        <li className="h-[40px] cursor-pointer">
          <Link
            href="https://github.com/imkdw/blog"
            target="_blank"
            className="flex h-full items-center text-[24px]  hover:font-bold"
          >
            Github
          </Link>
        </li>
        <li className="h-[40px] cursor-pointer">
          <Link href="/about" className="flex h-full items-center text-[24px]  hover:font-bold">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
