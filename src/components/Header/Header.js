import Search from './Search';
import Cart from './Cart';
import Logo from './Logo';
import UserArea from './UserArea';
import Nav from './Nav';
import Banner from './Banner';
import { useEffect, useState } from 'react';
import { HeaderWrap, CateWrap } from './Header.styles';
import { CATE_LIST } from '../../constants/Header';
function Header() {
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
            {CATE_LIST.map((e, i) => {
              return (
                <li key={[i]}>
                  <span href="#">{CATE_LIST[i]}</span>
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
