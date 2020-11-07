import React from 'react';
import { LogInForm } from 'layouts';
import { Logo, TitleH1 } from 'components';
import { Background, Container } from './style';

const LogInContainer = () => {
  return (
    <Background>
      <Container>
        <Logo color="colored" />
        <TitleH1 login>BLOG PANEL</TitleH1>
        <LogInForm />
      </Container>
    </Background>
  );
};

export default LogInContainer;
