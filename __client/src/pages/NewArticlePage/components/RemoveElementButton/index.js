import React from 'react';
import { StyledButton } from './style';

const RemoveElementButton = ({ ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      +
    </StyledButton>
  );
};

export default RemoveElementButton;
