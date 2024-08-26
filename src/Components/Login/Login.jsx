import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Redirecting to Google login
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://papaya-frangollo-e78355.netlify.app/token-handler";
  };

  return (
    <div className='main-container-login'>
      <div className="loginpage-navbar-top">
        <img src="https://res.cloudinary.com/dlbodeuso/image/upload/v1724486890/Logo_12.jpeg_ihidyz.png" alt="Logo" />
      </div>
      <div className="login-page-center-container">
        <h2 className='heading'>Create a new account</h2>
        <div className="sign-in-google-container" onClick={handleGoogleLogin}>
          <img src="https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg" alt="Google logo" />
          <p className='para1'>Sign Up with Google</p>
        </div>
        <div className="button">
          <button>Create an Account</button>
        </div>
        <p className='para1'>Already have an account? Sign In</p>
      </div>
      <div className="login-bottom">
        <hr />
        <p> 2023 Reachinbox. All rights reserved. </p>
      </div>
    </div>
  );
};

export default Login;