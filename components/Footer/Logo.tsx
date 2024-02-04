import Image from 'next/image';

export default function FooterLogo() {
	return (
		<div className="flex h-[40%] w-full items-end justify-center">
			<Image src="/images/logo_black.svg" alt="로고 이미지" width={100} height={40} />
		</div>
	);
}
