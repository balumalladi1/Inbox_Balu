import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import EmailThreads from './Components/EmailThreads/EmailThreads';
import TokenHandler from './Components/TokenHandler/TokenHandler';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/token-handler" element={<TokenHandler />} />
        <Route path="/emails" element={isAuthenticated ? <EmailThreads /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;