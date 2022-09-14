import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import MoveBtn from './MoveBtn';
import * as S from './main-styled';

const SectionExhibition = () => {
  return (
    <S.Section width={365} height={243} exhibition>
      <div>
        <h2>오늘의 기획전</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image
                src="/community-main/exhbx01.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>오늘의집 큐레이션 편집샵 오!굿즈</p>
              <h4>오직 여기서만, O!Goods</h4>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/exhbx02.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>오늘 주문하면, 내일 도착!</p>
              <h4>가구&가전 빠른배송 ~89%</h4>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/exhbx03.jpg"
                alt="review"
                layout="fill"
              />
            </span>
            <div className="content">
              <p>전시, 반품, 스크래치 득템의 기회!</p>
              <h4>빠른 품절! 리퍼마켓 ~85%</h4>
            </div>
          </li>
        </ul>
        <MoveBtn />
      </div>
    </S.Section>
  );
};

export default SectionExhibition;
