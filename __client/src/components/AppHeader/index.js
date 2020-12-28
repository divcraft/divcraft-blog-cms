import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie';
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
  const userId = Cookies.get('user').slice(3).slice(0, -1);
  const [user, setUser] = useState('');
  useEffect(() => {
    Axios.get(`/api/users/${userId}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setUser(res.data);
        } else if (res.status !== 200) {
          console.log('Something went wrong.');
        }
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return (
    <HeaderContainer>
      <LeftSide>
        <Logo pattern="white" />
      </LeftSide>
      <Wrapper>
        <RightSide>
          <NewArticleLink to="/nowy-artykul">Nowy Artykuł</NewArticleLink>
          <UserWindow to="/moje-konto">
            <UserName>{user.username}</UserName>
            <UserPhoto>{user && user.username[0].toUpperCase()}</UserPhoto>
          </UserWindow>
        </RightSide>
      </Wrapper>
    </HeaderContainer>
  );
};

export default AppHeader;
