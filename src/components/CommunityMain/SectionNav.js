import React from 'react';
import Image from 'next/image';
import * as S from './main-styled';
const SectionNav = () => {
  return (
    <S.Section nav>
      <ul>
        <li>
          <span>
            <Image src="/community-main/menu01.jpg" layout="fill" alt="menu" />
          </span>
          <span>쇼핑하기</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu02.jpg" layout="fill" alt="menu" />
          </span>
          <span>빠른배송</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu03.jpg" layout="fill" alt="menu" />
          </span>
          <span>N평집들이</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu04.jpg" layout="fill" alt="menu" />
          </span>
          <span>공간별사진</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu05.jpg" layout="fill" alt="menu" />
          </span>
          <span>리모델링</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu06.jpg" layout="fill" alt="menu" />
          </span>
          <span>쉬운이사</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu07.png" layout="fill" alt="menu" />
          </span>
          <span>오늘의딜</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu08.png" layout="fill" alt="menu" />
          </span>
          <span>갖고싶었던</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu09.png" layout="fill" alt="menu" />
          </span>
          <span>슈퍼세일</span>
        </li>
        <li>
          <span>
            <Image src="/community-main/menu10.png" layout="fill" alt="menu" />
          </span>
          <span>행복주택</span>
        </li>
      </ul>
    </S.Section>
  );
};

export default SectionNav;
