import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import {
  MenuContainer,
  MenuList,
  UpperMenuItem,
  LowerMenuAnchor,
  LowerMenuLink,
  LowerMenuButton,
} from './style';

const AppMenu = ({ history }) => {
  const handleLogout = () => {
    Cookies.remove('user');
    history.replace('/login');
  };
  return (
    <MenuContainer>
      <MenuList>
        <li>
          <UpperMenuItem to="/przeglad">Przegląd</UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/moje-artykuly">Moje artykuły</UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/poczekalnia">Poczekalnia</UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/panel-kontaktowy">Panel kontaktowy</UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/panel-admina">Panel admina</UpperMenuItem>
        </li>
      </MenuList>
      <MenuList>
        <li>
          <LowerMenuAnchor target="_blank" href="https://blog.div-craft.com/">
            Blog
          </LowerMenuAnchor>
        </li>
        <li>
          <LowerMenuLink to="/pomoc">Pomoc</LowerMenuLink>
        </li>
        <li>
          <LowerMenuButton onClick={() => handleLogout()}>
            Wyloguj
          </LowerMenuButton>
        </li>
      </MenuList>
    </MenuContainer>
  );
};

AppMenu.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(AppMenu);
