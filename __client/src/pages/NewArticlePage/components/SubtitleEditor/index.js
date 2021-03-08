import React from 'react';
import PropTypes from 'prop-types';
import { SubtitleContainer } from './style';

const SubtitleEditor = ({ content }) => {
  return (
    <>
      <SubtitleContainer
        // onChange={handleHeightSize}
        value={content}
        placeholder="Wpisz tekst..."
      />
    </>
  );
};

SubtitleEditor.propTypes = {
  content: PropTypes.string,
};

export default SubtitleEditor;
