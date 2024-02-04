import Link from 'next/link';
import { Google, GitHub } from '@mui/icons-material';
import Image from 'next/image';

export default function SnsSignIn() {
	return (
		<ul className="relative flex h-[90px] w-[50%] flex-row items-end justify-center gap-[30px] border-t border-gray-300">
			<p className="absolute top-[-13px] w-[40%] bg-white text-center text-[15px] text-gray-400">SNS 계정으로 로그인</p>
			<li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
				<Link href="">
					<Image src="/images/icon/google.png" alt="facebook" width="35" height="35" />
				</Link>
			</li>
			<li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
				<Link href="">
					<GitHub sx={{ width: '35px', height: '35px' }} />
				</Link>
			</li>
			<li className="flex h-[50px] w-[50px] items-center justify-center rounded-[10px] border border-gray-300">
				<Link href="">
					<Image
						src="/images/icon/kakaotalk.png"
						alt="facebook"
						width="35"
						height="35"
						style={{ borderRadius: '5px' }}
					/>
				</Link>
			</li>
		</ul>
	);
}
