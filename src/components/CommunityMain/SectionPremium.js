import React from 'react';
import Image from 'next/image';
import * as S from './main-styled';

const SectionPremium = () => {
  return (
    <S.Section width={173} height={173} premium>
      <div>
        <h2>프리미엄도 오늘의집!</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image
                src="/community-main/premium01.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>[10% 쿠폰][연휴특가][빠른배송] 호랑 커트러리 테이블세트</p>
              <span>52,000</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/premium02.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>[빠른배송] 비트라 임스 엘리펀트 스몰 (5 Colors)</p>
              <span>147,000</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/premium03.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
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
              <Image
                src="/community-main/premium04.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>[빠른배송] 프리츠한센 시리즈 7체어</p>
              <span>
                <strong>16%</strong>599,500
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/premium05.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>[빠른배송] 카르텔 스몰 고스트 버스터 26%</p>
              <span>
                <strong>26%</strong>462,750
              </span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/premium06.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>데이비드 멜러 프로방살 커틀러리 6종</p>
              <span>28,000</span>
            </div>
          </li>
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionPremium;
