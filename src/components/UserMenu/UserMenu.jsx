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
      {/* <p className={main.username}>{user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    <NavLink
        to="/"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
    >
        {user.name}
    </NavLink>
    <NavLink
        to="/logout"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
    >
        Exit
    </NavLink>
    </div>
  );
};
