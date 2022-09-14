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
          <StoreinfiniteProducts />
        </DummyWrapper>
      </LayoutWrapper>
    </>
  );
}
