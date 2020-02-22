import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { signIn } from '../../services/auth';
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';

import './styles.css';

/**
 * Sign In form component
 */
function SignInForm({ history }) {
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
   * Function responsible for handling errors during user login
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
   * Function responsible for user login
   *
   * @param {object} data Object sent by Unform
   */
  async function handleSubmit(data) {
    try {
      await validate(data);
      signIn(data, dispatch, history);
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <div className="formContainer">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" name="username" />
        <Input type="password" placeholder="Password" name="password" />
        <PrimaryButton text="Sign In" />
      </Form>
    </div>
  );
}

export default withRouter(SignInForm);
