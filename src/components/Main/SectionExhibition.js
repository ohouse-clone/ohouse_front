import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Section = styled.section`
  padding: 30px 0;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 15px;
      color: #35c5f0;
    }
  }
  .ul-area {
    width: 100%;
    padding-top: 30px;
    position:relative;
    ul {
      display: flex;
      gap: 0 20px;

      li {
        width: 365px;
        > span:nth-child(1) {
          display: flex;
          height: 243px;
          position: relative;
          cursor: pointer;
          span:nth-child(1) {
            border-radius: 6px;
          }
          img {
            transition: transform 0.2s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        div{
            padding:12px;
            p{
                font-size:13px;
                line-height:150%;
                padding-bottom:5px;
            }
            h4{
                font-size:15px;
                font-weight:700;

            }
        }
    }
      .btn-area {
    width: 100%;
    position: absolute;
    left: 0;
    top: 40%;
    display: flex;
    justify-content: space-between;
    background: gold;
    button {
      width: 40px;
      height: 40px;
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
      border: none;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        font-size: 60px;
        cursor: pointer;
      }
    }
    button:nth-child(1) {
      position: absolute;
      left: -20px;
      backgrount: blue;
    }
    button:nth-child(2) {
      position: absolute;
      right: -20px;
    }
  }
}
.btn-area {
    width: 100%;
    position: absolute;
    left: 0;
    top: 40%;
    display: flex;
    justify-content: space-between;
    background: gold;
    button {
      width: 40px;
      height: 40px;
      background-color: #fff;
      box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
      border: none;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
        font-size: 60px;
        cursor: pointer;
      }
    }
    button:nth-child(1) {
      position: absolute;
      left: -20px;
      backgrount: blue;
    }
    button:nth-child(2) {
      position: absolute;
      right: -20px;
    }
  }
    

`;
const SectionExhibition = () => {
  return (
    <Section>
      <div>
        <h2>오늘의 기획전</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image src="/community-main/exhbx01.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>오늘의집 큐레이션 편집샵 오!굿즈</p>
              <h4>오직 여기서만, O!Goods</h4>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/exhbx02.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>오늘 주문하면, 내일 도착!</p>
              <h4>가구&가전 빠른배송 ~89%</h4>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/exhbx03.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>전시, 반품, 스크래치 득템의 기회!</p>
              <h4>빠른 품절! 리퍼마켓 ~85%</h4>
            </div>
          </li>
        </ul>
        <div className="btn-area">
          <button>
            <MdKeyboardArrowLeft className="btn" />
          </button>
          <button>
            <MdKeyboardArrowRight className="btn" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SectionExhibition;
