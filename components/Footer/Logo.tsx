import Image from 'next/image';

export default function FooterLogo() {
	return (
		<div className="flex h-[35%] w-full items-end justify-center">
			<Image src="/images/logo.svg" alt="로고 이미지" width={100} height={40} />
		</div>
	);
}
