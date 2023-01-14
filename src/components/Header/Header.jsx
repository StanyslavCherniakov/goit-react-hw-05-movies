import React from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <NavLink to='/home'>Home </NavLink>
      <NavLink to='/movies'>Movies </NavLink>
    </div>
  );
};

export default Header;
