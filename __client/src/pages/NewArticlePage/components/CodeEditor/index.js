import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { CodeContainer } from './style';

const CodeEditor = ({ content, itemPosition, sectionPosition }) => {
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
      <CodeContainer
        value={content}
        onChange={handleContent}
        height={height}
        placeholder="Wpisz kod..."
      />
    </>
  );
};

CodeEditor.propTypes = {
  content: PropTypes.string.isRequired,
  sectionPosition: PropTypes.number.isRequired,
  itemPosition: PropTypes.number.isRequired,
};

export default CodeEditor;
