import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import './Home.css';
// import AuthForm from '../components/AuthForm/AuthForm';
// import dogImage from '../assets/dog.jpg';

const Home2 = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // return <div>this is a test of the home page</div>;
  if (!authState) {
    return <div>Loading...</div>;
  }

  oktaAuth.token
    .getUserInfo()
    .then((info) => {
      setUserEmail(info.email);
      setFirstName(info.given_name);
      setLastName(info.family_name);
    })
    .catch((err) => {
      console.log(err);
    });

  const handleLogin = async () => history.push('/login');
  const handleLogout = async () => oktaAuth.signOut();

  return (
    <div className="home2">
      <p>
        You are not signed in &nbsp;
        <Link to="/login" className="font-bold">
          Sign In or Login
        </Link>
      </p>
    </div>
  );
};

export default Home2;
