import React from 'react';
import PropTypes from 'prop-types';
import logoImg from 'img/logo.svg';
import { Container, Logo, Header, Describe, Footer } from './style';

const Banner = ({ api }) => {
  const { header, describe, author, link } = api;
  return (
    <Container>
      <Logo src={logoImg} alt="div-craft logo" />
      <Header>{header}</Header>
      <Describe>{describe}</Describe>
      <Footer>
        <div>{author}</div>
        <div>
          (
          <a href={`https://${link}`} target="_blank" rel="noreferrer">
            {link}
          </a>
          )
        </div>
      </Footer>
    </Container>
  );
};

Banner.propTypes = {
  api: PropTypes.instanceOf(Object).isRequired,
};

export default Banner;
