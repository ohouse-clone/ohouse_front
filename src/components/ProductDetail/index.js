import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailInfo from './DetailInfo';

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1256px;
`;

const CategoryUl = styled.ul`
  display: flex;
  color: rgb(100, 100, 100);
  margin: 15px 0px;
  font-size: 14px;
  div {
    margin: 0px 5px;
    color: rgb(150, 150, 150);
  }
`;

const ProductDetailMain = styled.main`
  display: flex;
`;

const ProductDetailImageWrapper = styled.div`
  display: flex;
  ul {
    margin-right: 10px;
  }
`;

const DummyImage = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #ebebeb;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 30px;
`;

const DummySubImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ebebeb;
  border: 1px solid #7d7d7d;
  border-radius: 4px;
  margin-bottom: 10px;
  &:hover {
    background-color: #7d7d7d;
  }
`;

const ProductDetailStickyMenu = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  position: sticky;
  font-size: 16px;
  width: 100%;
  height: 55px;
  top: 80px;
  background-color: #fafafa;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  z-index: 3;
  h3 {
    margin: 0px 90px;
  }
  span:first-child {
    position: absolute;
    width: 400px;
    height: 100%;
    background-color: #fafafa;
    left: -400px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
  span:last-child {
    position: absolute;
    width: 400px;
    height: 100%;
    background-color: #fafafa;
    right: -400px;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
`;

const StickyOption = styled.div`
  position: sticky;
  top: 135px;
  height: 100vh;
  width: 340px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const DummyProduct = styled.div`
  width: 100%;
  height: 300vh;
`;

const ContentImage = styled.div`
  display: block;
  position: relative;
  width: 900px;
  height: 100%;
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function ProductDetail({ data, brandName, breadcrumb }) {
  useEffect(() => {
    console.log(data.contentUrl);
  }, [data]);
  return (
    <LayoutWrapper>
      <Wrapper>
        <CategoryUl>
          <li>{breadcrumb}</li>
        </CategoryUl>

        <ProductDetailMain>
          <ProductDetailImageWrapper>
            <ul>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
              <li>
                <DummySubImage />
              </li>
            </ul>
            <DummyImage>
              <Image
                alt=""
                src={data.previewImageUrl}
                width="100%"
                height="100%"
                layout="fill"
              />
            </DummyImage>
          </ProductDetailImageWrapper>
          <DetailInfo brandName={brandName} data={data}></DetailInfo>
        </ProductDetailMain>

        <ProductDetailStickyMenu>
          <span></span>
          <h3>상품정보</h3>
          <h3>리뷰</h3>
          <h3>문의</h3>
          <h3>배송/환불</h3>
          <h3>추천</h3>
          <span></span>
        </ProductDetailStickyMenu>
        <HStack>
          <ContentImage>
            <Image
              alt=""
              src={data.contentUrl}
              width="100%"
              height="100%"
              layout="responsive"
            />
            <DummyProduct></DummyProduct>
          </ContentImage>
          <StickyOption>
            <div>옵션</div>
            <button>구매하기</button>
          </StickyOption>
        </HStack>
      </Wrapper>
    </LayoutWrapper>
  );
}
