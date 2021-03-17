import React from 'react';
import PropTypes from 'prop-types';
import { CodeContainer } from './style';

const CodeEditor = ({ content, handleContent }) => {
  return (
    <CodeContainer
      value={content}
      onChange={handleContent}
      height={500}
      placeholder="Wpisz kod..."
    />
  );
};

CodeEditor.propTypes = {
  content: PropTypes.string.isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default CodeEditor;
