import React from 'react';
import { BrowserRouter as Router, useHistory, Route, Routes } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import Button from '@mui/material/Button';
import { oktaConfig } from '../oktaConfig';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Locked from './Components/Locked';
import './App.css';

const oktaAuth = new OktaAuth(oktaConfig.oidc);

const App = () => {
  // const history = useHistory();
  const history = useHistory();

  const customAuthHandler = () => {
    // navigate('/login');
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    // if (history) {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
    // } else {
    //   console.log("there's no history");
    // }
  };

  const CALLBACK_PATH = '/login/callback';

  return (
    <div className="App">
      <header className="App-header">
        {/* <Router> */}
        <Security
          oktaAuth={oktaAuth}
          onAuthRequired={customAuthHandler}
          restoreOriginalUri={restoreOriginalUri}
        >
          <SecureRoute path="/" render={() => <Home />} />
          <Route path="/login" render={() => <Login />} />
          <Route path={CALLBACK_PATH} componenet={LoginCallback} />
          <SecureRoute path="/locked" render={() => <Locked />} />
        </Security>
        {/* </Router> */}
      </header>
    </div>
  );
};
// this is a test
export default App;
