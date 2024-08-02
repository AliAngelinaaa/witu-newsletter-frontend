import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton = () => {
  const handleSuccess = async (response) => {
    try {
      // Assuming response.credential contains the ID token
      const { data } = await axios.post('http://localhost:8080/auth/google', {
        id_token: response.credential,
      });

      // Handle successful authentication (e.g., store user data or redirect)
      console.log('User data:', data);
    } catch (error) {
      console.error('Error during Google authentication:', error);
    }
  };

  const handleError = (error) => {
    console.error('Google authentication error:', error);
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      // Additional props might be necessary based on your setup
    />
  );
};

export default GoogleLoginButton;
