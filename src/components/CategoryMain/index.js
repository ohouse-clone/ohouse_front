import StoreinfiniteProducts from 'components/StoreMain/StoreInfiniteProducts';
import { useState } from 'react';
import styled from 'styled-components';

const furnitureCategories = [
  { title: '침대' },
  { title: '매트리스, 토퍼' },
  { title: '소파' },
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
  const [categoryClick, setCategoryClick] = useState(false);
  const categoryClickToggle = () => {
    setCategoryClick(prev => !prev);
  };
  return (
    <LayoutWrapper>
      <Wrapper>
        <CategoryWrapper>
          categories.map 클릭 시 맨위로 올리는 작업 다른 리스트가 다 닫히는 것.
          {/* 카테고리 한개가 클릭 되었다면 제일 위로 올리고 나머지는 끄기. 
      recoil로 관리하면 될 듯. */}
          <h1 onClick={categoryClickToggle}>가구</h1>
          {categoryClick && (
            <>
              {furnitureCategories.map((data, i) => {
                return <div key={i}>{data.title}</div>;
              })}
            </>
          )}
        </CategoryWrapper>
        <div>
          <h1>가구</h1>
          <div>슬라이더</div>
          <div>공간별가구 찾기 </div>
          <div>필터</div>
          <StoreinfiniteProducts />
        </div>
      </Wrapper>
    </LayoutWrapper>
  );
}
