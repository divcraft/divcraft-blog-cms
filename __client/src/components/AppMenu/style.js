import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MenuContainer = styled.nav`
  grid-area: menu;
  background-color: ${({ theme: { colors } }) => colors.gray.lighter};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme: { colors } }) => colors.gray.light};
  padding: 25px 0 0;
  margin-top: 2px;
  overflow-y: scroll;
`;

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  display: block;
  padding: 0 10px;
  & li {
    position: relative;
  }
`;

export const UpperMenuItem = styled(NavLink)`
  text-decoration: none;
  margin: 5px 0;
  padding-left: 65px;
  display: block;
  width: 100%;
  height: 70px;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  border-radius: 20px;
  line-height: 70px;
  &:hover,
  &.active,
  &:hover path,
  &.active path {
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
  display: inline;
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
  display: inline;
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
  margin-bottom: 20px;
  padding: 0;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  height: auto;
  position: absolute;
  top: 50%;
  left: 13px;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  transform: translateY(-50%) scale(1.5);
`;
