import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { AddElementButton } from 'layouts/ArticleEditor/components';
import { PARAGRAPH, SUBTITLE, IMAGE, CODE, LIST } from 'constants';
import { ButtonsContainer } from './style';

const AddSectionItemButtons = ({ sectionPosition }) => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.articleData.article.sections);
  const buttonsConfigData = [
    {
      type: PARAGRAPH,
      description: 'Akapit',
      content: '',
    },
    {
      type: SUBTITLE,
      description: 'Podtytuł',
      content: '',
    },
    {
      type: IMAGE,
      description: 'Obraz',
      content: {
        data: '',
        alt: '',
        isUploaded: false,
      },
    },
    {
      type: CODE,
      description: 'Kod',
      content: ``,
    },
    {
      type: LIST,
      description: 'Lista',
      content: [
        {
          listItemPosition: 1,
          data: '',
        },
      ],
    },
  ];
  const handleAddItem = (type, content) => {
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        return {
          ...section,
          items: [
            ...section.items,
            {
              itemPosition: section.items.length + 1,
              type,
              content,
            },
          ],
        };
      } else {
        return section;
      }
    });
    dispatch(updateArticleSectionList(updatedSections));
  };
  const buttonsList = buttonsConfigData.map((button) => (
    <AddElementButton
      key={button.type}
      pattern="gray"
      onClick={() => handleAddItem(button.type, button.content)}
    >
      {button.description}
    </AddElementButton>
  ));
  return <ButtonsContainer>{buttonsList}</ButtonsContainer>;
};

AddSectionItemButtons.propTypes = {
  sectionPosition: PropTypes.number.isRequired,
};

export default AddSectionItemButtons;
