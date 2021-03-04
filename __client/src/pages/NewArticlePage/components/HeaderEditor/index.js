import React from 'react';
import { useState } from 'react/cjs/react.development';
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
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleSubtitle = (e) => {
    setSubtitle(e.target.value);
  };
  return (
    <>
      <HeaderContainer>
        <TitleInput
          value={title}
          onChange={handleTitle}
          placeholder="Tytuł artykułu"
        />
        <SubtitleInput
          value={subtitle}
          onChange={handleSubtitle}
          placeholder="Podtytuł"
        />
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
