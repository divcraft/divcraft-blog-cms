import React from 'react';
import PropTypes from 'prop-types';

const ImageEditor = ({ content }) => {
  return (
    <>
      <img src={content.src} alt={content.alt} />
    </>
  );
};

ImageEditor.propTypes = {
  content: PropTypes.instanceOf(Object),
};

export default ImageEditor;
