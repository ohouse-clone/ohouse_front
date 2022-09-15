import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './main-styled';
const SectionCate = () => {
  let Cate_list = [
    '가구',
    '페브릭',
    '가전',
    '유아·아동',
    '조명',
    '주방용품',
    '데코·식물',
    '수납·정리',
    '생활용품',
    '생필품',
    '공구·DIY',
    '인테리어시공',
    '반려동물',
    '캠핑용품',
    '실내운동',
  ];
  return (
    <S.Section height={82} cate>
      <h2>카테고리별 상품 찾기</h2>
      <div className="ul-area">
        <ul>
          {Cate_list.map((e, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/cate' + (i + 1) + '.jpg'}
                  layout="fill"
                  alt="cate"
                />
              </span>
              <span>{Cate_list[i]}</span>
            </li>
          ))}
        </ul>
        <div className="btn-area">
          <button>
            <MdKeyboardArrowLeft className="btn" />
          </button>
          <button>
            <MdKeyboardArrowRight className="btn" />
          </button>
        </div>
      </div>
    </S.Section>
  );
};

export default SectionCate;
