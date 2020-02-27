import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import api from '../../services/api';
import { Creators as PortfolioActions } from '../../store/ducks/portfolios';
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';

import { Container, Form, Title } from './styles';

export default function PortfolioForm() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.users.user.id);

  /**
   * Validates that the form data are correct
   *
   * @param {*} data
   */
  async function validate(data) {
    formRef.current.setErrors({});
    const schema = Yup.object().shape({
      name: Yup.string()
        .min(3)
        .required(),
      description: Yup.string()
        .min(3)
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
  async function handleSubmit(data, { reset }) {
    try {
      await validate(data);
      const res = await api.post(`/api/users/${userId}/portfolios`, data);
      if (res.status === 201) {
        dispatch(PortfolioActions.added(res.data));
        reset();
      }
    } catch (err) {
      handleError(err);
    }
  }

  return (
    <Container>
      <Title>Add Portfolio</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" placeholder="Portfolio Name" name="name" />
        <Input type="text" placeholder="Description" name="description" />
        <PrimaryButton text="Add" />
      </Form>
    </Container>
  );
}
