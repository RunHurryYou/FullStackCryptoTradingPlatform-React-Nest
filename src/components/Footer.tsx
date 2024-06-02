import React from 'react';
import logo from '../img/logo.svg';
import discord from '../img/discord.svg'
import tg from '../img/tg.svg'
import inst from '../img/inst.svg'
import linked from '../img/linked.svg'
import youtube from '../img/youtube.svg'
import dot from '../img/dot.svg'

const Footer: React.FC = () => {

  return (
    <footer className='app-footer'>
        <div className="footer-community">
            <div className='logofooter'>
                <img src={logo} alt="логотип" className="headimg" />
            </div>
            <div className="community">
                <div>Community:</div>
                <img src={discord} alt="discord" />
                <img src={tg} alt="tg" />
                <img src={inst} alt="inst" />
                <img src={linked} alt="linked" />
                <img src={youtube} alt="youtube" />
            </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-cards-links">
            <div className="footer-card">
                <div className="footer-card-title">Crypto Brains</div>
                <div className="footer-link">About Us</div>
                <div className="footer-link">Our Team</div>
                <div className="footer-link">Road Map</div>
                <div className="footer-link">Risk Disclosure</div>
            </div>
            <div className="footer-card">
                <div className="footer-card-title">Knowledge</div>
                <div className="footer-link">F.A.Q.</div>
                <div className="footer-link">Articals</div>
                <div className="footer-link">Video Tutorial</div>
                <div className="footer-link">Beginner’s Guide</div>
            </div>
            <div className="footer-card">
                <div className="footer-card-title">Services</div>
                <div className="footer-link">API Service</div>
                <div className="footer-link">Token Listing</div>
                <div className="footer-link">API Document</div>
                <div className="footer-link">Ticket Services</div>
            </div>
            <div className="footer-card">
                <div className="footer-card-title">Exchange</div>
                <div className="footer-link">P2P</div>
                <div className="footer-link">Referral</div>
                <div className="footer-link">Markets</div>
                <div className="footer-link">Affiliate Program</div>
            </div>
            <div className="footer-card">
                <div className="footer-card-title">Support Sevice</div>
                <div className="footer-link">Career</div>
                <div className="footer-link">Comunity</div>
                <div className="footer-link">Customer Chat</div>
                <div className="footer-link">Technical Support</div>
            </div>
            <div className="footer-card">
                <div className="footer-card-title">Press</div>
                <div className="footer-link">Blog</div>
                <div className="footer-link">News</div>
                <div className="footer-link">Events</div>
            </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bott">
            <div className="bottom-text">
                <div>©Copyright 2022 All Rights Are Reserved.</div>  
                <img src={dot} alt="firstdot" />
                <div>Privacy Policy</div>
                <img src={dot} alt="seconddot" />
                <div>Terms of Use</div>
            </div>
            <div className="bottom-switch">
                {/* <select name="language" className="language-select">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select> */}
            </div>
        </div>
    </footer>
  );
};

export default Footer;
