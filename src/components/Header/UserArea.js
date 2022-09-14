import Link from 'next/link';
import styled from 'styled-components';
import { IoChevronDown } from 'react-icons/io5';
import { useRouter } from 'next/router';


const User_Area = [
  {
    name: '로그인',
    path: '/login',
    id: 1,
  },
  {
    name: '회원가입',
    path: '/signup',
    id: 2,
  },
  {
    name: '고객센터',
    path: '/',
    id: 3,
  },
];
const UserAreaBlock = styled.div`
  display: flex;
  align-content: center;

  .loginArea {
    display: flex;
    margin: 0px 10px 0 8px;
  }
  .loginArea a {
    height: 18px;
    margin-top: 13px;
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    color: #2f3438;
    padding: 0 10px;
    border-left: 1px solid #eaedef;
  }
  .loginArea a:first-child {
    border-left: none;
  }
  .writeBtn {
    display: inline-block;
    font-size: 14px;
    line-height: 18px;
    height: 40px;
    border-radius: 4px;
    padding: 0 16px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    background-color: #35c5f0;
    overflow: hidden;
    border: none;
    outline: none;
  }
  .writeBtn span {
    margin-left: 6px;
    vertical-align: bottom;
  }
  .writeBtn svg {
    vertical-align: middle;
    font-size: 18px;
  }
`;
function UserArea() {
  const router = useRouter();
  return (
    <UserAreaBlock>
      <div className="loginArea">
        {User_Area.map(user => (
          <Link key={user.id} href={user.path}>
            <a>{user.name}</a>
          </Link>
          ))}
      </div>
      <p>
        <button className="writeBtn" type="button">
          글쓰기
          <span>
            <IoChevronDown />
          </span>
        </button>
      </p>
    </UserAreaBlock>
  );
}
export default UserArea;
