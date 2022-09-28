import StoreCarousel from 'components/StoreMain/StoreCarousel';
import StoreCategory from 'components/StoreMain/StoreCategory';
import StoreEventLink from 'components/StoreMain/StoreEventLink';
import StoreinfiniteProducts from 'components/StoreMain/StoreInfiniteProducts';
import StoreProductContainer from 'components/StoreMain/StoreProductContainer';

import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DummyWrapper = styled.div`
  max-width: 1256px;
`;

const SubjectWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  h3 {
    font-weight: 900;
    font-size: 20px;
    margin: 60px 20px 20px 10px;
  }

  h5 {
    margin: 60px 30px 20px 0px;
    font-weight: 800;
    font-size: 14px;
    color: #f77;
  }
`;

export default function StoreMain() {
  return (
    <>
      <StoreCarousel />
      <LayoutWrapper>
        <DummyWrapper>
          <StoreEventLink />
          <SubjectWrapper>
            <h3>오늘의딜</h3>
            <h5>더보기</h5>
          </SubjectWrapper>
          <StoreProductContainer />
          <SubjectWrapper>
            <h3>카테고리</h3>
            <h5>더보기</h5>
          </SubjectWrapper>
          <StoreCategory />
          <SubjectWrapper>
            <h3>인기 상품</h3>
            <h5>더보기</h5>
          </SubjectWrapper>
          <StoreinfiniteProducts />
        </DummyWrapper>
      </LayoutWrapper>
    </>
  );
}