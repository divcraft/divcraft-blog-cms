import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CodeContainer } from './style';

const CodeEditor = ({ content, handleContent }) => {
  const [height, setHeight] = useState('auto');
  const handleChange = (e) => {
    handleContent(e);
    setHeight(e.target.scrollHeight);
  };
  const handleLoad = (e) => {
    setHeight(e.target.scrollHeight);
  };
  return (
    <CodeContainer
      value={content}
      onChange={handleChange}
      onFocus={handleLoad}
      height={height}
      placeholder="Wpisz kod..."
    />
  );
};

CodeEditor.propTypes = {
  content: PropTypes.string.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default CodeEditor;
