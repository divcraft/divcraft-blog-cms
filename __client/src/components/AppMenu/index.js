import React from 'react';
import {
  MenuContainer,
  MenuList,
  UpperMenuItem,
  LowerMenuItem,
  LowerMenuButton,
} from './style';

const AppMenu = () => {
  const handleLogout = () => {};
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
          <LowerMenuItem to="https://blog.div-craft.com/">Blog</LowerMenuItem>
        </li>
        <li>
          <LowerMenuItem to="/pomoc">Pomoc</LowerMenuItem>
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

export default AppMenu;
