import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LinkButton from '../../components/LinkButton';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';

import { Container, LoginBox, Title } from './styles';

function Login({ history }) {
  const [isSignIn, setSignIn] = useState(true);
  const user = useSelector(state => state.users.user);

  useEffect(() => {
    if (user) {
      history.push('/dashboard');
    }
  }, [user, history]);

  function handleSignInSignUp(e) {
    e.preventDefault();
    setSignIn(!isSignIn);
  }

  return (
    <Container>
      <LoginBox>
        <Title>Stock Management</Title>

        {isSignIn ? <SignInForm /> : <SignUpForm />}

        <LinkButton
          text={isSignIn ? 'Sign Up' : 'Sign In'}
          handleOnClick={handleSignInSignUp}
          styles={{ alignSelf: 'flex-end' }}
        />
      </LoginBox>
    </Container>
  );
}

export default withRouter(Login);
