import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { TiStarFullOutline } from 'react-icons/ti';

const Section = styled.section`
  padding: 30px 0;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    h2 {
      font-size: 20px;
    }
    span {
      font-size: 15px;
      color: #35c5f0;
    }
  }
  .ul-area {
    width: 100%;
    padding-top: 30px;

    ul {
      display: flex;
      gap: 0 20px;

      li {
        width: 365px;
        > span:nth-child(1) {
          display: flex;
          height: 256px;
          position: relative;
          cursor: pointer;
          span:nth-child(1) {
            border-radius: 6px;
          }
          img {
            transition: transform 0.2s;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        div:nth-child(2) {
          font-size: 15px;
          color: #424242;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 7px 0;
          padding: 12px;
          > span:nth-child(1) {
            svg {
              width: 15px;
              height: 15px;
              color: #35c5f0;
            }
          }
          p {
            line-height: 20px;
            height: 60px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          div:nth-child(3) {
            display: flex;
            gap: 0 2px;
            line-height: 24px;
            font-weight: 700;

            span:first-child {
              width: 24px;
              height: 24px;
              position: relative;
              display: flex;
              border-radius:50%;
            }
          }
        }
      }
    }
  }
`;
const SectionReview = () => {
  return (
    <Section>
      <div>
        <h2>유저들의 인테리어 시공리뷰</h2>
        <span>인테리어 전문가 더 찾기</span>
      </div>
      <div className="ul-area">
        <ul>
          <li>
            <span>
              <Image src="/community-main/review01.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <span>
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </span>
              <p>
                결론부터 먼저 말한다면 "아주 대 만족"입니다 인테리어를 하기로
                마음 먹으면서 업체를 고르는게 쉬운일이 아니더라구요. 여러곳의
                업체를 비교하면서 지브로 사장님은 집상태
              </p>
              <div>
                <span>
                  <Image
                    src="/main/review-profile01.jpg"
                    layout="fill"
                    alt="profile"
                  />
                </span>
                <span>지브로(JIBRO)</span>
              </div>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/review03.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <span>
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </span>
              <p>
              상담도 친절하게 해주시고 시공 과정에서 사진과 설명으로 꼼꼼히 챙겨 주셨어요. 가까운 곳으로 업체를 선정하다 보니 안심도 가고 기간 내에 마무리 잘 해주셔서 좋았습니다.
              </p>
              <div>
                <span>
                  <Image
                    src="/main/review-profile03.jpg"
                    layout="fill"
                    alt="profile"
                  />
                </span>
                <span>진디자인</span>
              </div>
            </div>
          </li>
          <li>
            <span>
              <Image src="/community-main/review02.jpg" alt="review" layout="fill" />
            </span>
            <div>
              <span>
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
                <TiStarFullOutline />
              </span>
              <p>
              (계약과정) 갑작스러운 입주로 급하게 찾던 중, 집 앞 다봄사무실이 생각나, 포트폴리오를 참고하니 너무 마음에 들었습니다! 여러가지 질문에 답해드린 후, 1차 견적서를 받고 가격
              </p>
              <div>
                <span>
                  <Image
                    src="/main/review-profile02.jpg"
                    layout="fill"
                    alt="profile"
                  />
                </span>
                <span>다봄디자인</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default SectionReview;
