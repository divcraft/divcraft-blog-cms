import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle, Wrapper } from 'components';
import { Container, Border } from './style';

const TitleContainer = ({ title, username, hasButtons }) => {
  return (
    <Border>
      <Wrapper>
        <Container>
          <MainTitle>{username ? `Cześć, ${username}` : title}</MainTitle>
          {hasButtons && <div>filter/sort buttons</div>}
        </Container>
      </Wrapper>
    </Border>
  );
};

TitleContainer.propTypes = {
  title: PropTypes.string,
  username: PropTypes.string,
  hasButtons: PropTypes.bool,
};

TitleContainer.defaultProps = {
  title: null,
  username: null,
  hasButtons: false,
};

export default TitleContainer;