import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import './styles.css';

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
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Stock Management</h1>

        {isSignIn ? <SignInForm /> : <SignUpForm />}

        <button
          className="link-button"
          type="button"
          onClick={handleSignInSignUp}
        >
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </button>
      </div>
    </div>
  );
}

export default withRouter(Login);
