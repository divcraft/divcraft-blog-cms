import React from 'react';
import PropTypes from 'prop-types';
import { ListItemContainer } from './style';

const ListEditor = ({ content, handleContent }) => {
  return (
    <ul>
      {content.map((item) => (
        <li key={item.listItemPosition}>
          <ListItemContainer
            data-position={item.listItemPosition}
            key={item.listItemPosition}
            type="text"
            value={item.data}
            onChange={handleContent}
            placeholder="Element listy..."
          />
        </li>
      ))}
    </ul>
  );
};

ListEditor.propTypes = {
  content: PropTypes.instanceOf(Array).isRequired,
  handleContent: PropTypes.func.isRequired,
};

export default ListEditor;
