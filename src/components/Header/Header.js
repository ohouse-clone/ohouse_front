import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Cart from './Cart';
import Logo from './Logo';
import UserArea from './UserArea';
import Nav from './Nav';
import Banner from './Banner';

const HeaderWrap = styled.div`
  width: 1136px;
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a:link,
  a:visited {
    color: #2f3438;
  }

  .top {
    display: flex;
    height: 60px;
    padding:10px 0;
  }
  a:hover {
    color: #35c5f0;
  }
  .top-right {
    display: flex;
    flex: 0 1 650px;
    justify-content: flex-end;
    align-items: center;
  }
`;
function Header() {
  return (
    <>
      <Banner />
      <header>
        <HeaderWrap>
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
      </header>
    </>
  );
}
export default Header;
