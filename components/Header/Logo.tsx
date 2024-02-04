import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLogo() {
	return (
		<div className="flex h-[40px] w-[20%] items-center justify-center">
			<Link href="/">
				<Image src="/images/logo.svg" alt="로고 이미지" width="120" height="150" />
			</Link>
		</div>
	);
}
