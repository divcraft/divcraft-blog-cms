import React from 'react';
import { Logo } from 'components';
import { HeaderContainer, LeftSide, RightSide, NewArticleLink } from './style';

const AppHeader = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <Logo pattern="white" />
      </LeftSide>
      <RightSide>
        <NewArticleLink to="/nowy-artykul">Nowy Artykuł</NewArticleLink>
      </RightSide>
    </HeaderContainer>
  );
};

export default AppHeader;
