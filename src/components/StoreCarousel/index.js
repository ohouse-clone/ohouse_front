import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';
import styled from 'styled-components';
import { useRef } from 'react';

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

const SliderButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: transparent;
    border: 1px solid #ededed;
    height: 40px;
    padding: 0 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ededed;
    transition: 0.5s;
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
    console.log('datasetnum', e.target.dataset.num);

    console.log(customSliderRef.current.innerSlider.state.currentSlide);
    console.log(customSliderRef);
  };

  return (
    <>
      <StyledSlider {...settings} ref={customSliderRef}>
        <SliderImage>
          <Image src="/store-main-image/image1.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image2.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image3.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image4.jpg" alt="" layout="fill" />
        </SliderImage>
        <SliderImage>
          <Image src="/store-main-image/image5.jpg" alt="" layout="fill" />
        </SliderImage>
      </StyledSlider>
      <SliderButtonContainer>
        <button onClick={e => SlickGoTo(0, e)} data-num="0">
          주말특가
        </button>
        <button onClick={e => SlickGoTo(1, e)} data-num="1">
          베스트 브랜드
        </button>
        <button onClick={e => SlickGoTo(2, e)} data-num="2">
          OI푸드위크
        </button>
        <button onClick={e => SlickGoTo(3, e)} data-num="3">
          LG전자 세일
        </button>
        <button onClick={e => SlickGoTo(4, e)} data-num="4">
          특가 찬스
        </button>
        <button onClick={SlickPrev}>Prev</button>
        <button onClick={SlickNext}>Next</button>
      </SliderButtonContainer>
    </>
  );
}
