import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'components';
import { SubmenuContainer, SubmenuList, SubmenuLink } from './style';

const Submenu = ({ navConfig }) => {
  const linkList = navConfig.map((item) => (
    <li key={item.path}>
      <SubmenuLink to={item.path}>{item.name}</SubmenuLink>
    </li>
  ));
  return (
    <SubmenuContainer>
      <Wrapper>
        <SubmenuList>{linkList}</SubmenuList>
      </Wrapper>
    </SubmenuContainer>
  );
};

Submenu.propTypes = {
  navConfig: PropTypes.instanceOf(Array).isRequired,
};

export default Submenu;
