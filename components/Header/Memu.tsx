import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
						<Image
							src="/images/icon/github-mark.png"
							alt="github icon"
							width="40"
							height="40"
							title="깃허브 저장소로 이동합니다"
						/>
					</Link>
				</li>
				<li className="cursor-pointer">
					<Link href="/about">About me</Link>
				</li>
			</ul>
		</nav>
	);
}
