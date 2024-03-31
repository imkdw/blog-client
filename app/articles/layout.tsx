import { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ArticlesLayout({ children }: Props) {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
      <h1 className="seo-only">
        오픈소스 기술블로그 IMKDW Dev 입니다. 해당 페이지에서는 카테고리별로 분류된 다양한 게시글을 확인할 수 있습니다.
      </h1>
      {children}
    </Suspense>
  );
}
