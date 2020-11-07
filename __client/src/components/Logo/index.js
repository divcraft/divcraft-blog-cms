import React from 'react';
import PropTypes from 'prop-types';
import whiteLogo from 'img/logo-white.svg';
import coloredLogo from 'img/logo-color.svg';
import { Img } from './style';

const Logo = ({ color }) => {
  const logoImg = color === 'colored' ? coloredLogo : whiteLogo;
  return <Img src={logoImg} alt="Logo" />;
};

Logo.propTypes = {
  color: PropTypes.oneOf(['white', 'colored']).isRequired,
};

export default Logo;
