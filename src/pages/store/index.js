import StoreCarousel from 'components/StoreCarousel';
import StoreCategory from 'components/StoreCategory';
import StoreEventLink from 'components/StoreEventLink';
import StoreProductContainer from 'components/StoreProductContainer';

import React from 'react';

export default function Store() {
  return (
    <>
      <h1 className="title">Store</h1>
      <StoreCarousel />
      <StoreEventLink />
      <h3>오늘의딜</h3>
      <StoreProductContainer />
      <h3>카테고리</h3>
      <StoreCategory />
      <h3>인기 상품</h3>
      <StoreProductContainer />
    </>
  );
}
