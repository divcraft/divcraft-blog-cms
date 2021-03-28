import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import {
  PARAGRAPH,
  SUBTITLE,
  IMAGE,
  CODE,
  LIST,
  MOVE_UP,
  MOVE_DOWN,
} from 'constants';
import { ContentEditor } from 'utils';
import { SectionContainer } from 'components';
import {
  ParagraphEditor,
  SubtitleEditor,
  ImageEditor,
  CodeEditor,
  ListEditor,
  AddSectionItemButtons,
  EditElementButtons,
} from 'pages/NewArticlePage/components';
import {
  SectionTitle,
  ContentContainer,
  TitleContainer,
  ItemContainer,
} from './style';

const SectionEditor = ({ data: { title, items, sectionPosition } }) => {
  const sections = useSelector((state) => state.articleData.article.sections);
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    const updatedSections = sections.map((section) => {
      if (section.sectionPosition === sectionPosition) {
        return {
          ...section,
          title: e.target.value,
        };
      } else {
        return section;
      }
    });
    dispatch(updateArticleSectionList(updatedSections));
  };
  const handleRemoveSection = () => {
    const updatedSections = sections
      .filter((section) => section.sectionPosition !== sectionPosition)
      .map((section, index) => ({
        ...section,
        sectionPosition: index + 1,
      }));
    dispatch(updateArticleSectionList(updatedSections));
  };
  const handleMoveSection = (direction) => {
    if (direction === MOVE_UP && sectionPosition === 1) return null;
    if (direction === MOVE_DOWN && sectionPosition === sections.length)
      return null;
    const updatedSections = sections
      .map((section) => {
        if (direction === MOVE_UP) {
          if (section.sectionPosition + 1 === sectionPosition) {
            return {
              ...section,
              sectionPosition: section.sectionPosition + 1,
            };
          }
          if (section.sectionPosition === sectionPosition) {
            return {
              ...section,
              sectionPosition: section.sectionPosition - 1,
            };
          }
        } else if (direction === MOVE_DOWN) {
          if (section.sectionPosition - 1 === sectionPosition) {
            return {
              ...section,
              sectionPosition: section.sectionPosition - 1,
            };
          }
          if (section.sectionPosition === sectionPosition) {
            return {
              ...section,
              sectionPosition: section.sectionPosition + 1,
            };
          }
        }
        return section;
      })
      .sort((a, b) => a.sectionPosition - b.sectionPosition);
    dispatch(updateArticleSectionList(updatedSections));
  };
  const sectionItemList = items.map(({ type, content, itemPosition }) => {
    const getComponent = () => {
      switch (type) {
        case PARAGRAPH:
          return ParagraphEditor;
        case SUBTITLE:
          return SubtitleEditor;
        case IMAGE:
          return ImageEditor;
        case CODE:
          return CodeEditor;
        case LIST:
          return ListEditor;
        default:
          return null;
      }
    };
    return (
      <ContentContainer key={itemPosition} pattern={type}>
        <ContentEditor
          type={type}
          component={getComponent()}
          itemPosition={itemPosition}
          sectionPosition={sectionPosition}
          content={content}
        />
      </ContentContainer>
    );
  });
  return (
    <SectionContainer pattern="articleEditor">
      <TitleContainer>
        <SectionTitle
          value={title}
          onChange={handleTitle}
          placeholder="Tytuł sekcji"
        />
        <EditElementButtons
          handleRemoveElement={handleRemoveSection}
          handleMoveElement={handleMoveSection}
          pattern="section"
        />
      </TitleContainer>
      <ItemContainer>{sectionItemList}</ItemContainer>
      <AddSectionItemButtons sectionPosition={sectionPosition} />
    </SectionContainer>
  );
};

SectionEditor.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default SectionEditor;
