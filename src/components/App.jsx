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
import { useDispatch } from 'react-redux';
import { getProducts } from '../redux/product/productsOperations';
import { getTodays } from '../redux/today/todaysOperations';

const HomePage = lazy(() => import('../pages/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const CalculatorPage = lazy(() => import('../pages/CalculatorPage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isRefreshing } = useUser();

  useEffect(() => {
    const accessToken = Cookies.get('access');
    const refreshToken = Cookies.get('refresh');

    if(accessToken && refreshToken){setAuthHeader(accessToken)}
    if(isLoggedIn){
      dispatch(getProducts());
      dispatch(getTodays());
    }
  }, [isLoggedIn]);

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
