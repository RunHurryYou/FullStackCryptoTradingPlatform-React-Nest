import React, { useState } from "react";
import styles from "./ForgivePassword.module.scss";
import page from '../../img/login-page-img.png';
import { Link } from 'react-router-dom';


const ForgivePassword: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
      <>
        <main className={styles.login_main}>
        <div className={styles.login_page_main}>
        <div className={styles.login_block}>
          <form className={styles.login_form}>
            <h1>Forgot Password</h1>
            <div className={styles.form_group}>
              <p>Email or Phone</p>
              <input className={styles.form_control1} type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Type Here" required/>
            </div>
            <div className={styles.form_group}>
              <p>Verification Code</p>
              <input className={styles.form_control} type={showPassword ? "text" : "password"} name="Пароль" id="password" placeholder="Type Here" required/>
              <p onClick={togglePasswordVisibility} className={styles.ver_code}>Send Code</p>
            </div>
            <div className={styles.form_group}>
              <button className={styles.create_account} type="submit">Login</button>
            </div>
          </form>
          <Link to="/forgive_password" className={styles.forgot_password}>Forgot Password?</Link>
          <div className={styles.login_page_signup_block}>
            <p className={styles.login_dont_have}>Don't have an Account?</p>
            <Link to="/signup" className={styles.login_signup_link}>Sign Up Here</Link>
          </div>
        </div>
        <img src={page} alt="page" className={styles.page_img}/>
      </div>
      <div className={styles.login_footer}>
      <p>©Copyright 2022 All Rights Are Reserved.</p>
      </div>
    </main>
  </>
  );
};

export default ForgivePassword;