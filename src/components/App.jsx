import { useEffect, lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage/ProductsPage'));

export const App = () => {
  // const dispatch = useDispatch();
  const { isRefreshing } = useUser();


  return (
    <div>
      React homework template
    </div>
  );
};
