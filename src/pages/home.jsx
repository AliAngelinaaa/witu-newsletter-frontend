// pages/home.jsx or wherever you want the Google Sign-In button
import React from 'react';
import GoogleLoginButton from '../auth/GoogleLoginButton'; // Adjust the path if necessary

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Newsletter App</h1>
      <GoogleLoginButton />
    </div>
  );
};

export default Home;
