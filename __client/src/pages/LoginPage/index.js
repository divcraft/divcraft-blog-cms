import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage } from 'store/actions';
import { Logo, Button } from 'components';
import {
  LoginTitle,
  LogInForm,
  RecoverPasswordForm,
  Background,
  Container,
} from './components';

const LogInContainer = () => {
  const [recoverPassForm, setRecoverPassForm] = useState(false);
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const handleClick = () => {
    if (errorMessage) dispatch(clearErrorMessage);
    setRecoverPassForm(!recoverPassForm);
  };
  const inlineButtonText = !recoverPassForm
    ? 'Przypomnij hasło'
    : 'Wróć do logowania';
  return (
    <Background>
      <Container>
        <Logo pattern="colored" />
        <LoginTitle>BLOG PANEL</LoginTitle>
        {!recoverPassForm ? <LogInForm /> : <RecoverPasswordForm />}
        <Button pattern="text" onClick={() => handleClick()}>
          {inlineButtonText}
        </Button>
      </Container>
    </Background>
  );
};

export default LogInContainer;
