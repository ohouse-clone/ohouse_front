import axios from 'axios';
import { getStoreProductDetailData } from 'lib/apis/store';
import { detailPriceState } from 'lib/data/detailAtoms';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

export default function order() {
  const router = useRouter();
  const { id, price } = router.query;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [purchaseProduct, setPurchaseProduct] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const deliveryDto = parseFormToObj(e.target);

    deliveryDto.zipCode = '200';

    const startOrderRequestDto = {
      orderRequestDto: {
        orderList: [
          {
            adjustedPrice: Number(purchaseProduct.price),
            amount: 1,
            productId: Number(id),
          },
        ],
        orderName: purchaseProduct.productName,
        paymentType: 'CARD',
        storePostId: Number(purchaseProduct.storePostId),
      },
      deliveryDto,
    };
    console.log(startOrderRequestDto);
    purchasePost(startOrderRequestDto).then(res => {
      console.log(res);
    });
  };

  const purchasePost = async obj => {
    await axios.post('/api/order/api/v1/order/', obj);
  };

  const parseFormToObj = target => {
    const formlength = target.length - 1;
    const data = {};
    for (let i = 0; i < formlength; i++) {
      data[target[i].name] = target[i].value;
    }
    return data;
  };

  useEffect(() => {
    getStoreProductDetailData(id).then(res => {
      setData(res);
    });
  }, [id]);

  useEffect(() => {
    const purchaseProductArr = data?.products.filter(
      product => product.price == price,
    );
    setPurchaseProduct(purchaseProductArr && purchaseProductArr[0]);
  }, [data]);

  useEffect(() => {
    setLoading(false);
    console.log(purchaseProduct);
    console.log(data);
  }, [purchaseProduct]);
  return (
    <>
      {loading ? (
        <div>loading </div>
      ) : (
        <LayoutWrapper>
          <Wrapper>
            <HStackForm onSubmit={handleSubmit}>
              <div>
                <h1>주문/결제</h1>

                <VStack>
                  <h2> 주문자</h2>
                  <Divider />
                  <HStack>
                    <h3>이름</h3>
                    <input name="senderName"></input>
                  </HStack>
                  <HStack>
                    <h3>메모</h3>
                    <input name="memo"></input>
                  </HStack>
                </VStack>

                <VStack>
                  <h2> 배송지</h2>
                  <Divider />
                  <HStack>
                    <h3>배송지명</h3>
                    <input name="addressName"></input>
                  </HStack>
                  <HStack>
                    <h3>받는 사람</h3>
                    <input name="recipientName"></input>
                  </HStack>
                  <HStack>
                    <h3>연락처</h3>
                    <input name="phone"></input>
                  </HStack>
                  <HStack>
                    <h3>주소</h3>
                    <input name="address1"></input>
                  </HStack>
                  <HStack>
                    <h3>상세 주소</h3>
                    <input name="address2"></input>
                  </HStack>
                </VStack>

                <VStack>
                  <h2>주문상품</h2>
                  <Divider />
                  <HStack
                    style={{
                      padding: '15px',
                      borderRadius: '5px',
                      border: '1px solid #ebebeb',
                      marginBottom: '30px',
                    }}
                  >
                    <StyledImg
                      src={data?.previewImageUrl}
                      width="64px"
                      height="64px"
                    />
                    <VStack style={{ marginLeft: '30px' }}>
                      <div>{data?.title}</div>
                      <div style={{ fontSize: '14px', margin: '10px 0px' }}>
                        {purchaseProduct?.productName}
                      </div>
                      <div>{purchaseProduct?.price}원</div>
                    </VStack>
                  </HStack>
                </VStack>
              </div>
              <VStack>
                <PurchaseBox>
                  <h5>결제금액</h5>
                  <HStack>
                    <h4>총 상품 금액</h4>
                    <div>{purchaseProduct?.price}원</div>
                  </HStack>
                </PurchaseBox>
                <DetailButton type="submit">결제하기</DetailButton>
              </VStack>
            </HStackForm>
          </Wrapper>
        </LayoutWrapper>
      )}
    </>
  );
}

const DetailButton = styled.button`
  background-color: #09addb;
  color: #fff;
  border: 1px solid #09addb;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  margin: 0px 30px;
  width: 300px;
  height: 55px;

  cursor: pointer;
`;

const StyledImg = styled.img`
  border-radius: 5px;
`;

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1156px;
  h1 {
    margin: 40px 0px;

    font-size: 26px;
    font-weight: 700;
  }
`;

const PurchaseBox = styled.div`
  width: 300px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  margin: 30px 30px;
  padding: 20px;

  h5 {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const Divider = styled.div`
  width: 700px;
  height: 1px;
  background-color: #ebebeb;
  margin: 20px 0px;
`;

const EmailD = styled.div`
  margin: 0px 20px;
  font-size: 16px;
  line-height: 40px;
`;

const VStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 30px;
  }
`;
const HStackForm = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;

  h3 {
    width: 100px;
    font-size: 16px;
    line-height: 40px;
  }
  input {
    width: 270px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
  }
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  h4 {
    width: 190px;
  }

  h3 {
    width: 100px;
    font-size: 16px;
    line-height: 40px;
  }
  input {
    width: 270px;
    height: 40px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #bdbdbd;
    border-radius: 3px;
  }
`;
