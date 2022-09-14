import styled from 'styled-components';
import Search from './Search';
import Cart from './Cart';
import Logo from './Logo';
import UserArea from './UserArea';
import Nav from './Nav';
import Banner from './Banner';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Cate_List = [
  {
    name: '홈',
    id: 1,
  },
  {
    name: '팔로잉',
    id: 2,
  },
  {
    name: '사진',
    id: 3,
  },
  {
    name: '집들이',
    id: 4,
  },
  {
    name: '노하우',
    id: 5,
  },
  {
    name: '전문가집들이',
    id: 6,
  },
  {
    name: '셀프가이드',
    id: 7,
  },
  {
    name: '질문과 답변',
    id: 8,
  },
  {
    name: '3D 인테리어',
    id: 9,
  },
  {
    name: '이벤트',
    id: 10,
  },
];

const HeaderWrap = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 13px 60px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  gap: 12px;

  height: 80px;
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
  const [remove, setRemove] = useState(true);
  const [Scroll, setScroll] = useState(false);
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
      <HeaderWrap className={Scroll ? 'fixed-header' : ''}>
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
      <CateWrap className={Scroll ? 'fixed-cate' : ''}>
        <div className="cate">
          <ul>
            {Cate_List.map(menu => (
              <li key={menu.path}>
                <span>{menu.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </CateWrap>
    </>
  );
}
export default Header;
