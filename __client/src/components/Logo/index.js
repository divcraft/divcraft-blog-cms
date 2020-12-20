import React from 'react';
import PropTypes from 'prop-types';
import whiteLogo from 'img/logo-white.svg';
import coloredLogo from 'img/logo-color.svg';
import { Img } from './style';

const Logo = ({ pattern, ...props }) => {
  const logoImg = pattern === 'colored' ? coloredLogo : whiteLogo;
  return <Img src={logoImg} alt="Logo" {...props} />;
};

Logo.propTypes = {
  pattern: PropTypes.oneOf(['white', 'colored']).isRequired,
};

export default Logo;
