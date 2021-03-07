import React from 'react';
import PropTypes from 'prop-types';

const SubtitleEditor = ({ content }) => {
  return (
    <>
      <h3>{content}</h3>
    </>
  );
};

SubtitleEditor.propTypes = {
  content: PropTypes.string,
};

export default SubtitleEditor;
