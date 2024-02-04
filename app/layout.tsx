import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './global.css';
import Header from '../components/Header/Header';
import clsx from 'clsx';
import Footer from '../components/Footer/Footer';

/**
 * 글로벌 폰트로 Noto Sans를 사용
 */
const notoSans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'IMKDW Dev - Tech Blog',
	description: `오픈소스로 운영되는 IMKDW의 기술블로그입니다. 다양한 기술과 경험을 공유합니다`,
};

interface Props {
	readonly children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
	return (
		<html lang="ko" className={clsx('flex items-start justify-center')}>
			<body className={clsx('w-full lg:w-full', notoSans.className)}>
				<Header />
				<div className="flex min-h-[1000px] max-w-[1200px] items-center justify-center pt-[120px]">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
