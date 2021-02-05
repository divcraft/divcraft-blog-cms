import React from 'react';
import { Wrapper } from 'components';
import { SubmenuContainer, SubmenuList, SubmenuLink } from './style';

const Submenu = () => {
  return (
    <SubmenuContainer>
      <Wrapper>
        <SubmenuList>
          <li>
            <SubmenuLink to="/poczekalnia">
              Oczekujące na publikację
            </SubmenuLink>
          </li>
          <li>
            <SubmenuLink to="/poczekalnia">Tryb edycji</SubmenuLink>
          </li>
        </SubmenuList>
      </Wrapper>
    </SubmenuContainer>
  );
};

export default Submenu;
