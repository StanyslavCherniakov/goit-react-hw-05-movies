import React, { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Box from '../Box';

const Layout = () => {
  return (
    <Box bg='#B0E1DB' p='20px'>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
