import { cookies, headers } from 'next/headers';
import clsx from 'clsx';

import { getComments } from '../../../../services/comment';
import { isMobile } from '../../../../utils/is-mobile';
import CommentItem from './commentItem';

interface Props {
  articleId: string;
}

export default async function Comments({ articleId }: Props) {
  const isMobileView = isMobile(headers());
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value || '';

  const response = await getComments(articleId, accessToken);

  return (
    <ul className={clsx('flex flex-col items-center gap-6', isMobileView ? 'w-[95%]' : 'w-full')}>
      {!response.comments.length && <div className="text-xl text-gray-400">댓글이 없습니다.. 댓글을 남겨주세요!</div>}
      {response.comments.map((comment) => (
        <CommentItem comment={comment} key={comment.id} articleId={articleId} />
      ))}
    </ul>
  );
}

/* {comment.replies.length ? (
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
                          <p className="text-sm text-gray-500">{comment.createdAt}</p>
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
          ) : null} */
