import React, { Component } from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import Slider from 'react-slick';
const Section = styled.section`
  height: 564px;
  display: flex;
  gap: 0 20px;
  .img-area {
    position: relative;
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
      // background-color: #35c5f0;
    }
  }
  .slider-area {
    width: 269px;
    height: 100%;
    background:red;
    div:nth-child(1){
      width:100%;
      height:100%;
    }
    div:nth-child(2){
      width:269px;
      height:100%;
      position:relative;
    }
  }
  .slick-prev:before {
    opaicty: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

export default class SectionMain extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
                  <Image src="/community-main/profile.jpg" alt="profile" layout="fill" />
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
            <div>
              <Image src="/community-main/banner01.jpg" alt="banner" layout="fill" />
            </div>
            <div>
              <Image src="/community-main/banner02.jpg" alt="banner" layout="fill" />
            </div>
            <div>
              <Image src="/community-main/banner03.jpg" alt="banner" layout="fill" />
            </div>
            <div>
              <Image src="/community-main/banner04.jpg" alt="banner" layout="fill" />
            </div>
          </Slider>
        </div>
      </Section>
    );
  }
}
