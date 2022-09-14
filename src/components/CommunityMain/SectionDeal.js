import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { TiStarFullOutline } from 'react-icons/ti';
import MoveBtn from './MoveBtn';
import * as S from './main-styled';

const SectionDeal = () => {
  return (
    <S.Section width={269} height={269} deal>
      <div>
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image
                src="/community-main/deal01.jpg"
                alt="deal"
                layout="fill"
              />
            </span>
            <div className="content">
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
            <span>
              <Image
                src="/community-main/deal02.jpg"
                alt="deal"
                layout="fill"
              />
            </span>
            <div className="content">
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
            <span>
              <Image
                src="/community-main/deal03.jpg"
                alt="deal"
                layout="fill"
              />
            </span>
            <div className="content">
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
            <span>
              <Image
                src="/community-main/deal04.jpg"
                alt="deal"
                layout="fill"
              />
            </span>
            <div className="content">
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
        <MoveBtn />
      </div>
    </S.Section>
  );
};

export default SectionDeal;
