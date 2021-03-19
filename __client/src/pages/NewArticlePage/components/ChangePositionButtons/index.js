import React from 'react';
// import PropTypes from 'prop-types';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { StyledFontAwesome, ArrowButton } from './style';

const ChangePositionButtons = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <ArrowButton>
        <StyledFontAwesome onClick={handleClick} icon={faSortUp} />
      </ArrowButton>
      <ArrowButton>
        <StyledFontAwesome onClick={handleClick} icon={faSortDown} />
      </ArrowButton>
    </div>
  );
};

ChangePositionButtons.propTypes = {
  //   handleRemoveItem: PropTypes.func.isRequired,
};
export default ChangePositionButtons;
