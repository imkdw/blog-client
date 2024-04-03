'use client';

import { useEffect, useState } from 'react';
import { Favorite, FavoriteBorder, Comment, Share } from '@mui/icons-material';
import { patchToggleArticleLike } from '../../../services/article';

interface Props {
  articleId: string;
  _likeCount: number;
  commentCount: number;
  _isLike: boolean;
  thumbnail: string;
  title: string;
  summary: string;
}

export default function ArticleUtilButtons({
  articleId,
  _likeCount,
  commentCount,
  _isLike,
  thumbnail,
  summary,
  title,
}: Props) {
  const [isLike, setIsLike] = useState(_isLike);
  const [likeCount, setLikeCount] = useState(_likeCount);
  const [kakao, setKakao] = useState<any>(null);

  useEffect(() => {
    const KAKAO_JS_KEY = '0f838e18a0431482dd4373159ff37c8e';

    if (typeof window !== 'undefined') {
      const { Kakao } = window as any;
      setKakao(Kakao);

      if (!Kakao.isInitialized()) {
        Kakao.init(KAKAO_JS_KEY);
      }
    }
  }, []);

  const kakaoShareHandler = () => {
    if (kakao) {
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: summary,
          imageUrl: thumbnail,
          link: {
            mobileWebUrl: `https://imkdw.dev/articles/${articleId}`,
            webUrl: `https://imkdw.dev/articles/${articleId}`,
          },
        },
        social: {
          likeCount: _likeCount,
          commentCount,
        },
        buttons: [
          {
            title: '이동하기',
            link: {
              mobileWebUrl: `https://imkdw.dev/articles/${articleId}`,
              webUrl: `https://imkdw.dev/articles/${articleId}`,
            },
          },
        ],
      });
    }
  };

  const likeHandler = async () => {
    const response = await patchToggleArticleLike(articleId);
    setIsLike(response.isLiked);
    setLikeCount(response.likeCount);
  };

  return (
    <div className="flex h-[60px] w-full flex-row justify-between border-y border-gray-300">
      <button type="button" className="flex w-1/3 flex-row items-center justify-center gap-2" onClick={likeHandler}>
        <div>{isLike ? <Favorite /> : <FavoriteBorder />}</div>
        <p className="text-base text-gray-500">좋아요 · {likeCount}개</p>
      </button>
      <button type="button" className="flex w-1/3 flex-row items-center justify-center gap-2">
        <Comment />
        <p className="text-base text-gray-500">댓글 · {commentCount}개</p>
      </button>
      <button
        type="button"
        className="flex w-1/3 flex-row items-center justify-center gap-2"
        onClick={kakaoShareHandler}
      >
        <Share />
        <p className="text-base text-gray-500">공유하기</p>
      </button>
    </div>
  );
}
