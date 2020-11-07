import React from 'react';
import PropTypes from 'prop-types';
import { MainH1, LoginH1 } from './style';

const TitleH1 = ({ login, children }) => {
  return login ? <LoginH1>{children}</LoginH1> : <MainH1>{children}</MainH1>;
};

TitleH1.propTypes = {
  login: PropTypes.bool,
  children: PropTypes.string,
};

TitleH1.defaultProps = {
  login: false,
  children: undefined,
};

export default TitleH1;
