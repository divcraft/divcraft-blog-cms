import React from 'react';
import { useFormik } from 'formik';
import { Form, Input, Button } from './style';

const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: ({ username, password }) => {
      console.log({ username, password });
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
