import React from 'react';
import { useSelector } from 'react-redux';
import { Logo, Wrapper } from 'components';
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
  const user = useSelector((state) => state.userData.user);
  const { firstName, lastName } = user;
  return (
    <HeaderContainer>
      <LeftSide>
        <Logo pattern="white" />
      </LeftSide>
      <Wrapper>
        <RightSide>
          <NewArticleLink to="/nowy-artykul">Nowy Artykuł</NewArticleLink>
          <UserWindow to="/moje-konto">
            <UserName>
              {firstName} {lastName}
            </UserName>
            <UserPhoto>{firstName[0].toUpperCase()}</UserPhoto>
          </UserWindow>
        </RightSide>
      </Wrapper>
    </HeaderContainer>
  );
};

export default AppHeader;
