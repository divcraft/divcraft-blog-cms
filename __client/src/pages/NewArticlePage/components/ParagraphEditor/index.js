import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ParagraphContainer } from './style';

const ParagraphEditor = ({ content }) => {
  const [height, setHeight] = useState(null);
  const handleHeightSize = (e) => setHeight(e.target.scrollHeight);
  return (
    <>
      <ParagraphContainer
        onChange={handleHeightSize}
        height={height}
        placeholder="Wpisz tekst..."
      >
        {content}
      </ParagraphContainer>
    </>
  );
};

ParagraphEditor.propTypes = {
  content: PropTypes.string,
};

export default ParagraphEditor;
