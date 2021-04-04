import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { IMAGE, LIST, MOVE_UP, MOVE_DOWN } from 'constants';
import { EditElementButtons } from 'pages/NewArticlePage/components';

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
  const handleContent = (e, imgData) => {
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
            data: imgData,
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
  const handleRemoveItem = () => {
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        const updatedItems = section.items
          .filter((item) => item.itemPosition !== itemPosition)
          .map((item, index) => ({
            ...item,
            itemPosition: index + 1,
          }));
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
  const handleMoveItem = (direction) => {
    let continueUpdate = true;
    if (direction === MOVE_UP && itemPosition === 1) return null;
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        if (direction === MOVE_DOWN && itemPosition === section.items.length) {
          continueUpdate = false;
          return;
        }
        const updatedItems = section.items
          .map((item) => {
            if (direction === MOVE_UP) {
              if (item.itemPosition + 1 === itemPosition) {
                return {
                  ...item,
                  itemPosition: item.itemPosition + 1,
                };
              }
              if (item.itemPosition === itemPosition) {
                return {
                  ...item,
                  itemPosition: item.itemPosition - 1,
                };
              }
            } else if (direction === MOVE_DOWN) {
              if (item.itemPosition - 1 === itemPosition) {
                return {
                  ...item,
                  itemPosition: item.itemPosition - 1,
                };
              }
              if (item.itemPosition === itemPosition) {
                return {
                  ...item,
                  itemPosition: item.itemPosition + 1,
                };
              }
            }
            return item;
          })
          .sort((a, b) => a.itemPosition - b.itemPosition);
        return {
          ...section,
          items: updatedItems,
        };
      } else {
        return section;
      }
    });
    if (continueUpdate) dispatch(updateArticleSectionList(updatedSections));
  };
  return (
    <>
      <EditElementButtons
        handleRemoveElement={handleRemoveItem}
        handleMoveElement={handleMoveItem}
        pattern="item"
      />
      <Component
        handleContent={handleContent}
        sectionPosition={sectionPosition}
        itemPosition={itemPosition}
        content={content}
        {...rest}
      />
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
