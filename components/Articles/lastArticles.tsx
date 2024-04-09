'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

import Link from 'next/link';
import SwiperButton from '../../app/_components/Swiper/swiper-button';
import { IArticleListItem } from '../../types/article';
import { MOBILE_WIDTH } from '../../constants/mobile.constant';

interface Props {
  articles: IArticleListItem[];
}
export default function LastArticles({ articles }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_WIDTH}px)`).matches;
    setIsMobile(match);
  }, []);

  SwiperCore.use([Navigation]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className={clsx('article-item relative rounded-[10px] pt-5', isMobile ? 'h-[250px] w-[90%]' : 'h-[450px] w-full')}
      effect="fade"
      loop
      autoplay={{
        delay: 2000,
      }}
      modules={[Autoplay]}
    >
      {/* 중앙 스와이퍼 아이콘 */}
      {!isMobile ? (
        <div className="absolute bottom-[50%] top-[50%] z-10 flex h-[50px] w-full -translate-y-[50%] flex-row justify-between">
          <SwiperButton type="prev" />
          <SwiperButton type="forward" />
        </div>
      ) : null}

      {articles.map((article) => (
        <SwiperSlide
          className="relative flex h-full w-full bg-cover"
          style={{
            backgroundImage: `url(${article.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          key={article.articleId}
        >
          {/* 사진 텍스트 */}
          <Link
            className="flex h-full flex-col justify-end gap-[20px] pb-[20px] pl-[20px]"
            href={`/articles/${article.articleId}`}
          >
            <h2 className="text-shadow text-[40px] font-bold text-[#e4e9f2]">{article.title}</h2>
            <div>
              <p className="text-shadow font-bold text-[#e4e9f2]">{article.summary}</p>
              <div className="flex flex-row justify-between">
                {/* <p className="text-shadow font-bold text-[#e4e9f2]">{article.</p> */}
                {/* <p className="text-shadow mr-[20px] flex items-center justify-center text-[18px] font-bold text-[#e4e9f2]">
                  테스트
                  <NavigateNext />
                  게시글
                </p> */}
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
