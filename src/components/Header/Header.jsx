import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <div>
      <NavLink to='/home'>Home </NavLink>
      <NavLink to='/movies'>Movies </NavLink>
    </div>
  );
};

Header.propTypes = {};

export default Header;
