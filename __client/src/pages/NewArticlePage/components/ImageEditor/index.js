import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import {
  ImageContainer,
  Image,
  ImageEditors,
  ImageSrcInput,
  ImageSrcLabel,
  ImageAltInput,
} from './style';

const ImageEditor = ({ content, sectionPosition, itemPosition }) => {
  const sections = useSelector((state) => state.articleData.article.sections);
  const dispatch = useDispatch();
  const handleContent = (e) => {
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        const updatedItems = section.items.map((item) => {
          if (item.itemPosition === itemPosition) {
            return {
              ...item,
              content: {
                ...item.content,
                alt: e.target.value,
              },
            };
          } else {
            return item;
          }
        });
        return {
          ...section,
          items: updatedItems,
        };
      } else {
        return section;
      }
    });
    dispatch(updateArticleSectionList(updatedSections));
  };
  return (
    <ImageContainer>
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
  content: PropTypes.instanceOf(Object),
  sectionPosition: PropTypes.number.isRequired,
  itemPosition: PropTypes.number.isRequired,
};

export default ImageEditor;
