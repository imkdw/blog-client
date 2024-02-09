import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { useSwiper } from 'swiper/react';

interface Props {
  type: 'prev' | 'forward';
}

export default function SwiperButton({ type }: Props) {
  const swiper = useSwiper();

  const clickHandler = () => {
    if (type === 'prev') {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  };

  return (
    <button
      type="submit"
      aria-label={type === 'prev' ? 'prev-arrow-button' : 'next-arrow-button'}
      onClick={clickHandler}
    >
      {type === 'prev' ? (
        <ArrowBackIos sx={{ color: 'white', fontSize: 50 }} className="ml-[20px]" />
      ) : (
        <ArrowForwardIos sx={{ color: 'white', fontSize: 50 }} className="mr-[20px]" />
      )}
    </button>
  );
}
