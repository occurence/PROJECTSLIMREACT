import { useDispatch } from 'react-redux';
import { logOut, refreshUser } from '../../redux/user/userOperations';
import { useUser } from '../../hooks/useUser';
import { NavLink, Link } from 'react-router-dom';
import main from '../App.module.css';
import { toast } from 'react-hot-toast';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useUser();

  return (
    <div className={main.menuWrapper}>
    <NavLink
        to="/"
        className={main.linkActive}
        onClick={() => {toast((t) => (
          <span>Refresh token<br />
            <Link to="/" className={main.refresh} onClick={() => dispatch(refreshUser())}>Refresh</Link>
          </span>
        ));}}
    >
        {user.name}
    </NavLink>
    <NavLink
        to="/"
        className={main.link}
        onClick={() => dispatch(logOut())}
    >
        Exit
    </NavLink>
    </div>
  );
};
