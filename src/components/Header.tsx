import React, { useState } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className='app-header'>
        <div className='logolink'>
            <Link to="/"><img src={logo} alt="" className="headimg" /></Link>
            <div className="create-line"></div>
        </div>
        <div className="navbar">
            <div className='link'>
            <Link to="/market">Market</Link>
            </div>
            <div className='link'>
                <Link to="/trade">Trade</Link>
            </div>
            <div className='link'>
                <Link to="/earn">Earn</Link>
            </div>
            <div className='link'>
                <Link to="/about">About</Link>
            </div>
            <div className='link'>
                <Link to="/career">Career</Link>
            </div>
        </div>
        <div className='reg'>
            {isLoggedIn ? (
            <a className="logout" onClick={toggleLogin}>Log Out</a>
            ) : (
            <>  
                <a className="login" onClick={toggleLogin}>Log In</a>
                <a className="sign" onClick={toggleLogin}>Sign Up</a>
            </>
            )}
        </div>   
    </header>
  );
};

export default Header;
