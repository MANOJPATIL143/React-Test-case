import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const users = [
    {
      firstName: 'john',
      lastName: 'doe',
      email: 'john@example.com',
      password: '123456',
    },
    {
      firstName: 'manu',
      lastName: 'patil',
      email: 'manu@example.com',
      password: '1234567',
    },
    {
      firstName: 'manoj',
      lastName: 'patil',
      email: 'manoj@example.com',
      password: '12345678',
    },
    {
      firstName: 'abc',
      lastName: 'xyz',
      email: 'abc@example.com',
      password: '123456789',
    },
    
  ];

  const handleLogin = ()=>{

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      onLogin(user);
    }
    else{
      alert( 'Invalid email or password');
    }


  }

 
  

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '300px' }}>
      <h1>Login Page</h1>
      <input
        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
