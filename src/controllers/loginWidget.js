import React, { useState } from 'react';
import './LoginWidget.css';
import TextField from '../components/textField';
import Button from '../components/button';

export function LoginWidget() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    // You can implement the sign-in logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-widget">
      <TextField
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={handleEmailChange}
        className="input-field"
      />
      <TextField
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        className="input-field"
      />
      <Button className="sign-in-button" onClick={handleSignIn} label={"Sign In"}/>

    </div>
  );
}

export default LoginWidget;
