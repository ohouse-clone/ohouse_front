import React from 'react';
import Image from 'next/image';
import * as S from './main-styled';
const PREMIUM_DATE = [
  {
    title: '[10% 쿠폰][연휴특가][빠른배송] 호랑 커트러리 테이블세트',
    price: '52,000',
  },
  {
    title: '[빠른배송] 비트라 임스 엘리펀트 스몰 (5 Colors)',
    price: '147,000',
  },
  {
    title: '[해외] Louis Poulsen 판텔라 포터블 테이블 램프/관세 배송비 포함',
    price: '318,000',
    percentage: '16%',
  },
  {
    title: '[빠른배송] 프리츠한센 시리즈 7체어',
    price: '599,500',
    percentage: '16%',
  },
  {
    title: '[빠른배송] 카르텔 스몰 고스트 버스터',
    price: '462,750',
    percentage: '26%',
  },
  {
    title: '데이비드 멜러 프로방살 커틀러리 6종',
    price: '28,000',
  },
];
const SectionPremium = () => {
  return (
    <S.Section width={173} height={173} premium>
      <div>
        <h2>프리미엄도 오늘의집!</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {PREMIUM_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/premium0' + (i + 1) + '.jpg'}
                  alt="premium"
                  layout="fill"
                />
              </span>
              <div className="content">
                <p>{data.title}</p>
                <span>
                  <strong>{data.percentage}</strong>
                  {data.price}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionPremium;
