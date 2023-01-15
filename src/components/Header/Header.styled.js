import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 60px;
  height: 30px;

  background-color: slategray;
  border-radius: 10px;

  &.active {
    background-color: coral;
  }

  :hover:not(.active) {
    background-color: deepskyblue;
  }
`;

export default MenuItem;
