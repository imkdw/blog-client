import FooterContact from './Contact';
import FooterDescription from './Description';

export default function Footer() {
  return (
    <footer className="flex h-[180px] w-full max-w-[1400px] flex-col items-center justify-evenly bg-[#f0f0f0]">
      <FooterContact />
      <FooterDescription />
    </footer>
  );
}
