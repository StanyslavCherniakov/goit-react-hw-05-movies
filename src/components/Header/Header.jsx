import React from 'react';
import MenuItem from './Header.styled';
import Box from '../Box';

const Header = () => {
  return (
    <Box display='flex' justifyContent='space-evenly' pb='5px' borderBottom='1px solid gray'>
      <MenuItem to='/'>Home</MenuItem>
      <MenuItem to='/movies'>Movies</MenuItem>
    </Box>
  );
};

export default Header;
