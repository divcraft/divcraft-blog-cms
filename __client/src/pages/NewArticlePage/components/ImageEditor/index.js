import React from 'react';
import PropTypes from 'prop-types';
import { EditElementButtons } from 'pages/NewArticlePage/components';
import {
  ImageContainer,
  Image,
  ImageEditors,
  ImageSrcInput,
  ImageSrcLabel,
  ImageAltInput,
} from './style';

const ImageEditor = ({
  content,
  handleContent,
  handleRemoveItem,
  handleMoveItem,
}) => {
  return (
    <ImageContainer>
      <EditElementButtons
        handleRemoveElement={handleRemoveItem}
        handleMoveElement={handleMoveItem}
        pattern="item"
      />
      <Image src={content.url} alt={content.alt} />
      <ImageEditors>
        <ImageSrcLabel htmlFor="file-upload">
          <span>+</span>
          <ImageSrcInput type="file" id="file-upload" />
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
  handleRemoveItem: PropTypes.func.isRequired,
  handleMoveItem: PropTypes.func.isRequired,
};

export default ImageEditor;
