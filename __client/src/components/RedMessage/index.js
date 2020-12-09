import React from 'react';
import { useSelector } from 'react-redux';
import { RedMessage } from './style';

const Message = () => {
  const errorMessage = useSelector((state) => state.errorMessage);
  return <RedMessage>{errorMessage}</RedMessage>;
};

export default Message;
