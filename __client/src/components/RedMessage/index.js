import React from 'react';
import PropTypes from 'prop-types';
import { RedMessage } from './style';

const Message = ({ children }) => {
  return <RedMessage>{children}</RedMessage>;
};

Message.propTypes = {
  children: PropTypes.string,
};

export default Message;
