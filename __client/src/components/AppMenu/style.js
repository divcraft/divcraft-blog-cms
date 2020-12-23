import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MenuContainer = styled.nav`
  grid-area: menu;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme: { colors } }) => colors.gray.light};
  padding: 70px 0 30px;
  margin-top: 2px;
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
  & > * {
    margin: 0;
    margin-left: 15px;
    margin-bottom: 20px;
    padding: 0;
    color: ${({ theme: { colors } }) => colors.gray.darker};
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LowerMenuAnchor = styled.a`
  display: block;
  margin-left: 15px;
  margin-bottom: 5px;
  padding: 0;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  &:hover {
    text-decoration: underline;
  }
`;

export const LowerMenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin-left: 15px;
  margin-bottom: 5px;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  &:hover {
    text-decoration: underline;
  }
`;

export const LowerMenuButton = styled.button`
  margin: 0;
  margin-left: 15px;
  margin-bottom: 30px;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
