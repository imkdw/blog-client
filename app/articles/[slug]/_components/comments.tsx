import Image from 'next/image';
import { MoreHoriz, Reply } from '@mui/icons-material';

import { GetArticleCommentsResponseData } from '../../../../api/@types/response/article/article.interface';

interface Props {
  comments: GetArticleCommentsResponseData[];
}

export default function ArticleComments({ comments }: Props) {
  return (
    <ul className="flex w-full flex-col gap-6">
      {comments.map((comment) => (
        <li key={comment.id} className="flex w-full flex-col items-end gap-3 p-2">
          {/* 기본 댓글 */}
          <div className="flex w-full flex-row justify-between">
            <div className="flex flex-row gap-[10px]">
              <div>
                <Image src={comment.user.profile} alt="profile" width={50} height={50} className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <p>{comment.user.nickname}</p>
                <p className="text-[16px] text-gray-500">{comment.createAt}</p>
              </div>
            </div>
            <div>
              {comment.user.isWriter && (
                <button type="button" aria-label="comment menu button">
                  <MoreHoriz />
                </button>
              )}
              <button type="button" aria-label="comment reply button">
                <Reply />
              </button>
            </div>
          </div>
          <p className="w-full border-b border-gray-300 p-1 pb-3">{comment.content}</p>
          {/* {comment.replies.length ? (
            <ul className="flex w-[95%] flex-col gap-6 pt-6">
              {comment.replies.map((reply) => (
                <li key={reply.id} className="w-full border-l-4 p-4">
                  <div className="flex h-full w-full flex-col justify-center gap-2 pl-3">
                    <div className="flex flex-row justify-between">
                      <div className="flex flex-row gap-[10px]">
                        <div>
                          <Image
                            src={reply.user.profile}
                            alt="profile"
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p>{reply.user.nickname}</p>
                          <p className="text-[16px] text-gray-500">{comment.createdAt}</p>
                        </div>
                      </div>
                      <div>
                        {reply.user.isOwner && (
                          <button type="button" aria-label="comment menu button">
                            <MoreHoriz />
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="p-1">{reply.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null} */}
        </li>
      ))}
    </ul>
  );
}
