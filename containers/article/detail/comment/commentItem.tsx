'use client';

import { useState } from 'react';

import { IComment } from '../../../../types/comment';
import CommentUser from './commentUser';
import ArticleCommentDeleteButton from './deleteButton';
import CommentEditForm from './editForm';

interface Props {
  comment: IComment;
  articleId: string;
}

export default function CommentItem({ comment, articleId }: Props) {
  const [commentEditStates, setCommentEditStates] = useState<{ [key: number]: boolean }>({});

  const editCommentHandler = (commentId: number) => {
    setCommentEditStates((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const replyHandler = () => {
    // eslint-disable-next-line no-alert
    window.alert('준비중인 기능입니다.');
  };

  return (
    <li className="flex w-full flex-col items-end border-b border-gray-300 pb-3">
      {/* 기본 댓글 */}
      <div className="flex h-[60px] w-full flex-row justify-between">
        <CommentUser createdAt={comment.createdAt} nickname={comment.user.nickname} profile={comment.user.profile} />
        <div className="flex flex-row gap-3">
          {comment.user.isAuthor && !commentEditStates[comment.id] && (
            <>
              <button type="button" onClick={() => editCommentHandler(comment.id)} className="text-blue-600">
                수정
              </button>
              <ArticleCommentDeleteButton commentId={comment.id} articleId={articleId} />
            </>
          )}
        </div>
      </div>
      {commentEditStates[comment.id] ? (
        <CommentEditForm
          commentId={comment.id}
          articleId={articleId}
          existContent={comment.content}
          cancelUpdate={editCommentHandler}
        />
      ) : (
        <>
          <p className="w-full p-1 pb-3">{comment.content}</p>
          <div className="flex w-full justify-start">
            <button type="button" className="text-sm font-bold" onClick={replyHandler}>
              답글
            </button>
          </div>
        </>
      )}
    </li>
  );
}
