import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Loader';
import main from '../App.module.css';
import { Header } from './Header';

export const SharedLayout = () => {
  return (
    <div className={main.whole}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};