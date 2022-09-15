import React from 'react';
import Image from 'next/image';
import * as S from './main-styled';
const SectionNav = () => {
  let Cate_list = [
    '쇼핑하기',
    '빠른배송',
    'N평집들이',
    '공간별사진',
    '리모델링',
    '쉬운이사',
    '오늘의딜',
    '갖고싶었던',
    '슈퍼세일',
    '행복주택',
  ];
  return (
    <S.Section nav>
      <ul>
        {Cate_list.map((e, i) => (
          <li key={i}>
            <span>
              <Image
                src={'/community-main/menu' + (i + 1) + '.jpg'}
                layout="fill"
                alt="menu"
              />
            </span>
            <span>{Cate_list[i]}</span>
          </li>
        ))}
      </ul>
    </S.Section>
  );
};

export default SectionNav;
