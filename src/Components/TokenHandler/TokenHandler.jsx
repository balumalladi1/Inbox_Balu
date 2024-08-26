import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TokenHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleToken = () => {
      // Extract token from URL
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');

      if (token) {
        // Store token in local storage
        localStorage.setItem('token', `Bearer ${token}`);
        console.log("Token Stored in Local Storage:", token);
        // Redirect to the /emails route
        navigate('/emails');
      } else {
        console.log("No Token Found, navigating to home page.");
        // Redirect to login if no token found
        navigate('/');
      }
    };

    handleToken();
  }, [location, navigate]);

  return <p>Loading...</p>;
};

export default TokenHandler;