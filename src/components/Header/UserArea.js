import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { UserAreaBlock } from './Header.styles';
import { USER_AREA } from '../../constants/Header';

function UserArea() {
  const router = useRouter();
  return (
    <UserAreaBlock>
      <div className="LoginArea">
        {USER_AREA.map(user => (
          <Link key={user.id} href={user.path}>
            <a currentPath={router.pathname} pathName={user.path}>
              {user.name}
            </a>
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
