import { useUser } from '../../hooks/useUser';
import { Logo } from '../Logo/Logo';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import main from '../App.module.css';

export const Header = () => {
  const { isLoggedIn } = useUser();

  return (
    <div>
      
      {/* {!isLoggedIn && <div className={main.logo}><Logo /></div>} */}
      {!isLoggedIn && <div className={main.header}><div className={main.headerWrapperLeft}><Logo /></div></div>}
      {isLoggedIn && <div className={main.header}><div className={main.headerWrapperLeft}><Logo /><AuthNav /></div><div className={main.headerWrapperRight}><UserMenu /></div></div>}
      {/* {!isLoggedIn && <div><div><Logo /><AuthNav /></div><div><UserMenu /></div></div>} */}
    </div>
  );
};
