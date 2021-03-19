import React from 'react';
import PropTypes from 'prop-types';
import {
  RemoveElementButton,
  ChangePositionButtons,
} from 'pages/NewArticlePage/components';
import { ButtonsContainer } from './style';

const EditItemButtons = ({ handleRemoveItem }) => {
  return (
    <ButtonsContainer>
      <RemoveElementButton pattern="item" onClick={handleRemoveItem} />
      <ChangePositionButtons />
    </ButtonsContainer>
  );
};

EditItemButtons.propTypes = {
  handleRemoveItem: PropTypes.func.isRequired,
};
export default EditItemButtons;
