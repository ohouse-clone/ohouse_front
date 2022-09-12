import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { TiStarFullOutline } from 'react-icons/ti';
import MoveBtn from './MoveBtn';

const Section = styled.section`
  padding: 30px 0;
  div:first-child {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 20px;
      font-weight: 700;
    }
    span {
      font-size: 15px;
      color: #35c5f0;
      font-weight: 700;
    }
  }
  .ul-area {
    width: 100%;
    position: relative;
  }
  ul {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
    padding-top: 20px;

    li {
      div:nth-child(1) span {
        width: 269px;
        height: 269px;
        position: relative;
        border-radius: 6px;
        cursor: pointer;
        img {
          transition: transform 0.2s;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      div:nth-child(2) {
        padding: 9px 10px;
        display: flex;
        flex-direction: column;
        gap: 8px 0;
        h3 {
          font-size: 11px;
          color: #757575;
        }
        p {
          font-size: 13px;
          max-height: 34px;
          line-height: 17px;
          color: #424242;
        }
        div:nth-child(3) {
          display: flex;
          gap: 0 2px;
          font-weight: 700;
          font-size: 17px;
          line-height: 23px;
          strong {
            color: #f77;
          }
          span {
            color: #000;
          }
        }
        div:nth-child(4) {
          display: flex;
          gap: 0 2px;
          align-items: center;
          svg {
            width: 13px;
            height: 13px;
            color: #35c5f0;
          }
          span:nth-child(2) {
            color: #424242;
            font-weight: 700;
            font-size: 12px;
          }
          span:nth-child(3) {
            font-size: 12px;
            color: #9e9e9e;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
const SectionDeal = () => {
  return (
    <Section>
      <div>
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <div>
              <span>
                <Image src="/community-main/deal01.jpg" alt="deal" layout="fill" />
              </span>
            </div>
            <div>
              <h3>스타일링홈</h3>
              <p>
                [오늘의딜](10%쿠폰/1+1) 100%빛차단 완벽 메이든 암막커튼 11colors
              </p>
              <div>
                <strong>62%</strong>
                <span>29,900</span>
              </div>
              <div>
                <TiStarFullOutline />
                <span>4.6</span>
                <span>리뷰 15,819</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>
                <Image src="/community-main/deal02.jpg" alt="deal" layout="fill" />
              </span>
            </div>
            <div>
              <h3>산토리</h3>
              <p>[오늘의딜][해외] 위스키 가쿠빈 하이볼 잔 375ml x 2개 세트</p>
              <div>
                <strong>22%</strong>
                <span>25,450</span>
              </div>
              <div>
                <TiStarFullOutline />
                <span>5</span>
                <span>리뷰 7</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>
                <Image src="/community-main/deal03.jpg" alt="deal" layout="fill" />
              </span>
            </div>
            <div>
              <h3>리빙스토리</h3>
              <p>[오늘의딜][해외] 1+1 원터치 인테리어 미니휴지통 3colors</p>
              <div>
                <strong>47%</strong>
                <span>8,900</span>
              </div>
              <div>
                <TiStarFullOutline />
                <span>4.7</span>
                <span>리뷰 7,444</span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span>
                <Image src="/community-main/deal04.jpg" alt="deal" layout="fill" />
              </span>
            </div>
            <div>
              <h3>홈앤하우스</h3>
              <p>[오늘의딜] 드디어 재입고! 모노 논슬립 라운딩 옷걸이 40개</p>
              <div>
                <strong>39%</strong>
                <span>13,900</span>
              </div>
              <div>
                <TiStarFullOutline />
                <span>4.7</span>
                <span>리뷰 15,528</span>
              </div>
            </div>
          </li>
        </ul>
        <MoveBtn/>
      </div>
    </Section>
  );
};

export default SectionDeal;
