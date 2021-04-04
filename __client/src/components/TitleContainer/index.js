import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle, Wrapper } from 'components';
import { Container, Border } from './style';

const TitleContainer = ({ title, username, hasButtons, TitleButtons }) => {
  return (
    <Border>
      <Wrapper>
        <Container>
          <MainTitle>{username ? `Cześć, ${username}` : title}</MainTitle>
          {hasButtons && <TitleButtons />}
        </Container>
      </Wrapper>
    </Border>
  );
};

TitleContainer.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  hasButtons: PropTypes.bool,
  TitleButtons: PropTypes.instanceOf(Object),
};

TitleContainer.defaultProps = {
  title: null,
  username: null,
  hasButtons: false,
  TitleButtons: null,
};

export default TitleContainer;
