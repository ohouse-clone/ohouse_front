import React from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import MoveBtn from './MoveBtn';
import * as S from './main-styled';
const DEAL_DATE = [
  {
    index: '스타일링홈',
    title: '[오늘의딜](10%쿠폰/1+1) 100%빛차단 완벽 메이든 암막커튼 11colors',
    percentage: '62',
    price: '29,900',
    grade: '4.6',
    count: '15,819',
  },
  {
    index: '산토리',
    title: '[오늘의딜][해외] 위스키 가쿠빈 하이볼 잔 375ml x 2개 세트',
    percentage: '22',
    price: '25,450',
    grade: '5',
    count: '7',
  },
  {
    index: '리빙스토리',
    title: '[오늘의딜][해외] 1+1 원터치 인테리어 미니휴지통 3colors',
    percentage: '47',
    price: '8,900',
    grade: '4.7',
    count: '7,444',
  },
  {
    index: '홈앤하우스',
    title: '[오늘의딜] 드디어 재입고! 모노 논슬립 라운딩 옷걸이 40개',
    percentage: '39',
    price: '13,900',
    grade: '4.7',
    count: '15,528',
  },
];

const SectionDeal = () => {
  return (
    <S.Section width={269} height={269} deal>
      <div>
        <h2>오늘의딜</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {DEAL_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/deal0' + (i + 1) + '.jpg'}
                  alt="deal"
                  layout="fill"
                />
              </span>
              <div className="content">
                <h3>{data.index}</h3>
                <p>{data.title}</p>
                <div>
                  <strong>{data.percentage + '%'}</strong>
                  <span>{data.price}</span>
                </div>
                <div>
                  <TiStarFullOutline />
                  <span>{data.grade}</span>
                  <span>{'리뷰' + data.count}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <MoveBtn />
      </div>
    </S.Section>
  );
};

export default SectionDeal;
