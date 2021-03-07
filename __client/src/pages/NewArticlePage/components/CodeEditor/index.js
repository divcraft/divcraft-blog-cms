import React from 'react';
import PropTypes from 'prop-types';

const CodeEditor = ({ content }) => {
  return (
    <>
      <code>{content}</code>
    </>
  );
};

CodeEditor.propTypes = {
  content: PropTypes.string,
};

export default CodeEditor;
