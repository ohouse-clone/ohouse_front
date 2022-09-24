import StoreinfiniteProducts from 'components/StoreMain/StoreInfiniteProducts';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const furnitureCategories = [
  { title: '침대', hash: 1 },
  { title: '매트리스, 토퍼', hash: 2 },
  { title: '소파', hash: 3 },
];

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1256px;
`;

const CategoryWrapper = styled.div`
  min-width: 250px;
`;

export default function CategoryMain() {
  const [categoryClick, setCategoryClick] = useState('가구');
  const [fetchApiAddress, setFetchApiAddress] = useState('가구');
  const [data, setData] = useState();

  const categoryClickToggle = e => {
    setCategoryClick(e.dataset);
    setFetchApiAddress(e.dataset);
  };

  useEffect(() => {
    fetch(fetchApiAddress).then(res => setData(res));
  }, [fetchApiAddress]);

  // 1. 클릭 이벤트시
  //  타이틀이 맨 위로 올라와야함 / categories.title 을 map해서 리스트화 시켜야 함 /
  // hash를 전달해서 주소를 바꿔야 함 / filter를 map해서 필터를 구현 /
  // content가 있을시 슬라이더 등 나타나게 / fetch api를 해당 카테고리의 api로 변경

  return (
    <LayoutWrapper>
      <Wrapper>
        <>
          <CategoryWrapper>
            data map.categories.title
            <div>현재 fetch : {fetchApiAddress}</div>
            <br />
            <br />
            <h1 onClick={() => setFetchApiAddress(categoryClick)}>
              {categoryClick}
            </h1>
            <ul>
              {categoryClick === '가구' && (
                <>
                  {furnitureCategories.map((data, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => setFetchApiAddress('가구 ' + data.hash)}
                      >
                        {data.title}
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
            <br />
            <br />
            <ul>
              {categoryClick === '가구' || (
                <li
                  onClick={() => {
                    setCategoryClick('가구');
                    setFetchApiAddress('가구');
                  }}
                >
                  가구
                </li>
              )}

              {categoryClick === '패브릭' || (
                <li
                  onClick={() => {
                    setCategoryClick('패브릭');
                    setFetchApiAddress('패브릭');
                  }}
                >
                  패브릭
                </li>
              )}

              {categoryClick === '조명' || (
                <li
                  onClick={() => {
                    setCategoryClick('조명');
                    setFetchApiAddress('조명');
                  }}
                >
                  조명
                </li>
              )}
            </ul>
          </CategoryWrapper>
        </>
        <div>
          <h1>가구</h1>
          <div>슬라이더</div>
          {/* <div>{data.property_groups.map}</div> */}

          <div>공간별가구 찾기</div>
          <div>필터</div>
          <StoreinfiniteProducts />
        </div>
      </Wrapper>
    </LayoutWrapper>
  );
}
