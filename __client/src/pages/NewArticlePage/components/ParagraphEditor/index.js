import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { ParagraphContainer } from './style';

const ParagraphEditor = ({ content, itemPosition, sectionPosition }) => {
  const sections = useSelector((state) => state.articleData.article.sections);
  const dispatch = useDispatch();
  const [height, setHeight] = useState(null);
  const handleContent = (e) => {
    setHeight(e.target.scrollHeight);
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        const updatedItems = section.items.map((item) => {
          if (item.itemPosition === itemPosition) {
            return {
              ...item,
              content: e.target.value,
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
    <>
      <ParagraphContainer
        onChange={handleContent}
        height={height}
        placeholder="Wpisz tekst..."
        value={content}
      />
    </>
  );
};

ParagraphEditor.propTypes = {
  content: PropTypes.string,
  sectionPosition: PropTypes.number.isRequired,
  itemPosition: PropTypes.number.isRequired,
};

export default ParagraphEditor;
