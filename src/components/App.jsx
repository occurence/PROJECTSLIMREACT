import { useEffect, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useUser } from '../hooks/useUser';
import { setAuthHeader } from '../redux/user/userOperations';
import { SharedLayout } from './Layout/SharedLayout';
import { Restricted } from './Routing/Restricted';
import { Private } from './Routing/Private';
import { Toaster } from 'react-hot-toast';
import { Loader } from '../components/Layout/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));

export const App = () => {
  const { isLoggedIn, isRefreshing } = useUser();

  useEffect(() => {
    const authToken = Cookies.get('access');
    const refreshToken = Cookies.get('refresh');
    if(authToken && refreshToken){setAuthHeader(authToken);}
  }, []);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
    <Toaster
      position="top-center"
      reverseOrder={false}
      
    />
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={isLoggedIn ? <Navigate to='/products' /> : <HomePage />} />
        <Route path="/register"
          element={
            <Restricted redirectTo="/products" component={<RegisterPage />} />
          }
        />
        <Route path="/login"
          element={
            <Restricted redirectTo="/products" component={<LoginPage />} />
          }
        />
        <Route path="/products"
          element={
            <Private redirectTo="/login" component={<ProductsPage />} />
          }
        />
      </Route>
    </Routes>
    </>
  );
};
