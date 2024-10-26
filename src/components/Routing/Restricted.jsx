import { useUser } from '../../hooks/useUser';
import { Navigate } from 'react-router-dom';

export const Restricted = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useUser();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
