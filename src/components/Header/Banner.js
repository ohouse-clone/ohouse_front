import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
const BannerBlock = styled.div`
  height: 50px;
  display: block;
  position: relative;
  z-index: 1000;
  .banner {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    :first-child {
      left: 0;
      background: #dc124e;
    }
    :nth-child(2) {
      right: 0;
      background: #00bbff;
    }
  }
  .imgArea {
    height: 100%;
    padding: 0 60px;
    display: flex;
    max-width: 1156px;
    margin: 0 auto;
  }
  .imgArea p {
    height: 100%;
    display: flex;
    flex: 1 0 0;
    position: relative;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center;
    z-indx: 1;
  }
  .imgArea p:first-child {
    background-image: url(https://bucketplace-v2-development.s3.amazonaws.com/uploads/store/banners/store_top_banners/166029634015620723.jpg);
    background-color: #dc124e;
  }
  .imgArea p:nth-child(2) {
    background-image: url(https://bucketplace-v2-development.s3.amazonaws.com/uploads/store/banners/store_top_banners/165383180311455316.png);
    background-color: #00bbff;
  }
  button {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translate(-50%, -45%);
    font-size: 27px;
    color: #fff;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    height: 28px;
  }
`;
function Banner(props) {
  const { onRemove } = props;
  return (
    <BannerBlock className="banner-area">
      <p className="banner" aria-label="pc 최상단배너">
        {' '}
      </p>
      <p className="banner" aria-label="pc 최상단배너">
        {' '}
      </p>
      <div className="imgArea">
        <p aria-label="pc 최상단배너"> </p>
        <p aria-label="pc 최상단배너"> </p>
      </div>
      <button
        onClick={() => {
          onRemove(false);
        }}
      >
        <AiOutlineClose />
      </button>
    </BannerBlock>
  );
}
export default Banner;
