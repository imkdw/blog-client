import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { deleteArticle } from '../../../services/article';

interface Props {
  articleId: string;
}

export default function ArticleManageButtons({ articleId }: Props) {
  const router = useRouter();

  const deleteHandler = async () => {
    // eslint-disable-next-line no-alert
    const isConfirm = window.confirm('정말 삭제하실껀가요?');
    if (!isConfirm) return;

    await deleteArticle(articleId);
    router.push('/articles');
  };

  return (
    <div className="flex flex-row justify-end gap-2">
      <button type="button" onClick={deleteHandler} className="text-red-500">
        삭제
      </button>
      <Link href={`/articles/${articleId}/edit`} className="text-blue-600">
        수정
      </Link>
    </div>
  );
}
