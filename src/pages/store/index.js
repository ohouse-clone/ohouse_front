import StoreCarousel from 'components/StoreCarousel';
import StoreCategory from 'components/StoreCategory';
import StoreEventLink from 'components/StoreEventLink';
import StoreProductContainer from 'components/StoreProductContainer';

import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DummyWrapper = styled.div`
  max-width: 1256px;
`;

export default function Store() {
  return (
    <>
      <h1 className="title">Store</h1>
      <StoreCarousel />
      <LayoutWrapper>
        <DummyWrapper>
          <StoreEventLink />
          <h3>오늘의딜</h3>
          <StoreProductContainer />
          <h3>카테고리</h3>
          <StoreCategory />
          <h3>인기 상품</h3>
          <StoreProductContainer />
        </DummyWrapper>
      </LayoutWrapper>
    </>
  );
}
