import { deleteComment } from '../../../../services/comment';

interface Props {
  articleId: string;
  commentId: number;
}

export default function ArticleCommentDeleteButton({ articleId, commentId }: Props) {
  const deleteHandler = async () => {
    // eslint-disable-next-line no-alert
    const isAgreeDelete = window.confirm('댓글을 삭제하실껀가요?');
    if (isAgreeDelete) {
      await deleteComment(articleId, commentId);
      window.location.reload();
    }
  };

  return (
    <button type="button" onClick={deleteHandler} className="text-red-500">
      삭제
    </button>
  );
}
