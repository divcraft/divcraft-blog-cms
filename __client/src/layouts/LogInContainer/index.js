import React, { useState } from 'react';
import { LogInForm, RecoverPasswordForm } from 'layouts';
import { Logo, TitleH1, Button } from 'components';
import { Background, Container } from './style';

const LogInContainer = () => {
  const [recoverPassForm, setRecoverPassForm] = useState(false);
  const inlineButtonText = !recoverPassForm
    ? 'Przypomnij hasło'
    : 'Wróć do logowania';
  return (
    <Background>
      <Container>
        <Logo color="colored" />
        <TitleH1 login>BLOG PANEL</TitleH1>
        {!recoverPassForm ? <LogInForm /> : <RecoverPasswordForm />}
        <Button onClick={() => setRecoverPassForm(!recoverPassForm)}>
          {inlineButtonText}
        </Button>
      </Container>
    </Background>
  );
};

export default LogInContainer;
