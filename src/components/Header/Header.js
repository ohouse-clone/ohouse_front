import styled from 'styled-components';
import Search from './Search';
import Cart from './Cart';
import Logo from './Logo';
import UserArea from './UserArea';
import Nav from './Nav';
import Banner from './Banner';
import { useEffect, useState } from 'react';

const HeaderWrap = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 13px 60px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  gap: 12px;
  z-index: 900;
  a:link,
  a:visited {
    color: #2f3438;
  }
  .top {
    width: 1136px;
    height: 100%;
    display: flex;
  }
  a:hover {
    color: #35c5f0;
  }
  .top-right {
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid #eaedef;
`;
const CateWrap = styled.div`
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid #eaedef;
  .cate {
    max-width: 1136px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    ul {
      display: flex;
      padding: 12px 0;
      gap: 15px;
      li span {
        color: #2f3438;
        cursor: pointer;
        &:hover {
          color: #35c5f0;
        }
      }
    }
  }
`;
function Header() {
  let cate_list = [
    '홈',
    '팔로잉',
    '사진',
    '집들이',
    '노하우',
    '전문가집들이',
    '셀프가이드',
    '질문과 답변',
    '3D 인테리어',
    '이벤트',
  ];

  const [remove, setRemove] = useState(true);
  const [scroll, setScroll] = useState(false);
  function handleScroll() {
    if (window.pageYOffset >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }
  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <>
      {remove ? <Banner onRemove={setRemove} /> : null}
      <HeaderWrap className={scroll ? 'fixed-header' : ''}>
        <div className="top">
          <Logo />
          <Nav />
          <div className="top-right">
            <Search />
            <Cart />
            <UserArea />
          </div>
        </div>
      </HeaderWrap>
      <CateWrap className={scroll ? 'fixed-cate' : ''}>
        <div className="cate">
          <ul>
            {cate_list.map((e, i) => {
              return (
                <li key={[i]}>
                  <span href="#">{cate_list[i]}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </CateWrap>
    </>
  );
}
export default Header;
