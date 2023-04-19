## Login via emailid or password through Front-End Side using React js

'''
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // simulate API call with a delay of 1 second
    setTimeout(() => {
      // check if email and password match a predefined value
      if (email === 'user@example.com' && password === 'password') {
        setIsLoggedIn(true);
      } else {
        alert('Invalid email or password');
      }
    }, 1000);
  };

  if (isLoggedIn) {
    // redirect to the home page
    window.location.replace('/');
    return null; // return null to prevent rendering anything else
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
'''