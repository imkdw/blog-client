import AuthLogo from './_components/logo';

interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex h-auto w-full flex-col gap-[50px] pb-10 pt-10">
      <AuthLogo />
      {children}
    </div>
  );
}
