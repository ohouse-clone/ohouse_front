import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CateBlock = styled.nav`
  display: block;
  flex: 1 1 0px;
  white-space: nowrap;

  li {
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    margin: 0 10px;
    padding: 21px 5px 15px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    text-decoration: none;
  }
  a {
    margin: -4px;
  }
`;
function Nav() {
  return (
    <CateBlock>
      <ul>
        <li>
          <Link to="/community" style={{ color: '#35C5F0' }}>
            커뮤니티
          </Link>
        </li>
        <li>
          <Link to="/store">스토어</Link>
        </li>
        <li>
          <Link to="*">이사/시공/수리</Link>
        </li>
      </ul>
    </CateBlock>
  );
}
export default Nav;
