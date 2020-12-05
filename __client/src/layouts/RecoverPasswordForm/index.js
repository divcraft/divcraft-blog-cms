import React, { useState } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import { Input, Button, RedMessage } from 'components';
import { RecoverPassNotifcation } from './style';

const RecoverPasswordForm = () => {
  const [formSent, setFormSent] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [emailIncorrect, setEmailIncorrect] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: ({ email }) => {
      if (emailNotFound) setEmailNotFound(false);
      if (emailIncorrect) setEmailIncorrect(false);
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.email)
      ) {
        return setEmailIncorrect(true);
      }
      Axios.post('/api/authentication/recover', {
        email,
      })
        .then((res) => {
          if (res.status === 200) {
            setFormSent(true);
          } else if (res.status === 204) {
            setEmailNotFound(true);
          }
        })
        .catch((err) => {
          throw err;
        });
    },
  });
  return (
    <>
      {formSent ? (
        <RecoverPassNotifcation>
          Hasło zostało wysłane na adres
          <div>{formik.values.email}</div>
        </RecoverPassNotifcation>
      ) : (
        <form onSubmit={formik.handleSubmit} noValidate>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Button box type="submit" disabled={!formik.values.email}>
            Wyślij hasło
          </Button>
        </form>
      )}
      {emailIncorrect && <RedMessage>Podaj poprawny adres email.</RedMessage>}
      {emailNotFound && (
        <RedMessage>Brak konta powiązanego z podanym adresem email.</RedMessage>
      )}
    </>
  );
};

export default RecoverPasswordForm;
