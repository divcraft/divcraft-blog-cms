import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editHeaderImageData, editHeaderImageAlt } from 'store/actions';
import {
  ImageContainer,
  PreviewImage,
  UploadedImage,
  NoImage,
  ImageEditors,
  ImageDataInput,
  ImageDataLabel,
  ImageAltInput,
} from './style';

const ImageEditor = ({
  pattern,
  content,
  handleContent,
  sectionPosition,
  itemPosition,
}) => {
  const dispatch = useDispatch();
  const handleImageAlt = (e) => {
    if (pattern === 'header') {
      dispatch(editHeaderImageAlt(e.target.value));
    } else {
      handleContent(e);
    }
  };
  const handleImageData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (pattern === 'header') {
          dispatch(editHeaderImageData(reader.result));
        } else {
          handleContent(e, reader.result.toString());
        }
      });
      reader.readAsDataURL(file);
    }
  };
  return (
    <ImageContainer pattern={pattern}>
      {content.data ? (
        <>
          {content.isUploaded ? (
            <UploadedImage
              alt={content.alt}
              cloudName="dmlal5qyb"
              publicId={content.data}
              width={pattern === 'header' && '1200'}
              crop="scale"
            />
          ) : (
            <PreviewImage alt={content.alt} src={content.data} />
          )}
        </>
      ) : (
        <NoImage />
      )}
      <ImageEditors>
        <ImageAltInput
          onChange={handleImageAlt}
          placeholder="Opis obrazka"
          value={content.alt}
        />
        <ImageDataLabel
          id={
            pattern === 'header'
              ? 'header-image'
              : `image-${sectionPosition}-${itemPosition}`
          }
        >
          +
          <ImageDataInput
            onChange={handleImageData}
            type="file"
            id={
              pattern === 'header'
                ? 'header-image'
                : `image-${sectionPosition}-${itemPosition}`
            }
          />
        </ImageDataLabel>
      </ImageEditors>
    </ImageContainer>
  );
};

ImageEditor.propTypes = {
  pattern: PropTypes.oneOf(['header', 'sectionItem']),
  content: PropTypes.instanceOf(Object).isRequired,
  sectionPosition: PropTypes.number,
  itemPosition: PropTypes.number,
  handleContent: PropTypes.func,
};

ImageEditor.defaultProps = {
  pattern: 'sectionItem',
  sectionPosition: null,
  itemPosition: null,
  handleContent: null,
};

export default ImageEditor;
