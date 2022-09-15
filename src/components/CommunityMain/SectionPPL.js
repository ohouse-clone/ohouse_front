import React from 'react';
import Image from 'next/image';
import * as S from './main-styled';
let name = [
  'suhou_s',
  '애3있는집',
  'joy__ful.m.j',
  'soro_day',
  'BlauesHaus',
  '쥬디포레스트',
  '숨한모금',
  '넷이사는집',
];
const SectionPPL = () => {
  return (
    <S.Section width={269} height={269} ppl>
      <div>
        <h2>오늘의 인기 사진</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          {name.map((e, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/ppl-main0' + (i + 1) + '.jpeg'}
                  alt="main"
                  layout="fill"
                />
              </span>
              <div className="profile-area">
                <span>
                  <Image
                    src={'/community-main/ppl-profile0' + (i + 1) + '.jpeg'}
                    alt="main"
                    layout="fill"
                  />
                </span>
                <span>{name[i]}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionPPL;
