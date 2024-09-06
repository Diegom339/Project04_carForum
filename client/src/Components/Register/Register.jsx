import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import our assets
import video from '../../LoginAssets/video2.mp4';
import logo from '../../LoginAssets/carlogo.svg';

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
  // UseState to hold our inputs
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  // Onclick let us get what the user has entered
  const createUser = (e) => {
    e.preventDefault();
    
    // We use Axios to create an API call that connects to the server
    axios.post('http://localhost:3000/register', {
      Email: email,
      UserName: userName,
      Password: password
    }).then(() => {
      // On successful registration, let us redirect the user to the login page
      navigateTo('/');

      // Let us clear the fields
      setEmail('');
      setUserName('');
      setPassword(''); // Clear the password as well
    }).catch((error) => {
      console.error('Error during registration:', error); // Handle the error properly
    });
  };

  return (
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Rev Up Your Passion for Cars!</h2>
            <p>Join a Community of Enthusiasts Where Every Drive is a Story.</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={'/'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form className='form grid' onSubmit={createUser}>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon'/>
                <input type="email" id='email' placeholder='Enter Email' onChange={(event) => setEmail(event.target.value)} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon'/>
                <input type="text" id='username' placeholder='Enter Username' onChange={(event) => setUserName(event.target.value)} />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon'/>
                <input type="password" id='password' placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} />
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight className='icon'/>
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

export default Register;
