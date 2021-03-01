import React from 'react';
import { HeaderContainer, Title, Subtitle, Image } from './style';

const HeaderEditor = () => {
  return (
    <>
      <HeaderContainer>
        <Title>Tytuł artykułu</Title>
        <Subtitle>Podtytuł</Subtitle>
        <Image />
      </HeaderContainer>
    </>
  );
};

export default HeaderEditor;
