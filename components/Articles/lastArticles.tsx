'use client';

import { NavigateNext } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import SwiperButton from '../../app/_components/Swiper/swiper-button';

export default function LastArticles() {
  const slideImages = [
    {
      id: 1,
      image:
        'https://images.velog.io/post-images/chltndid724/9b356620-f234-11e9-b908-a36ade2c465a/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4%EA%B0%9C%EB%B0%9C%EC%9E%901.png',
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF5bJTh9Azdsjp2CLWu904q7JiUjtXw54BcQ&usqp=CAU',
    },
    {
      id: 3,
      image:
        'https://flexwork.cafe24.com/wp-content/uploads/2022/03/%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B71-4.jpg',
    },
  ];
  SwiperCore.use([Navigation]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      className="relative mt-[20px] h-[450px] w-full rounded-[10px]"
      effect="fade"
      loop
      autoplay={{
        delay: 2000,
      }}
      modules={[Autoplay]}
    >
      {/* 중앙 스와이퍼 아이콘 */}
      <div className="absolute bottom-[50%] top-[50%] z-10 flex h-[50px] w-full -translate-y-[50%] flex-row justify-between">
        <SwiperButton type="prev" />
        <SwiperButton type="forward" />
      </div>

      {slideImages.map((slide) => (
        <SwiperSlide
          className="relative flex h-full w-full bg-cover"
          style={{ backgroundImage: `url(${slide.image})` }}
          key={slide.id}
        >
          {/* 사진 텍스트 */}
          <div className="flex h-full flex-col justify-end gap-[20px] pb-[20px] pl-[20px]">
            <h2 className="text-shadow text-[40px] font-bold text-[#e4e9f2]">
              타입스크립트에서 SOLID 원칙에 의거한 OOP 설계하기
            </h2>
            <div>
              <p className="text-shadow font-bold text-[#e4e9f2]">
                타입스크립트에서 SOLID 원칙에 의거한 객체지향 설계에 대한 글 입니다.
              </p>
              <div className="flex flex-row justify-between">
                <p className="text-shadow font-bold text-[#e4e9f2]">
                  반복하지 않고 클린한 코드를 만드는 방법에 대해 소개합니다.
                </p>
                <p className="text-shadow mr-[20px] flex items-center justify-center text-[18px] font-bold text-[#e4e9f2]">
                  프로그래밍
                  <NavigateNext />
                  타입스크립트
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
