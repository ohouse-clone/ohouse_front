import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
const Section = styled.section`
  padding: 30px 0;
  div:first-child {
    width: 100%;
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
  ul {
    padding-top: 20px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  li {
    width: 269px;
    height: 269px;
    position: relative;
    cursor: pointer;
    span:nth-child(1) {
      border-radius: 6px;
      img {
        transition: transform 0.2s;
        &:hover {
          transform: scale(1.1);
        }
      }
      &::after {
        width: 100%;
        height: 50%;
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.2));
      }
    }
    div {
      display: flex;
      position: absolute;
      gap: 0 3px;
      bottom: 20px;
      left: 20px;
      align-items: center;

      span:nth-child(1) {
        width: 22px;
        height: 22px;
        position: relative;
        border: 2px solid rgba(255, 255, 255, 0.7);
        border-radius: 100%;
        img {
          border-radius: 100%;
        }
      }
      span:nth-child(2) {
        color: #fff;
        font-size: 13px;
        font-weight: 700;
      }
    }
  }
`;
const SectionPPL = () => {
  return (
    <Section>
      <div>
        <h2>오늘의 인기 사진</h2>
        <span>더보기</span>
      </div>
      <ul>
        <li>
          <span>
            <Image src="/community-main/ppl-main01.jpg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile01.jpeg" alt="main" layout="fill" />
            </span>
            <span>suhou_s</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main02.jpeg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile02.jpeg" alt="main" layout="fill" />
            </span>
            <span>애3있는집</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main03.jpeg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile03.jpeg" alt="main" layout="fill" />
            </span>
            <span>joy__ful.m.j</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main04.jpeg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile04.jpeg" alt="main" layout="fill" />
            </span>
            <span>soro_day</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main05.jpg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile05.jpeg" alt="main" layout="fill" />
            </span>
            <span>BlauesHaus</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main06.jpeg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile06.jpg" alt="main" layout="fill" />
            </span>
            <span>쥬디포레스트</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main07.jpeg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile07.jpg" alt="main" layout="fill" />
            </span>
            <span>숨한모금</span>
          </div>
        </li>
        <li>
          <span>
            <Image src="/community-main/ppl-main08.jpg" alt="main" layout="fill" />
          </span>
          <div>
            <span>
              <Image src="/community-main/ppl-profile08.jpeg" alt="main" layout="fill" />
            </span>
            <span>넷이사는집</span>
          </div>
        </li>
      </ul>
    </Section>
  );
};

export default SectionPPL;
