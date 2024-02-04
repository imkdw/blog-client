import Image from 'next/image';
import Link from 'next/link';
import { Instagram, GitHub, MailOutline } from '@mui/icons-material';

export default function FooterContact() {
	const GITHUB_LINK = 'https://github.com/imkdw';
	const INSTAGRAM_LINK = 'https://www.instagram.com/woo_dong_99';
	const EMAIL_ADDRESS = 'imkdw@kakao.com';

	return (
		<ul className="flex h-[25%] w-[30%] items-center justify-evenly">
			<li>
				<Link href={GITHUB_LINK} target="_blank">
					<GitHub sx={{ width: '35px', height: '35px' }} />
				</Link>
			</li>
			<li>
				<Link href={INSTAGRAM_LINK} target="_blank">
					<Instagram sx={{ width: '35px', height: '35px' }} />
				</Link>
			</li>
			<li>
				<Link href={`mailto:${EMAIL_ADDRESS}`}>
					<MailOutline sx={{ width: '35px', height: '35px' }} />
				</Link>
			</li>
		</ul>
	);
}
