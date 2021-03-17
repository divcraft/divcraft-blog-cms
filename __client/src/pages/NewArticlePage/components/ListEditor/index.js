import React from 'react';
import PropTypes from 'prop-types';

const ListEditor = ({ content }) => {
  return (
    <>
      <ul>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

ListEditor.propTypes = {
  content: PropTypes.instanceOf(Array),
};

export default ListEditor;
