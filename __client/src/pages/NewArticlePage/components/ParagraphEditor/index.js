import React from 'react';
import PropTypes from 'prop-types';
import { ParagraphContainer } from './style';

const ParagraphEditor = ({ content, handleContent }) => {
  return (
    <ParagraphContainer
      onChange={handleContent}
      height={300}
      placeholder="Wpisz tekst..."
      value={content}
    />
  );
};

ParagraphEditor.propTypes = {
  content: PropTypes.string.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default ParagraphEditor;
