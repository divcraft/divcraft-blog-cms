import React from 'react';
import { Logo } from 'components';
import {
  HeaderContainer,
  LeftSide,
  RightSide,
  NewArticleLink,
  UserWindow,
  UserName,
  UserPhoto,
} from './style';

const AppHeader = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <Logo pattern="white" />
      </LeftSide>
      <RightSide>
        <NewArticleLink to="/nowy-artykul">Nowy Artykuł</NewArticleLink>
        <UserWindow>
          <UserName>Imię Nazwisko</UserName>
          <UserPhoto>T</UserPhoto>
        </UserWindow>
      </RightSide>
    </HeaderContainer>
  );
};

export default AppHeader;
