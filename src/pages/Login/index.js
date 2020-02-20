import React, { useState } from 'react';

import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import './styles.css';

export default function Login() {
  const [isSignIn, setSignIn] = useState(true);

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
