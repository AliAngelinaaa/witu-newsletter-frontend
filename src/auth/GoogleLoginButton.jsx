import React, { useEffect, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton = () => {
  const [user, setUser] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSuccess = async (response) => {
    try {
      const idToken = response.credential;

      const { data } = await axios.get(`${backendUrl}/auth/google`, {
        params: {
          id_token: idToken,
        },
      });

      setUser(data);
    } catch (error) {
      console.error("Error during Google authentication:", error);
    }
  };

  const handleError = (error) => {
    console.error("Google authentication error:", error);
  };

  useEffect(() => {
    if (user) {
      console.log("User data received:", user);
    }
  }, [user]);

  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} />;
};

export default GoogleLoginButton;
