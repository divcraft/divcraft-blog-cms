import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CodeContainer } from './style';

const CodeEditor = ({ content }) => {
  const [height, setHeight] = useState(null);
  const handleHeightSize = (e) => setHeight(e.target.scrollHeight);
  return (
    <>
      <CodeContainer
        onChange={handleHeightSize}
        height={height}
        placeholder="Wpisz kod..."
      >
        {content}
      </CodeContainer>
    </>
  );
};

CodeEditor.propTypes = {
  content: PropTypes.string,
};

export default CodeEditor;
