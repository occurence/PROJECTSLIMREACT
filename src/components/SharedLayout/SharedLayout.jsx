import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};