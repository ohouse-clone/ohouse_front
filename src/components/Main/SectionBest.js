import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Section = styled.section`
  padding: 30px 0;
  h2 {
    font-weight: 700;
    font-size: 20px;
  }

  .ul-area {
    width: 100%;
    padding-top: 10px;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    ul {
      display: flex;
      width: 2000px;
      gap: 0 20px;

      > li {
        padding: 10px 15px;
        font-size: 15px;
        color: #757575;
        font-weight: 700;
      }
      li:first-child {
        color: #35c5f0;
      }
      
    }
  }
  .ol-area {
    padding-top: 10px;
    ol {
      display: flex;
      gap: 0 20px;
      li {
        width: 269px;
        > span:nth-child(1) {
          display: flex;
          height: 269px;
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
        div {
          padding: 15px 0;
          display: flex;
          flex-direction: column;
          gap: 10px 0;
          p {
            font-size: 13px;
            line-height:120%;
          }
          span {
            font-size: 15px;
            font-weight: 700;
            strong {
              color: #35c5f0;
              margin-right: 5px;
            }
          }
        }
      }
      li:last-child{
        cursor:pointer;
        height:269px;
        display:flex;
        flex-direction:column;
        font-size:20px;
        font-weight:700;
        color:#424242;
        align-items:center;
        justify-content:center;
        gap:15px 0;
        background-color:#f5f5f5;
        transition:background-color 0.2s;
        border-radius:6px;
        span{
            display:flex;
            background-color:#fff;
            border-radius:50%;
            width:40px;
            height:40px;
            // line-height:40px;
            // text-align:center;
            align-items:center;
        justify-content:center;
            font-size:30px;
            box-shadow:0 2px 4px 0 rgb(0 0 0 / 20%);
        }
        &:hover{
            background-color:#ddd;
        }
      }
    }
  }
`;
const SectionBest = () => {
  return (
    <Section>
      <h2>베스트</h2>
      <div className="ul-area">
        <ul>
          <li>전체</li>
          <li>가구</li>
          <li>패브릭</li>
          <li>조명</li>
          <li>가전</li>
          <li>주방용품</li>
          <li>데코·식물</li>
          <li>수납·정리</li>
          <li>생활용품</li>
          <li>생필품</li>
          <li>공구·DIY</li>
          <li>인테리어시공</li>
          <li>반려동물</li>
          <li>캠핑용품</li>
          <li>실내운동</li>
          <li>유아·아동</li>
          <li>렌탈</li>
        </ul>
      </div>
      <div className="ol-area">
        <ol>
          <li>
            <span>
              <Image src="/community-main/best01.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>Q4 유로탑 롤팩 매트리스 2size</p>
              <span>
                <strong>59%</strong>287,900
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/best02.jpeg" alt="review" layout="fill" />
            </span>
            <div>
              <p>
                [연휴특가][5%쿠폰] 비침없는 도톰
                레이스/쉬폰커튼(나비주름/핀형/봉집)
              </p>
              <span>
                <strong>55%</strong>19,900
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/best03.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>
                [연휴특가] 편안한 제주 필로우탑 본넬스프링 침대 매트리스
                (싱글/슈퍼싱글/퀸/킹)
              </p>
              <span>
                <strong>57%</strong>104,900
              </span>
            </div>
          </li>
          <li>
            <h3>베스트셀러 더보기</h3>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </li>
        </ol>
      </div>
    </Section>
  );
};

export default SectionBest;
