import React from 'react';
import Axios from 'axios';
import { useFormik } from 'formik';
import { Form, Input, Button } from './style';

const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }) => {
      Axios.post('/api/authentication/login', {
        username,
        password,
      })
        .then((res) => console.log(res))
        .catch((err) => {
          throw err;
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="username"
        id="username"
        placeholder="login"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="hasło"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit">Zaloguj się</Button>
    </Form>
  );
};

export default LogInForm;
