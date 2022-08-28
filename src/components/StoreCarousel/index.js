import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const StyledSlider = styled(Slider)`
  .slick-arrow .slick-prev {
  }
  .slick-arrow .slick-next {
  }

  .slick-dots {
    bottom: 40px;

    li {
      width: 2px;
      height: 2px;
      margin: 0 7px;

      button {
        width: 2px;
        height: 2px;
      }
      button:before {
        width: 2px;
        height: 2px;
        color: white;
      }
    }
  }
`;

const SliderImage = styled.div`
  position: relative;
  width: 100vw;

  min-height: 400px;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    object-position: center center;
  }
`;

export default function Carousel() {
  const customSliderRef = useRef();

  const SlickNext = () => {
    customSliderRef.current.slickNext();
  };

  const SlickPrev = () => {
    customSliderRef.current.slickPrev();
  };

  const SlickGoTo = (num, e) => {
    customSliderRef.current.slickGoTo(num);
  };

  return (
    <>
      <StyledSlider {...settings} ref={customSliderRef}>
        <SliderImage>
          <img src="/store-main-image/image1.jpg" alt="" />
        </SliderImage>
        <SliderImage>
          <img src="/store-main-image/image2.jpg" alt="" />
        </SliderImage>
        <SliderImage>
          <img src="/store-main-image/image3.jpg" alt="" />
        </SliderImage>
        <SliderImage>
          <img src="/store-main-image/image4.jpg" alt="" />
        </SliderImage>
        <SliderImage>
          <img src="/store-main-image/image5.jpg" alt="" />
        </SliderImage>
      </StyledSlider>
      <div>
        <button onClick={e => SlickGoTo(0)}>주말특가</button>
        <button onClick={e => SlickGoTo(1)}>베스트 브랜드</button>
        <button onClick={e => SlickGoTo(2)}>OI푸드위크</button>
        <button onClick={e => SlickGoTo(3)}>LG전자 세일</button>
        <button onClick={e => SlickGoTo(4)}>특가 찬스</button>
        <button onClick={SlickPrev}>Prev</button>
        <button onClick={SlickNext}>Next</button>
      </div>
    </>
  );
}
