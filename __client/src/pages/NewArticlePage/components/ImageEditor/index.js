import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageContainer,
  Image,
  ImageInput,
  ImageLabel,
  ImageAltInput,
  GrayArea,
} from './style';

const ImageEditor = ({ content }) => {
  return (
    <>
      <ImageContainer>
        {content.url ? (
          <>
            <Image src={content.url} alt={content.alt} />
            <ImageAltInput
              // onChange={handleImageAlt}
              placeholder="Opis obrazka"
              value={content.alt}
            />
          </>
        ) : (
          <GrayArea />
        )}
        <ImageLabel htmlFor="file-upload">
          +
          <ImageInput type="file" id="file-upload" />
        </ImageLabel>
      </ImageContainer>
    </>
  );
};

ImageEditor.propTypes = {
  content: PropTypes.instanceOf(Object),
};

export default ImageEditor;
