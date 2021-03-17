import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { PARAGRAPH, SUBTITLE, IMAGE, CODE, LIST } from 'constants';
import { ContentEditor } from 'utils';
import { SectionContainer } from 'components';
import {
  ParagraphEditor,
  SubtitleEditor,
  ImageEditor,
  CodeEditor,
  ListEditor,
} from 'pages/NewArticlePage/components';
import { SectionTitle, FlexContainer } from './style';

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
      <ContentEditor
        key={itemPosition}
        type={type}
        component={getComponent()}
        itemPosition={itemPosition}
        sectionPosition={sectionPosition}
        content={content}
      />
    );
  });
  return (
    <SectionContainer>
      <FlexContainer>
        <SectionTitle
          value={title}
          onChange={handleTitle}
          placeholder="Tytuł sekcji"
        />
        {sectionItemList}
      </FlexContainer>
    </SectionContainer>
  );
};

SectionEditor.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default SectionEditor;
