import React from 'react';
import { Wrapper } from 'components';
import { useRouteMatch } from 'react-router-dom';
import { SubmenuContainer, SubmenuList, SubmenuLink } from './style';

const Submenu = () => {
  const { url } = useRouteMatch();
  return (
    <SubmenuContainer>
      <Wrapper>
        <SubmenuList>
          <li>
            <SubmenuLink to={`${url}/do-publikacji`}>Do publikacji</SubmenuLink>
          </li>
          <li>
            <SubmenuLink to={`${url}/tryb-edycji`}>Tryb edycji</SubmenuLink>
          </li>
        </SubmenuList>
      </Wrapper>
    </SubmenuContainer>
  );
};

export default Submenu;
