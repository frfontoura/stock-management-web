import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import { signIn } from '../../services/auth';
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';

import { Form } from './styles';

/**
 * Sign Up form component
 */
function SignUpForm({ history }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  /**
   * Validates that the form data are correct
   *
   * @param {*} data
   */
  async function validate(data) {
    formRef.current.setErrors({});
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      username: Yup.string()
        .min(6)
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  }

  /**
   * Function responsible for handling errors during user signUp/signIn
   *
   * @param {object} err
   */
  function handleError(err) {
    if (err instanceof Yup.ValidationError) {
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      formRef.current.setErrors(validationErrors);
    }
  }

  /**
   * Function responsible for user sign up and sign in
   *
   * @param {object} data Object sent by Unform
   */
  async function handleSubmit(data) {
    try {
      await validate(data);
      const res = await api.post('/signup', data);
      if (res.status === 201) {
        signIn(data, dispatch, history);
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input type="text" placeholder="Name" name="name" />
      <Input type="text" placeholder="Username" name="username" />
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Password" name="password" />

      <PrimaryButton text="Sign Up" type="submit" />
    </Form>
  );
}

export default withRouter(SignUpForm);
