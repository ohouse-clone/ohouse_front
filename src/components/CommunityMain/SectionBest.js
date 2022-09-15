import React from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import * as S from './main-styled';

let Best_list = [
  '전체',
  '가구',
  '패브릭',
  '조명',
  '가전',
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
  '유아·아동',
  '렌탈',
];

const BEST_DATE = [
  {
    title: 'Q4 유로탑 롤팩 매트리스 2size',
    percentage: '59',
    price: '287,900',
  },
  {
    title:
      '[연휴특가][5%쿠폰] 비침없는 도톰레이스/쉬폰커튼(나비주름/핀형/봉집)',
    percentage: '55',
    price: '19,900',
  },
  {
    title:
      '[연휴특가] 편안한 제주 필로우탑 본넬스프링 침대 매트리스(싱글/슈퍼싱글/퀸/킹)',
    percentage: '57',
    price: '104,900',
  },
];

const SectionBest = () => {
  return (
    <S.Section best>
      <h2>베스트</h2>
      <div className="ol-area">
        <ol>
          {Best_list.map((e, i) => (
            <li key={i}>{Best_list[i]}</li>
          ))}
        </ol>
      </div>
      <div className="ul-area">
        <ul>
          {BEST_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/best0' + (i + 1) + '.jpg'}
                  alt="best"
                  layout="fill"
                />
              </span>
              <div>
                <p>{data.title}</p>
                <span>
                  <strong>{data.percentage + '%'}</strong>
                  {data.price}
                </span>
              </div>
            </li>
          ))}
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
