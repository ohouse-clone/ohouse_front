import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Section = styled.section`
  padding: 30px 0;
  .ul-area {
    // background:blue;
    position: relative;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  ul {
    padding-top: 20px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    gap: 0 30px;
    position: relative;
  }
  ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #2f3438;
    gap: 20px 0;
    flex:0 0 10%;
  }
  ul li span:first-child {
    width: 89px;
    height: 78px;
    position: relative;
  }
  ul li span:last-child {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #424242;
  }
  .btn-area {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    display: flex;
    justify-content: space-between;
    button {
      width: 32px;
      height: 32px;
      background-color: rgba(0, 0, 0, 0.16);
      border: none;
      border-radius: 50%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      .btn {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;
const SectionCate = () => {
  return (
    <Section>
      <h2>카테고리별 상품 찾기</h2>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image src="/community-main/cate01.jpg" layout="fill" alt="cate" />
            </span>
            <span>가구</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate02.jpg" layout="fill" alt="cate" />
            </span>
            <span>패브릭</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate03.jpg" layout="fill" alt="cate" />
            </span>
            <span>가전</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate04.jpg" layout="fill" alt="cate" />
            </span>
            <span>유아·아동</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate05.jpg" layout="fill" alt="cate" />
            </span>
            <span>조명</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate06.jpg" layout="fill" alt="cate" />
            </span>
            <span>주방용품</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate07.jpg" layout="fill" alt="cate" />
            </span>
            <span>데코·식물</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate08.jpg" layout="fill" alt="cate" />
            </span>
            <span>수납·정리</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate09.jpg" layout="fill" alt="cate" />
            </span>
            <span>생활용품</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate10.jpg" layout="fill" alt="cate" />
            </span>
            <span>생필품</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate11.jpg" layout="fill" alt="cate" />
            </span>
            <span>공구·DIY</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate12.jpg" layout="fill" alt="cate" />
            </span>
            <span>인테리어시공</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate13.jpg" layout="fill" alt="cate" />
            </span>
            <span>반려공물</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate14.jpg" layout="fill" alt="cate" />
            </span>
            <span>캠핑용품</span>
          </li>
          <li>
            <span>
              <Image src="/community-main/cate16.jpg" layout="fill" alt="cate" />
            </span>
            <span>실내운동</span>
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

export default SectionCate;
