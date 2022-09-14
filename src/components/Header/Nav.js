import Link from 'next/link';
import styled from 'styled-components';

const Menu_List = [
  {
    name : '커뮤니티',
    path : '/'
    
  },
  {
    name : '스토어',
    path : '/store',
  },
  {
    name : '이사/시공/수리',
    path : '/',
  },
]

const CateBlock = styled.ul`
width:100%;
  display: flex;
  flex: 1 1 0px;
  align-content:center;
  // white-space: nowrap;

  li {
    align-items:center;
    margin-left:10px;
    border: none;
    // background: none;
    position: relative;
    padding: 21px 5px 15px;
    font-size: 18px;
    line-height: 1;
    font-weight: 700;
    text-decoration: none;
  }
  li:first-child a{
    color:#35c5f0;
  }
`;
function Nav() {
  return (
    <CateBlock>
      {Menu_List.map((menu)=>(
        <li key={menu.path}>
          <Link href={menu.path}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </CateBlock>
  );
}
export default Nav;
