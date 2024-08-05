import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import ProtectedRoutes from '../utils/ProtectedRoutes'; // Make sure this component exists and works as expected

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);

  const handleSuccess = async (response) => {
    try {
      // Extract the ID token from response.credential
      const idToken = response.credential;
      
      // Send ID token to backend for verification and user data retrieval
      const { data } = await axios.get('http://localhost:8080/auth/google', {
        id_token: idToken
      });

      // Assuming backend returns user info, set user data
      setUser(data);
      
      // Redirect or update UI based on user data
      // Example: Redirect to a protected route
      // <ProtectedRoutes userstatus='true'/>
    } catch (error) {
      console.error('Error during Google authentication:', error);
    }
  };

  const handleError = (error) => {
    console.error('Google authentication error:', error);
  };

  // Effect to handle user data if needed (e.g., redirect)
  useEffect(() => {
    if (user) {
      // Example of sending token to backend if needed
      axios.get('http://localhost:8080/auth/google', {
        headers: {
          Authorization: `Bearer ${user.access_token}`, // Adjust this based on actual token returned
          Accept: 'application/json'
        }
      })
      .then((res) => {
        // Process response from backend
        console.log('Profile data:', res.data);
      })
      .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
      // Additional props might be necessary based on your setup
    />
  );
};

export default GoogleLoginButton;
