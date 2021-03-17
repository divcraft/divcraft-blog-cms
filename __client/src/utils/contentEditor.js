import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { IMAGE, LIST } from 'constants';

const contentEditor = ({
  component: Component,
  type,
  content,
  sectionPosition,
  itemPosition,
  ...rest
}) => {
  const sections = useSelector((state) => state.articleData.article.sections);
  const dispatch = useDispatch();
  const handleContent = (e) => {
    const updatedContent = (prevContent) => {
      if (type === IMAGE) {
        if (e.target.type === 'text') {
          return {
            ...prevContent,
            alt: e.target.value,
          };
        } else if (e.target.type === 'file') {
          return {
            ...prevContent,
            src: e.target.value,
          };
        }
      } else if (type === LIST) {
        const updatedArray = prevContent.map((item) => {
          const { position } = e.target.dataset;
          if (Number(position) === item.listItemPosition) {
            return {
              ...item,
              data: e.target.value,
            };
          } else {
            return item;
          }
        });
        return updatedArray;
      } else {
        return e.target.value;
      }
    };
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        const updatedItems = section.items.map((item) => {
          if (item.itemPosition === itemPosition) {
            return {
              ...item,
              content: updatedContent(item.content),
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
      <Component handleContent={handleContent} content={content} {...rest} />
    </>
  );
};

contentEditor.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)])
    .isRequired,
  type: PropTypes.string.isRequired,
  sectionPosition: PropTypes.number.isRequired,
  itemPosition: PropTypes.number.isRequired,
};

export default contentEditor;
