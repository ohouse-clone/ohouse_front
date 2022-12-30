import Link from 'next/link';
import { useRouter } from 'next/router';
import { MENU_DATE } from 'constants/Header';
import { NavBlock } from './Header.styles';

function Nav() {
  const router = useRouter();
  return (
    <NavBlock>
      {MENU_DATE.map(menu => (
        <li key={menu.key}>
          <Link href={menu.path}>
            <a>{menu.name}</a>
          </Link>
        </li>
      ))}
    </NavBlock>
  );
}
export default Nav;
