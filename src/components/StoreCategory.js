import Link from 'next/link';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  img {
    width: 84px;
    height: 84px;
  }
`;

export default function StoreCategory() {
  return (
    <>
      <CategoryContainer>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon1.jpg"></img>
              <h3>가구</h3>
            </div>
          </a>
        </Link>
        <Link href="/store">
          <a>
            <div>
              <img src="/store-main-image/icon1.jpg"></img>
              <h3>패브릭</h3>
            </div>
          </a>
        </Link>
      </CategoryContainer>
    </>
  );
}
