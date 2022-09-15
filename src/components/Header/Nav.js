import Link from 'next/link';
import { useRouter } from 'next/router';
import { MENU_DATE } from 'constants/Header';
import { NavBlock } from './Header.styles';

function Nav() {
  const router = useRouter();
  return (
    <NavBlock>
      {MENU_DATE.map(menu => (
        <li key={menu.path}>
          <Link href={menu.path}>
            <a currentPath={router.pathname} pathName={menu.path}>
              {menu.name}
            </a>
          </Link>
        </li>
      ))}
    </NavBlock>
  );
}
export default Nav;
