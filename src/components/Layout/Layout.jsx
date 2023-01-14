import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = props => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
