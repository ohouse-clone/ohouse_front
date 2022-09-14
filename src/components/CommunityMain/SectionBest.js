import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './main-styled';

const SectionBest = () => {
  return (
    <S.Section best>
      <h2>베스트</h2>
      <div className="ol-area">
        <ol>
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
        </ol>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image
                src="/community-main/best01.jpg"
                alt="review"
                layout="fill"
              />
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
              <Image
                src="/community-main/best02.jpeg"
                alt="review"
                layout="fill"
              />
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
              <Image
                src="/community-main/best03.jpg"
                alt="review"
                layout="fill"
              />
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
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionBest;
