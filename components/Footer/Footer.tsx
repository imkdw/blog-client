import FooterContact from './Contact';
import FooterDescription from './Description';
import FooterLogo from './Logo';

export default function Footer() {
	return (
		<footer className="flex h-[250px] w-full max-w-[1200px] flex-col items-center justify-evenly bg-[#f0f0f0]">
			<FooterLogo />
			<FooterContact />
			<FooterDescription />
		</footer>
	);
}
