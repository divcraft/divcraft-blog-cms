import React from 'react';
import PropTypes from 'prop-types';
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

const SectionEditor = ({ data: { title, items } }) => {
  const sectionItemList = items.map(({ type, content }) => {
    switch (type) {
      case PARAGRAPH:
        return <ParagraphEditor content={content} />;
      case SUBTITLE:
        return <SubtitleEditor content={content} />;
      case IMAGE:
        return <ImageEditor content={content} />;
      case CODE:
        return <CodeEditor content={content} />;
      case LIST:
        return <ListEditor content={content} />;
      default:
        return null;
    }
  });
  return (
    <SectionContainer>
      <SectionTitle
        value={title}
        // onChange={handleTitle}
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
