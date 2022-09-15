import React from 'react';
import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import * as S from './main-styled';
const REVIEW_DATE = [
  {
    review:
      '결론부터 먼저 말한다면 "아주 대 만족"입니다 인테리어를 하기로마음 먹으면서 업체를 고르는게 쉬운일이 아니더라구요. 여러곳의 업체를 비교하면서 지브로 사장님은 집상태',
    name: '지브로(JIBRO)',
  },
  {
    review:
      '상담도 친절하게 해주시고 시공 과정에서 사진과 설명으로 꼼꼼히 챙겨 주셨어요. 가까운 곳으로 업체를 선정하다 보니 안심도 가고 기간 내에 마무리 잘 해주셔서 좋았습니다.',
    name: '진디자인',
  },
  {
    review:
      '(계약과정) 갑작스러운 입주로 급하게 찾던 중, 집 앞 다봄사무실이 생각나, 포트폴리오를 참고하니 너무 마음에 들었습니다! 여러가지 질문에 답해드린 후, 1차 견적서를 받고 가격',
    name: '다봄디자인',
  },
];
const SectionReview = () => {
  return (
    <S.Section width={365} height={256} review>
      <div>
        <h2>유저들의 인테리어 시공리뷰</h2>
        <span>인테리어 전문가 더 찾기</span>
      </div>
      <div className="ul-area">
        <ul>
          {REVIEW_DATE.map((data, i) => (
            <li key={i}>
              <span>
                <Image
                  src={'/community-main/review0' + (i + 1) + '.jpg'}
                  alt="review"
                  layout="fill"
                />
              </span>
              <div className="content">
                <span>
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </span>
                <p>{data.review}</p>
                <div className="profile-area">
                  <span>
                    <Image
                      src={'/community-main/review0' + (i + 1) + '.jpg'}
                      layout="fill"
                      alt="profile"
                    />
                  </span>
                  <span>{data.name}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </S.Section>
  );
};

export default SectionReview;
