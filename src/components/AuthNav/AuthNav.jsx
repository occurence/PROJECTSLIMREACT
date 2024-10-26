import { NavLink } from 'react-router-dom';
import main from '../App.module.css';

export const AuthNav = () => {
  return (
    <nav className={main.navWrapper}>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
      >
        LOG IN
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
      >
        REGISTRATION
      </NavLink>
    </nav>
  );
};
