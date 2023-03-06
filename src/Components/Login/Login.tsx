import { useState } from 'react';
import Button from '@mui/material/Button';
import reactLogo from './assets/react.svg';
import OpenAIForm from '../OpenAIForm';
import './Login.css';

const Login = () => {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [choseGuest, setChoseGuest] = useState(false);

  const handleLoginClick = () => {
    console.log('login clicked');
    setLoggedIn(true);
  };
  const handleSignupClick = () => {
    console.log('signup clicked');
  };
  const handleGuestClick = () => {
    console.log('guest clicked');
    setChoseGuest(true);
  };
  return (
    <div className="Login">
      <div>
        {loggedIn || choseGuest ? null : (
          <>
            <h1>resYouMe</h1>
            <h2>Your AI powered </h2>
            <Button variant="outlined" onClick={handleLoginClick}>
              Log-in
            </Button>
            <Button variant="outlined" onClick={handleSignupClick}>
              Sign-up
            </Button>
            <Button variant="outlined" onClick={handleGuestClick}>
              Use as Guest
            </Button>
          </>
        )}
        {choseGuest ? <OpenAIForm /> : null}
      </div>
    </div>
  );
};

export default Login;

// import { Configuration, OpenAIApi } from 'openai';
// const configuration = new Configuration({
//   organization: 'org-FWuxFAgymlykB0QZAteFZmNY',
//   apiKey: process.env.OPENAI_API_KEY
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// GET https://api.openai.com/v1/models
// 'Authorization: Bearer YOUR_API_KEY';
