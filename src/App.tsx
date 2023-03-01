import { useState } from 'react';
import Button from '@mui/material/Button';
import reactLogo from './assets/react.svg';
import OpenAIForm from './Components/OpenAIForm';
import './App.css';

const App = () => {
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
    <div className="App">
      <div className="topBar">
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
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
        {loggedIn || choseGuest ? null : (
          <div className="services">
            <h1>Make a selection below</h1>
            <Button variant="outlined">Take a quiz</Button>
            <Button variant="outlined">Ask me a question</Button>
            <Button variant="outlined">Want a picture?</Button>
          </div>
        )}
      </div>
      <div />
    </div>
  );
};

export default App;

// import { Configuration, OpenAIApi } from 'openai';
// const configuration = new Configuration({
//   organization: 'org-FWuxFAgymlykB0QZAteFZmNY',
//   apiKey: process.env.OPENAI_API_KEY
// });
// const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// GET https://api.openai.com/v1/models
// 'Authorization: Bearer YOUR_API_KEY';
