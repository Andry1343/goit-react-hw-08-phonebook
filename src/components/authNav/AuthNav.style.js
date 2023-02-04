import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyleNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;

  &.active {
    color: white;
    background-color: #1976D2;
  }
`;
