import React from 'react';
import PropTypes from 'prop-types';
import { SubtitleContainer } from './style';

const SubtitleEditor = ({ content, handleContent }) => {
  return (
    <SubtitleContainer
      onChange={handleContent}
      value={content}
      placeholder="Wpisz podtytuł..."
    />
  );
};

SubtitleEditor.propTypes = {
  content: PropTypes.string,
  handleContent: PropTypes.func.isRequired,
};

export default SubtitleEditor;
