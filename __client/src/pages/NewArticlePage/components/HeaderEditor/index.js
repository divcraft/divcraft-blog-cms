import React from 'react';
import {
  HeaderContainer,
  TitleInput,
  SubtitleInput,
  ImageContainer,
  Image,
  ImageInput,
  ImageLabel,
} from './style';

const HeaderEditor = () => {
  return (
    <>
      <HeaderContainer>
        <TitleInput value="" placeholder="Tytuł artykułu" />
        <SubtitleInput value="Podtytuł" />
        <ImageContainer>
          <Image />
          <ImageLabel htmlFor="file-upload">
            +
            <ImageInput type="file" id="file-upload" />
          </ImageLabel>
        </ImageContainer>
      </HeaderContainer>
    </>
  );
};

export default HeaderEditor;
