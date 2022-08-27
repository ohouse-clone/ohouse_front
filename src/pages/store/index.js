import StoreCarousel from 'components/StoreCarousel';
import StoreEventLink from 'components/StoreEventLink';

import React from 'react';

export default function Store() {
  return (
    <>
      <h1 className="title">Store</h1>
      <StoreCarousel />
      <StoreEventLink />
    </>
  );
}
