import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage } from 'store/actions';
import { LogInForm, RecoverPasswordForm } from 'layouts';
import { Logo, TitleH1, Button } from 'components';
import { Background, Container } from './style';

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
        <Logo color="colored" />
        <TitleH1 login>BLOG PANEL</TitleH1>
        {!recoverPassForm ? <LogInForm /> : <RecoverPasswordForm />}
        <Button onClick={() => handleClick()}>{inlineButtonText}</Button>
      </Container>
    </Background>
  );
};

export default LogInContainer;
