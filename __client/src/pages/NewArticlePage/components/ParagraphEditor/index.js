import React from 'react';
import PropTypes from 'prop-types';

const ParagraphEditor = ({ content }) => {
  return (
    <>
      <p>{content}</p>
    </>
  );
};

ParagraphEditor.propTypes = {
  content: PropTypes.string,
};

export default ParagraphEditor;
