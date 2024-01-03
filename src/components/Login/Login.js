import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../Header/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add Firebase authentication logic here
    // Example: authService.login(email, password);
    console.log('Login clicked');
    // Redirect to dashboard or next page upon successful login
    // history.push('/dashboard');
  };

  return (
    <div>
    <Header />
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p><Link to="/register">Don't have an account? Register here.</Link></p>
    </div>
    </div>
  );
};

export default Login;
