import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

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
        width: 173px;
        > span:nth-child(1) {
          display: flex;
          height: 173px;
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
            padding:15px 0;
            display:flex;
            flex-direction:column;
            gap:10px 0;
            p{
                font-size:13px;
                line-height:150%;
                padding-bottom:5px;
                height:36px;
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient:vertical;
            }
            span{
                font-size:15px;
                font-weight:700;
                strong{
                    color:#35c5f0;
                    margin-right:5px;
                }
            }
        }
    }
  `;
const SecitonPremium = () => {
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
              <Image src="/community-main/premium01.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>[10% 쿠폰][연휴특가][빠른배송] 호랑 커트러리 테이블세트</p>
              <span>52,000</span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/premium02.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>[빠른배송] 비트라 임스 엘리펀트 스몰 (5 Colors)</p>
              <span>147,000</span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/premium03.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>
                [해외] Louis Poulsen 판텔라 포터블 테이블 램프/관세 배송비 포함
              </p>
              <span>
                <strong>16%</strong>318,000
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/premium04.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>[빠른배송] 프리츠한센 시리즈 7체어</p>
              <span>
                <strong>16%</strong>599,500
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/premium05.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>
                [빠른배송] 카르텔 스몰 고스트 버스터 26%
              </p>
              <span>
                <strong>26%</strong>462,750
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/premium06.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <p>데이비드 멜러 프로방살 커틀러리 6종</p>
              <span>28,000</span>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default SecitonPremium;
