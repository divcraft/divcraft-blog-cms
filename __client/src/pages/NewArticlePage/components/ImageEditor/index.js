import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageContainer,
  Image,
  ImageEditors,
  ImageSrcInput,
  ImageSrcLabel,
  ImageAltInput,
} from './style';

const ImageEditor = ({ content, handleContent }) => {
  return (
    <ImageContainer>
      <Image src={content.data} alt={content.alt} />
      <ImageEditors>
        <ImageSrcLabel htmlFor="header-img">
          <span>+</span>
          <ImageSrcInput type="file" id="header-img" />
        </ImageSrcLabel>
        <ImageAltInput
          onChange={handleContent}
          placeholder="Opis obrazka"
          value={content.alt}
        />
      </ImageEditors>
    </ImageContainer>
  );
};

ImageEditor.propTypes = {
  content: PropTypes.instanceOf(Object).isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default ImageEditor;
