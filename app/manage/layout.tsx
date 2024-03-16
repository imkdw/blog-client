import ManageSidebar from '../../containers/manage/sidebar';

interface Props {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex h-auto w-full flex-row gap-5 pb-10 pt-10">
      <ManageSidebar />
      {children}
    </main>
  );
}
