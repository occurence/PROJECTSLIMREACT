import { NavLink } from 'react-router-dom';
import main from '../App.module.css';

export const Navigation = () => {
  return (
    <nav className={main.navWrapper}>
      <NavLink
        to="/diary"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
      >
        DIARY
      </NavLink>
      <NavLink
        to="/calculator"
        className={({ isActive }) => (isActive ? main.linkActive : main.link)}
      >
        CALCULATOR
      </NavLink>
    </nav>
  );
};
