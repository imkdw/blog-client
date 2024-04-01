import { Metadata } from 'next';
import ManageSidebar from '../../containers/manage/sidebar';
import generateCustomMetadata from '../../utils/metadata';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  ...generateCustomMetadata({
    title: '관리자 페이지',
    description: 'IMKDW Dev 관리자 페이지 입니다. 모두에게 공개되어 다양한 정보를 확인할 수 있습니다.',
    link: 'https://imkdw.dev/manage',
  }),
};

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex h-auto w-full flex-row gap-5 pb-10 pt-10">
      <h1 className="seo-only">IMKDW Dev 관리자 페이지 입니다. 모두에게 공개되어 다양한 정보를 확인할 수 있습니다.</h1>
      <ManageSidebar />
      {children}
    </main>
  );
}
