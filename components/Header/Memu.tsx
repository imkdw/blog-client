import Link from 'next/link';

export default function HeaderMenu() {
  return (
    <nav className="w-full">
      <ul className="flex justify-center">
        <li className="flex h-[40px] min-w-[200px] justify-center">
          <Link href="/articles" className="flex h-full items-center text-[24px]  hover:font-bold">
            Articles
          </Link>
        </li>
        <li className="flex h-[40px] min-w-[200px] cursor-pointer justify-center">
          <Link
            href="https://github.com/imkdw/blog"
            target="_blank"
            className="flex h-full items-center text-[24px]  hover:font-bold"
          >
            Github
          </Link>
        </li>
        <li className="flex h-[40px] min-w-[200px] cursor-pointer justify-center">
          <Link href="/about" className="flex h-full items-center text-[24px]  hover:font-bold">
            About me
          </Link>
        </li>
      </ul>
    </nav>
  );
}
