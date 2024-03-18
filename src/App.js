import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setUserData(userData);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard userData={userData} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
