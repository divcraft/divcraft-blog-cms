import React from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';
import {
  faHome,
  faNewspaper,
  faEdit,
  faComments,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import {
  MenuContainer,
  MenuList,
  UpperMenuItem,
  LowerMenuAnchor,
  LowerMenuLink,
  LowerMenuButton,
  StyledFontAwesome,
} from './style';

const AppMenu = ({ history }) => {
  const handleLogout = () => {
    Cookies.remove('user');
    history.go(0);
  };
  return (
    <MenuContainer>
      <MenuList>
        <li>
          <UpperMenuItem to="/przeglad">
            <StyledFontAwesome icon={faHome} />
            Przegląd
          </UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/moje-artykuly">
            <StyledFontAwesome icon={faNewspaper} />
            Moje artykuły
          </UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/poczekalnia">
            <StyledFontAwesome icon={faEdit} />
            Poczekalnia
          </UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/panel-kontaktowy">
            <StyledFontAwesome icon={faComments} />
            Panel kontaktowy
          </UpperMenuItem>
        </li>
        <li>
          <UpperMenuItem to="/panel-admina">
            <StyledFontAwesome icon={faCog} />
            Panel admina
          </UpperMenuItem>
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
