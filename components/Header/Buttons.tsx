'use client';

import Link from 'next/link';
import { AccountCircle, Language, LightMode, DarkMode } from '@mui/icons-material';
import { useState } from 'react';

export default function HeaderButtons() {
	const [themeMode, setThemeMode] = useState('LIGHT');

	const themeChangeHandler = () => {
		const willChangeThemeMode = themeMode === 'LIGHT' ? 'DARK' : 'LIGHT';
		setThemeMode(willChangeThemeMode);
	};

	return (
		<ul className="flow-row flex h-[40px] w-[20%] items-center justify-between">
			<li>
				{/* TODO: 설정된 테마 모드에 따라서 아이콘 분기처리 */}
				<button onClick={themeChangeHandler}>{themeMode === 'LIGHT' ? <LightMode /> : <DarkMode />}</button>
			</li>
			<li>
				<button>
					<Language />
				</button>
			</li>
			<li>
				{/* TODO: 로그인 여부에 따라서 마이페이지 또는 로그인 페이지로 이동 분기처리 */}
				<Link href="/login">
					<AccountCircle />
				</Link>
			</li>
		</ul>
	);
}
