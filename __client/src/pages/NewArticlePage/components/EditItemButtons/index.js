import React from 'react';
import PropTypes from 'prop-types';
import { RemoveElementButton } from 'pages/NewArticlePage/components';
import { ButtonsContainer } from './style';

const EditItemButtons = ({ handleRemoveItem }) => {
  return (
    <ButtonsContainer>
      <RemoveElementButton
        style={{ position: 'relative' }}
        onClick={handleRemoveItem}
      />
    </ButtonsContainer>
  );
};

EditItemButtons.propTypes = {
  handleRemoveItem: PropTypes.func.isRequired,
};
export default EditItemButtons;
