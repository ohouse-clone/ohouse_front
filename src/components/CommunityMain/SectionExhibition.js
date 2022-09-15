import React from 'react';
import Image from 'next/image';
import MoveBtn from './MoveBtn';
import * as S from './main-styled';

const EXHIBITION_DATE = [
  {
    desc: '오늘의집 큐레이션 편집샵 오!굿즈',
    title: '오직 여기서만, O!Goods',
  },
  {
    desc: '오늘 주문하면, 내일 도착!',
    title: '가구&가전 빠른배송 ~89%',
  },
  {
    desc: '전시, 반품, 스크래치 득템의 기회!',
    title: '빠른 품절! 리퍼마켓 ~85%',
  },
];

const SectionExhibition = () => {
  return (
    <S.Section width={365} height={243} exhibition>
      <div>
        <h2>오늘의 기획전</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {EXHIBITION_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/exhbx0' + (i + 1) + '.jpg'}
                  alt="exhibition"
                  layout="fill"
                />
              </span>
              <div className="content">
                <p>{data.desc}</p>
                <h4>{data.title}</h4>
              </div>
            </li>
          ))}
        </ul>
        <MoveBtn />
      </div>
    </S.Section>
  );
};

export default SectionExhibition;
