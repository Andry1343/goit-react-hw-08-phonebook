import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationNavlink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #2a363b;
  }
  
  &.active {
    color: white;
    background-color: #1976D2;
  }
`;
