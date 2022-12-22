import React from 'react';
import styled from 'styled-components';

const ProductDetailContent = styled.div`
  margin-left: 10px;
  width: 450px;
  h2 {
    font-size: 14px;
    color: rgba(50, 50, 50, 1);
  }
  h1 {
    font-size: 30px;
    line-height: 30px;
    width: 390px;
    margin-bottom: 30px;
  }
  div {
    margin-bottom: 10px;
  }
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 900;
`;

const LastPrice = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #35c5f0;
`;

const Discount = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 300;
  color: #4b4b4b;
  margin-bottom: 10px;
`;

const DiscountPrice = styled.span`
  margin-left: 10px;
  color: #7d7d7d;
  text-decoration: line-through;
`;

const Star = styled.div`
  font-size: 13px;
  color: #35c5f0;
  span:last-child {
    margin-left: 15px;
  }
`;

const FirstPay = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #35c5f0;
`;

const OptionSubject = styled.div`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 400;
`;

const HStack = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 18px;
  b {
    font-weight: 800;
  }
  p {
    margin-left: 10px;
    color: #5d5d5d;
  }
`;

const ArriveDate = styled.div`
  margin-left: 45px;
  background-color: #ebebeb;
  height: 35px;
  line-height: 35px;
  padding: 0px 20px;
  border-radius: 5px;
  font-size: 14px;
`;

const Dummy = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  select {
    height: 40px;
    padding: 10px;
    margin-bottom: 30px;
  }
`;

export default function DetailInfo({ data, brandName }) {
  const { format } = new Intl.NumberFormat('ko');
  return (
    <>
      <ProductDetailContent>
        <h2>{brandName}</h2>
        <h1>{data.products[0].productName}</h1>
        <Star>
          별점
          <span>{data.hit}</span>
          <span> / </span>
          <span>{data.hit}</span>
          <span>0개의 리뷰</span>
        </Star>
        <Discount>
          {data.products[0].rateDiscount}%
          <DiscountPrice>
            {format(
              data.products[0].price *
                (1 + data.products[0].rateDiscount / 100),
            )}
            원
          </DiscountPrice>
        </Discount>

        <div>
          <Price>{format(data.products[0].price)}원</Price>
          <LastPrice>
            {format(Math.ceil(data.products[0].price * 0.9))}원{' '}
            <FirstPay>첫구매 할인가</FirstPay>
          </LastPrice>
        </div>
        <div>
          <HStack>
            <OptionSubject>혜택</OptionSubject>
            <div>
              <span>
                <b>{Math.ceil(data.products[0].price * 0.001)}P</b> 적립
              </span>
              <div>
                월 {format(Math.ceil(data.products[0].price / 8))}원 (8개월)
                무이자할부
              </div>
            </div>
          </HStack>
        </div>
        <HStack>
          <OptionSubject>배송</OptionSubject>
          <span>
            <div>
              <b>무료배송</b>
            </div>
            <span>
              지금 주문시 <span>내일 출발</span>
            </span>
            <div>일반택배</div>
            <p>제주도/도서산간 지역 5,000원</p>
          </span>
        </HStack>

        <ArriveDate>
          {String(new Date(Date.now())).slice(4, 10)} 도착 예정
        </ArriveDate>

        <Dummy>
          <select>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
          <select>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
          </select>
        </Dummy>
      </ProductDetailContent>
    </>
  );
}
