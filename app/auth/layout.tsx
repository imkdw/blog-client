import AuthLogo from './_components/logo';

interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
		<div className="flex h-full w-full flex-col">
			<AuthLogo />
			{children}
		</div>
  );
}
