import React, { useState } from 'react';
import '../styles/Login.css'
import hide from '../img/eye-password-hide.svg'
import show from '../img/eye-password-show.svg'
import page from '../img/login-page-img.png'

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <main>
      <div className='login-page-main'>
      <div className="login-block">
        <form className='login-form'>
          <h1>Login</h1>
          <div className="form-group">
            <p>Email or Phone</p>
            <input className="form-control1 item" type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Type Here" required/>
          </div>
          <div className="form-group">
            <p>Password</p>
            <input className="form-control item" type={showPassword ? "text" : "password"} name="Пароль" id="password" placeholder="Type Here" required/>
            <img src={showPassword ? hide : show} alt="toggle password visibility" onClick={togglePasswordVisibility} className="password-toggle" />
          </div>
          <div className="form-group">
            <button className="create-account" type="submit">Login</button>
          </div>
        </form>
        <p className='forgot-password'>Forgot Password?</p>
        <div className='login-page-signup-block'>
          <p className='login-dont-have'>Don't have an Account?</p>
          <p className='login-signup-link'>Sign Up Here</p>
        </div>
      </div>
      <img src={page} alt="page" className='page-img'/>
    </div>
  </main>
  <footer>
    <p>©Copyright 2022 All Rights Are Reserved.</p>
  </footer>
</>
);
};

export default Login;