import { useUser } from '../../hooks/useUser';
import { Logo } from './Logo';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import main from '../App.module.css';

export const Header = () => {
  const { isLoggedIn } = useUser();

  return (
    <div>
      {isLoggedIn && <div className={main.header}><div className={main.headerWrapperLeft}><Logo /><Navigation /></div><div className={main.headerWrapperRight}><UserMenu /></div></div>}
      {!isLoggedIn && <div className={main.header}><div className={main.headerWrapperLeft}><Logo /><AuthNav /></div></div>}
    </div>
  );
};