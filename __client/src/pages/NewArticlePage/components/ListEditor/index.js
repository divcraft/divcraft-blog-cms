import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { RemoveElementButton } from 'pages/NewArticlePage/components';
import { ListItemContainer } from './style';

const ListEditor = ({
  content,
  sectionPosition,
  itemPosition,
  handleContent,
}) => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.articleData.article.sections);
  const handleListItem = (e) => {
    const listItemPosition = Number(e.target.dataset.position);
    const { event } = e.target.dataset;
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        const updatedItems = section.items.map((item) => {
          if (item.itemPosition === itemPosition) {
            let updatedListItems = [];
            if (event === 'remove') {
              updatedListItems = item.content
                .filter(
                  (listItem) => listItem.listItemPosition !== listItemPosition
                )
                .map((listItem, index) => ({
                  ...listItem,
                  listItemPosition: index + 1,
                }));
            } else if (event === 'add') {
              updatedListItems = [
                ...item.content,
                {
                  listItemPosition: item.content.length + 1,
                  data: '',
                },
              ];
            }
            return {
              ...item,
              content: updatedListItems,
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
    <ul>
      {content.map((item) => (
        <li key={item.listItemPosition}>
          <ListItemContainer
            data-position={item.listItemPosition}
            key={item.listItemPosition}
            type="text"
            value={item.data}
            onChange={handleContent}
            placeholder="Element listy..."
          />
          <RemoveElementButton
            data-position={item.listItemPosition}
            data-event="remove"
            onClick={handleListItem}
            pattern="item"
          />
        </li>
      ))}
      <button type="button" data-event="add" onClick={handleListItem}>
        Add...
      </button>
    </ul>
  );
};

ListEditor.propTypes = {
  content: PropTypes.instanceOf(Array).isRequired,
  sectionPosition: PropTypes.number.isRequired,
  itemPosition: PropTypes.number.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default ListEditor;
