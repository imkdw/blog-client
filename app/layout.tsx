import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './global.css';
import Header from '../components/Header/Header';
import clsx from 'clsx';

/**
 * 글로벌 폰트로 Noto Sans를 사용
 */
const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'IMKDW Dev - Tech Blog',
	description: `오픈소스로 운영되는 IMKDW의 개발 블로그입니다. 다양한 기술과 경험을 공유합니다`,
};

interface Props {
	readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="ko" className={clsx('flex items-start justify-center')}>
			<body className={clsx('w-full lg:w-full', notoSans.className)}>
				<Header />
				<div className="max-w-[1200px] pt-[120px] ">{children}</div>
			</body>
		</html>
	);
}
