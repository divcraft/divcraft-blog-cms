import React from 'react';
import { useSelector } from 'react-redux';
import { RedMessage } from './style';

const Message = ({ ...props }) => {
  const errorMessage = useSelector((state) => state.errorMessage);
  return <RedMessage {...props}>{errorMessage}</RedMessage>;
};

export default Message;
