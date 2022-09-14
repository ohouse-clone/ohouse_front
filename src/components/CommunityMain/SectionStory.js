import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Section = styled.section`
  padding: 30px 0;
  h2 {
    font-size: 20px;
    font-weight: 700;
  }
  .story-wrap {
    display: flex;
    gap: 0 20px;
    padding-top: 20px;

  }
  .story-wrap ul:first-child {
    display: flex;
    flex-direction: row;
    gap: 0 20px;
  }
  .story-wrap ul:first-child li {
    width: 269px;
    display: flex;
    flex-direction: column;
  }
  .story-wrap ul:first-child li .title {
    position: relative;
    width: 100%;
    height: 180px;
    cursor:pointer;
    >span{
      border-radius:6px;

    }
    img{
      transition:transform 0.2s;
      &:hover{transform:scale(1.1)};
    }
  }
  .story-wrap ul:first-child li p {
    font-size: 15px;
    line-height: 20px;
    font-weight: 700;
    word-break: break-all;
    padding-bottom: 10px;
  }
  .story-wrap ul:first-child li > div:nth-child(2) {
    padding: 15px 10px;
  }
  .story-wrap ul:first-child li div > div {
    display: flex;
    flex-direction: row;
    gap: 0 5px;
    align-items: center;
    font-size: 13px;
  }
  .story-wrap ul:first-child li div .profile {
    width: 22px;
    height: 22px;
    position: relative;
    img{
      border-radius:50%;
      
    }
  }

  .story-wrap ul:last-child {
    width: 269px;
    margin-bottom: 1px;
  }
  .story-wrap ul:last-child li {
    background-color: #f5f5f5;
    border-radius: 6px;
    height: 106px;
    display: flex;
    padding: 12.5px 10%;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #fff;
    cursor: pointer;
    transition: background-color 0.4s;
    &:hover {
      background-color: #ededed;
    }
  }
  .story-wrap ul:last-child li:last-child {
    border: none;
  }
  .story-wrap ul:last-child li h3 {
    font-size: 13px;
    color: #757575;
    padding-bottom: 10px;
  }
  .story-wrap ul:last-child li div {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  .story-wrap ul:last-child li div h4 {
    font-size: 15px;
    color: #424242;
    font-weight: 700;
  }
  .story-wrap ul:last-child li div span {
    width: 5px;
    height: 5px;
    border: 1px solid #757575;
    border-width: 1px 1px 0 0;
    transform: rotate(45deg);
  }
`;

const SectionStory = () => {
  return (
    <Section>
      <h2>오늘의 스토리</h2>
      <div className="story-wrap">
        <ul>
          <li>
            <span className="title">
              <Image
                src="/main/story01.jpg"
                alt="story"
                layout="fill"
              />
            </span>
            <div>
              <p>붙박이 기본 옵션도 빈티지 하게 살 수 있어!</p>
              <div>
                <span className="profile">
                  <Image
                    src="/main/story-profile01.jpg"
                    alt="story"
                    layout="fill"
                  />
                </span>
                <span>우재wooz</span>
              </div>
            </div>
          </li>
          <li>
            <span className="title">
              <Image
                src="/main/story02.jpg"
                alt="story"
                layout="fill"
              />
            </span>
            <div>
              <p>전형적인 신축은 No! 가족의 일상 담은 집</p>
              <div>
                <span className="profile">
                  <Image
                    src="/main/story-profile02.jpg"
                    alt="story"
                    layout="fill"
                  />
                </span>
                <span>yoonseuly</span>
              </div>
            </div>
          </li>
          <li>
            <span className="title">
              <Image
                src="/main/story03.jpg"
                alt="story"
                layout="fill"
              />
            </span>
            <div>
              <p>혹시 임대주택? 로망 이루는 첫 보금자리!</p>
              <div>
                <span className="profile">
                  <Image
                    src="/main/story-profile03.jpg"
                    alt="story"
                    layout="fill"
                  />
                </span>
                <span>Narxi</span>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <h3>예쁜집 구경하기</h3>
            <div>
              <h4>집들이</h4>
              <span></span>
            </div>
          </li>
          <li>
            <h3>전문가 시공사례</h3>
            <div>
              <h4>전문가 집들이</h4>
              <span></span>
            </div>
          </li>
          <li>
            <h3>인테리어 꿀팁 총 집합</h3>
            <div>
              <h4>노하우</h4>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default SectionStory;
