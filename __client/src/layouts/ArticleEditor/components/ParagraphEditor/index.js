import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ParagraphContainer } from './style';

const ParagraphEditor = ({ content, handleContent }) => {
  const [height, setHeight] = useState(null);
  const handleChange = (e) => {
    handleContent(e);
    setHeight(e.target.scrollHeight);
  };
  const handleLoad = (e) => {
    setHeight(e.target.scrollHeight);
  };
  return (
    <>
      <ParagraphContainer
        onChange={handleChange}
        onFocus={handleLoad}
        height={height}
        placeholder="Wpisz tekst..."
        value={content}
      />
    </>
  );
};

ParagraphEditor.propTypes = {
  content: PropTypes.string.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default ParagraphEditor;
