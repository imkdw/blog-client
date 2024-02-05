import HeaderButtons from './Buttons';
import HeaderLogo from './Logo';
import HeaderMenu from './Memu';

export default function Header() {
  return (
    <header className="fixed z-10 flex h-[120px] w-full max-w-[1200px] items-end bg-white">
      <div className="flex h-[100px] w-full flex-row items-center justify-center">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderButtons />
      </div>
    </header>
  );
}
