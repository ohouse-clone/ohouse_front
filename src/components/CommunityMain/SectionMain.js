import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Slider from 'react-slick';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AiFillRead } from 'react-icons/ai';

const Section = styled.section`
  height: 564px;
  display: flex;
  gap: 0 20px;
  .img-area {
    position: relative;
    &:hover ${'.more'} {
      background-color: #35c5f0;
      border: 1px solid #35c5f0;
    }
  }
  .img-area::after {
    width: 100%;
    height: 50%;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
    cursor: pointer;
    border-radius: 0 6px 6px;
  }
  .main-img {
    width: 847px;
    height: 100%;
    cursor: pointer;
    > span {
      border-radius: 6px;
    }
    img {
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .img-title {
    width: 100%;
    z-index: 500;
    display: flex;
    justify-content: space-between;
    align-item: center;
    padding: 40px;
    position: absolute;
    left: 0;
    bottom: 0;
    .title {
      display: flex;
      flex-direction: column;
      gap: 10px;
      h3 {
        font-size: 32px;
        font-weight: 700;
        color: #fff;
      }
      .profile {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .profile > span:nth-child(1) {
        display: block;
        position: relative;
        width: 22px;
        height: 22px;
      }
      .profile span {
        font-size: 13px;
        font-weight: 700;
        color: #fff;
        border-radius: 12px;
      }
    }
    .more {
      width: 142px;
      height: 52px;
      line-height: 52px;
      color: #fff;
      text-align: Center;
      font-weight: 700;
      border-radius: 4px;
      border: 1px solid #fff;
      transition: all 200ms ease;
    }
  }
  // 메인배너
  .slider-area {
    width: 269px;
    position: relative;
    cursor: pointer;

    &:hover ${'button'} {
      opacity: 1;
    }
    .slick-slider {
      height: 100%;
    }
  }
  .slick-list {
    height: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 6px;
  }
  .slick-list div:first-child {
    display: flex;
  }
  .slick-track {
    div:nth-child(1) {
      width: 100%;
      height: 100%;
      img {
        transition: transform 200ms;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #fff;
    border: none;
    position: absolute;
    top: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
    transition: opacity 200ms ease-in-out;
    font-size: 50px;
    display: flex;
    align-items: center;
    z-index: 900;
    opacity: 0;
  }

  .slick-prev {
    left: -20px;
  }
  .slick-next {
    right: -20px;
  }
`;

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      <MdKeyboardArrowRight />
    </button>
  );
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      <MdKeyboardArrowLeft />
    </button>
  );
}

export default class SectionMain extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
      pauseOnHover: true,
      autoplay: true,
      autoPlaySpeed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Section>
        <div className="img-area">
          <div className="main-img">
            <Image src="/community-main/mainImg.jpg" alt="main" layout="fill" />
          </div>
          <div className="img-title">
            <div className="title">
              <h3>40년 넘은 구옥, 의미있는 신혼집으로-</h3>
              <div className="profile">
                <span>
                  <Image
                    src="/community-main/profile.jpg"
                    alt="profile"
                    layout="fill"
                  />
                </span>
                <span>성수부부</span>
              </div>
            </div>
            <div className="more">
              <p>보러가기</p>
            </div>
          </div>
        </div>
        <div className="slider-area">
          <Slider {...settings}>
            <Image
              src="/community-main/banner01.jpg"
              alt="banner"
              width={269}
              height="100%"
            />
            <Image
              src="/community-main/banner02.jpg"
              alt="banner"
              width={269}
              height="100%"
            />
            <Image
              src="/community-main/banner03.jpg"
              alt="banner"
              width={269}
              height="100%"
            />
            <Image
              src="/community-main/banner04.jpg"
              alt="banner"
              width={269}
              height="100%"
            />
          </Slider>
        </div>
      </Section>
    );
  }
}
