import React from 'react';
import PropTypes from 'prop-types';

import {
  HeaderContainer,
  TitleInput,
  SubtitleInput,
  ImageContainer,
  Image,
  ImageInput,
  ImageLabel,
} from './style';

const HeaderEditor = ({ title, subtitle }) => {
  const handleTitle = () => {
    // setTitle(e.target.value);
  };
  const handleSubtitle = () => {
    // setSubtitle(e.target.value);
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

HeaderEditor.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeaderEditor;
