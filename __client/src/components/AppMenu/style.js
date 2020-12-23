import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  grid-area: menu;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme: { colors } }) => colors.gray.light};
  padding: 70px 0;
  overflow-y: scroll;
`;

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  display: block;
  padding: 0 10px;
`;

export const UpperMenuItem = styled(NavLink)`
  text-decoration: none;
  margin: 5px 0;
  padding-left: 65px;
  display: block;
  width: 100%;
  height: 80px;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  border-radius: 20px;
  line-height: 80px;
  &:hover,
  &.active {
    color: white;
    background-color: ${({ theme: { colors } }) => colors.blue.dark};
  }
`;

export const LowerMenuItem = styled(Link)`
  text-decoration: none;
`;

export const LowerMenuButton = styled.button``;
