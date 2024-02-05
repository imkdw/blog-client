import FooterContact from './Contact';
import FooterDescription from './Description';

export default function Footer() {
  return (
    <footer className="mt-[50px] flex h-[180px] w-full max-w-[1200px] flex-col items-center justify-evenly bg-[#f0f0f0]">
      <FooterContact />
      <FooterDescription />
    </footer>
  );
}
