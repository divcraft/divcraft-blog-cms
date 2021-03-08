import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import { PARAGRAPH, SUBTITLE, IMAGE, CODE, LIST } from 'constants';
import { SectionContainer } from 'components';
import {
  ParagraphEditor,
  SubtitleEditor,
  ImageEditor,
  CodeEditor,
  ListEditor,
} from 'pages/NewArticlePage/components';
import { SectionTitle } from './style';

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
    switch (type) {
      case PARAGRAPH:
        return (
          <ParagraphEditor
            itemPosition={itemPosition}
            sectionPosition={sectionPosition}
            content={content}
          />
        );
      case SUBTITLE:
        return (
          <SubtitleEditor
            itemPosition={itemPosition}
            sectionPosition={sectionPosition}
            content={content}
          />
        );
      case IMAGE:
        return (
          <ImageEditor
            itemPosition={itemPosition}
            sectionPosition={sectionPosition}
            content={content}
          />
        );
      case CODE:
        return (
          <CodeEditor
            itemPosition={itemPosition}
            sectionPosition={sectionPosition}
            content={content}
          />
        );
      case LIST:
        return (
          <ListEditor
            itemPosition={itemPosition}
            sectionPosition={sectionPosition}
            content={content}
          />
        );
      default:
        return null;
    }
  });
  return (
    <SectionContainer>
      <SectionTitle
        value={title}
        onChange={handleTitle}
        placeholder="Tytuł sekcji"
      />
      {sectionItemList}
    </SectionContainer>
  );
};

SectionEditor.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default SectionEditor;
