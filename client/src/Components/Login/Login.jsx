import React, { useEffect, useState } from 'react';
import './Login.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import our assets
import video from '../../LoginAssets/video2.mp4';
import logo from '../../LoginAssets/carlogo.png';

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';

const Login = () => {
  // Usestate Hook to store inputs
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();

  // Let us now show the message to the user
  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setStatusHolder] = useState('message');

  // Onclick let us get what the user has entered
  const loginUser = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/login', {
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    })
      .then((response) => {
        if (response.data.token) {
          // Store the token and user data in local storage
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user)); // Store the entire user object

          console.log("Navigating to dashboard");
          navigateTo('/dashboard'); // Ensure this matches your route exactly
        } else {
          setLoginStatus(response.data.message);
          console.log(response.data.message);
          setTimeout(() => {
            navigateTo('/'); // This navigates back to login
          }, 2000);
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        setLoginStatus("Login failed. Please try again later.");
      });
  };

  useEffect(() => {
    if (loginStatus === "Credentials Don't Exist!") {
      setTimeout(() => {
        navigateTo('/');
      }, 2000); // Adjust timing as needed
    }
  }, [loginStatus, navigateTo]);

  // Lets clear the form on submit
  const onSubmit = () => {
    setLoginUserName('');
    setLoginPassword('');
  };

  return (
    <div className='loginPage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Welcome Back!</h2>
            <p>Your Next Drive Starts Here. Dive into the latest discussions,
              share your rides, and connect with fellow car enthusiasts!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input
                  type="text"
                  id='username'
                  placeholder='Enter Username'
                  value={loginUserName}
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input
                  type="password"
                  id='password'
                  placeholder='Enter Password'
                  value={loginPassword}
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <span className='forgotPassword'>
              Forgot your password? <a href="">Click Here</a>
            </span>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
