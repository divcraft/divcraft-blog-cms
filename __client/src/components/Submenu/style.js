import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SubmenuContainer = styled.nav`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray.light};
`;

export const SubmenuList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  & li {
    margin-right: 30px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SubmenuLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  &.active {
    color: black;
  }
`;
