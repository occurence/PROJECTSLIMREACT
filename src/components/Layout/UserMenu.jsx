import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/user/userOperations';
import { useUser } from '../../hooks/useUser';
import { NavLink } from 'react-router-dom';
import main from '../App.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useUser();

  return (
    <div className={main.menuWrapper}>
    <NavLink
        to="/"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
    >
        {user.name}
    </NavLink>
    <NavLink
        to="/"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
        onClick={() => dispatch(logOut())}
    >
        Exit
    </NavLink>
    </div>
  );
};
