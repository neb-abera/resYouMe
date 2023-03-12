import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import Button from '@mui/material/Button';
import OktaSignInWidget from '../OktaSignInWidget';
// import reactLogo from './assets/react.svg';
import OpenAIForm from '../OpenAIForm';
import './Login.css';

const Login = ({ config }) => {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [choseGuest, setChoseGuest] = useState(false);
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens: any) => {
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err: any) => {
    // console.log('Sign in error', err);
  };

  if (!authState) {
    return <div>Loading...</div>;
  }

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <OktaSignInWidget config={config} onSuccess={onSuccess} onError={onError} />
  );
};

export default Login;
