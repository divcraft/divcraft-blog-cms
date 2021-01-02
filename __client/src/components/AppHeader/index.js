import React from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Logo, Wrapper } from 'components';
import { fetchUserData } from 'store/actions';
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
  const cookieId = Cookies.get('user').slice(3).slice(0, -1);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  dispatch(fetchUserData(cookieId));
  return (
    <HeaderContainer>
      <LeftSide>
        <Logo pattern="white" />
      </LeftSide>
      <Wrapper>
        <RightSide>
          <NewArticleLink to="/nowy-artykul">Nowy Artykuł</NewArticleLink>
          <UserWindow to="/moje-konto">
            <UserName>{userData && userData.username}</UserName>
            <UserPhoto>
              {userData && userData.username[0].toUpperCase()}
            </UserPhoto>
          </UserWindow>
        </RightSide>
      </Wrapper>
    </HeaderContainer>
  );
};

export default AppHeader;
