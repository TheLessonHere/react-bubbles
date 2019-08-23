import React, { useState } from "react";
import axios from 'axios';

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  // make a post request to retrieve a token from the api
  const login = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/bubblepage')
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
  };
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit">Log in</button>
        </form>
      </>
  );
};

export default Login;
