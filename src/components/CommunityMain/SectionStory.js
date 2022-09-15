import React from 'react';
import Image from 'next/image';
import * as S from './main-styled';
const STORY_DATE = [
  {
    title: '붙박이 기본 옵션도 빈티지 하게 살 수 있어!',
    name: '우재wooz',
  },
  {
    title: '붙박이 기본 옵션도 빈티지 하게 살 수 있어!',
    name: 'yoonseuly',
  },
  {
    title: '전형적인 신축은 No! 가족의 일상 담은 집',
    name: 'Narxi',
  },
];
const STORY_LIST = [
  {
    title: '예쁜집 구경하기',
    move: '집들이',
  },
  {
    title: '전문가 시공사례',
    move: '전문가 집들이',
  },
  {
    title: '인테리어 꿀팁 총 집합',
    move: '노하우',
  },
];
const SectionStory = () => {
  return (
    <S.Section story width={269}>
      <h2>오늘의 스토리</h2>
      <div className="story-wrap">
        <div className="ul-area">
          <ul>
            {STORY_DATE.map((data, i) => (
              <li key={i}>
                <span>
                  <Image
                    src={'/community-main/story0' + (i + 1) + '.jpg'}
                    alt="story_title"
                    layout="fill"
                  />
                </span>
                <div className="content">
                  <p>{data.title}</p>
                  <div>
                    <span className="profile">
                      <Image
                        src={
                          '/community-main/story-profile0' + (i + 1) + '.jpg'
                        }
                        alt="story_profile"
                        layout="fill"
                      />
                    </span>
                    <span>{data.name}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ol>
          {STORY_LIST.map((data, i) => (
            <li key={i}>
              <h3>{data.title}</h3>
              <div>
                <h4>{data.move}</h4>
                <span></span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </S.Section>
  );
};

export default SectionStory;
