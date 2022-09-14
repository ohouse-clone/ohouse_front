import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import * as S from './main-styled';

const SectionPPL = () => {
  return (
    <S.Section width={269} height={269} ppl>
      <div>
        <h2>오늘의 인기 사진</h2>
        <span>더보기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main01.jpg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile01.jpeg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>suhou_s</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main02.jpeg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile02.jpeg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>애3있는집</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main03.jpeg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile03.jpeg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>joy__ful.m.j</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main04.jpeg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile04.jpeg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>soro_day</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main05.jpg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile05.jpeg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>BlauesHaus</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main06.jpeg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile06.jpg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>쥬디포레스트</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main07.jpeg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile07.jpg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>숨한모금</span>
            </div>
          </li>
          <li>
            <span>
              <Image
                src="/community-main/ppl-main08.jpg"
                alt="main"
                layout="fill"
              />
            </span>
            <div className="profile-area">
              <span>
                <Image
                  src="/community-main/ppl-profile08.jpeg"
                  alt="main"
                  layout="fill"
                />
              </span>
              <span>넷이사는집</span>
            </div>
          </li>
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionPPL;
