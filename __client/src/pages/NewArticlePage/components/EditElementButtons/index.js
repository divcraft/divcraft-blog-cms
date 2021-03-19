import React from 'react';
import PropTypes from 'prop-types';
import {
  RemoveElementButton,
  ChangePositionButtons,
} from 'pages/NewArticlePage/components';
import { ButtonsContainer } from './style';

const EditElementButtons = ({
  handleRemoveElement,
  handleMoveElementUp,
  handleMoveElementDown,
  pattern,
}) => {
  return (
    <ButtonsContainer pattern={pattern}>
      <RemoveElementButton pattern={pattern} onClick={handleRemoveElement} />
      <ChangePositionButtons
        handleMoveElementUp={handleMoveElementUp}
        handleMoveElementDown={handleMoveElementDown}
      />
    </ButtonsContainer>
  );
};

EditElementButtons.propTypes = {
  pattern: PropTypes.oneOf(['section', 'item']).isRequired,
  handleRemoveElement: PropTypes.func.isRequired,
  handleMoveElementUp: PropTypes.func.isRequired,
  handleMoveElementDown: PropTypes.func.isRequired,
};
export default EditElementButtons;
