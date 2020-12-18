import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, setFormLoaderOff } from 'store/actions';
import { Logo, TitleH1, Button } from 'components';
import {
  LogInForm,
  RecoverPasswordForm,
  Background,
  Container,
} from './components';

const LogInContainer = () => {
  const [recoverPassForm, setRecoverPassForm] = useState(false);
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const isFormLoading = useSelector((state) => state.formLoader);
  const handleClick = () => {
    if (errorMessage) dispatch(clearErrorMessage);
    if (isFormLoading) dispatch(setFormLoaderOff);
    setRecoverPassForm(!recoverPassForm);
  };
  const inlineButtonText = !recoverPassForm
    ? 'Przypomnij hasło'
    : 'Wróć do logowania';
  return (
    <Background>
      <Container>
        <Logo color="colored" />
        <TitleH1 login>BLOG PANEL</TitleH1>
        {!recoverPassForm ? <LogInForm /> : <RecoverPasswordForm />}
        <Button onClick={() => handleClick()}>{inlineButtonText}</Button>
      </Container>
    </Background>
  );
};

export default LogInContainer;
