import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { ADD, REMOVE } from 'constants';
import { RemoveElementButton } from 'pages/NewArticlePage/components';
import {
  ListElementsContainer,
  ListItem,
  ListItemInput,
  AddListItemButton,
} from './style';

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
        const updatedItems = section.items
          .map((item) => {
            if (item.itemPosition === itemPosition) {
              let updatedListItems = [];
              if (event === REMOVE) {
                updatedListItems = item.content
                  .filter(
                    (listItem) => listItem.listItemPosition !== listItemPosition
                  )
                  .map((listItem, index) => ({
                    ...listItem,
                    listItemPosition: index + 1,
                  }));
              } else if (event === ADD) {
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
          })
          .filter(
            (item) =>
              !(item.itemPosition === itemPosition && item.content.length === 0)
          )
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
  return (
    <ListElementsContainer>
      <ul>
        {content.map((item) => (
          <ListItem key={item.listItemPosition}>
            <RemoveElementButton
              data-position={item.listItemPosition}
              data-event={REMOVE}
              onClick={handleListItem}
              pattern="listItem"
            />
            <ListItemInput
              data-position={item.listItemPosition}
              key={item.listItemPosition}
              type="text"
              value={item.data}
              onChange={handleContent}
              placeholder="Element listy..."
            />
          </ListItem>
        ))}
      </ul>
      <AddListItemButton
        type="button"
        data-event={ADD}
        onClick={handleListItem}
      >
        +
      </AddListItemButton>
    </ListElementsContainer>
  );
};

ListEditor.propTypes = {
  content: PropTypes.instanceOf(Array).isRequired,
  sectionPosition: PropTypes.number.isRequired,
  itemPosition: PropTypes.number.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default ListEditor;
