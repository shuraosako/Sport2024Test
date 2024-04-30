import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginForm.css';
import loginImage from '../image/login-image.jpg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 's21m1012@bene.fit.ac.jp' && password === 'osako1213') {
      setLoginError(false);
      navigate('/dashboard');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {loginError && (
              <p className="login-error">Invalid email or password</p>
            )}
          </div>
          <div className="forgot-password">
            <button type="button">
              Forgot your <span>password?</span>
            </button>
          </div>
          <button type="submit">Connect</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;