import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useUser } from '../hooks/useUser';
import { setAuthHeader } from '../redux/user/userOperations';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Restricted } from './Routing/Restricted';
import { Private } from './Routing/Private';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));

export const App = () => {
  const { isLoggedIn, isRefreshing } = useUser();

  useEffect(() => {
    const authToken = Cookies.get('access');
    const refreshToken = Cookies.get('refresh');
    if(authToken && refreshToken){setAuthHeader(authToken);}
  }, []);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={isLoggedIn ? <Navigate to='/transactions' /> : <HomePage />} />
        <Route path="/register"
          element={
            <Restricted redirectTo="/transactions" component={<RegisterPage />} />
          }
        />
        <Route path="/login"
          element={
            <Restricted redirectTo="/transactions" component={<LoginPage />} />
          }
        />
        <Route path="/products"
          element={
            <Private redirectTo="/login" component={<ProductsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
