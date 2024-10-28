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
// const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const CalculatorPage = lazy(() => import('../pages/CalculatorPage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));

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
        <Route index element={isLoggedIn ? <Navigate to='/diary' /> : <HomePage />} />
        <Route path="/register"
          element={
            <Restricted redirectTo="/diary" component={<RegisterPage />} />
          }
        />
        <Route path="/login"
          element={
            <Restricted redirectTo="/diary" component={<LoginPage />} />
          }
        />
        <Route path="/calculator"
          element={
            <Private redirectTo="/login" component={<CalculatorPage />} />
          }
        />
                <Route path="/diary"
          element={
            <Private redirectTo="/login" component={<DiaryPage />} />
          }
        />
      </Route>
    </Routes>
    </>
  );
};
