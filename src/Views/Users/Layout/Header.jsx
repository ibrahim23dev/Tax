import React, { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';

import { CgMenu } from "react-icons/cg";
import { BsPhoneVibrate } from 'react-icons/bs';
import { SiConsul } from 'react-icons/si';
import Login from '../Auth/Login';

function Header() {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div><SiConsul /></div>
        <div className='flex gap-5'>
          <li className='flex'><BsPhoneVibrate className='icon'/> Support</li>
          <li className='flex'><AiOutlineGlobal className='icon'/> Language</li>
        </div>
        <div className='atb flex'>
          <span><Login/>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className='navBarTwo flex'>
        <div className='logoDiv'>
          <img className='logo' src='' alt='Logo' />
        </div>
        <div className={`navBarMenu ${active ? 'showNavbar' : ''}`}>
          <ul className='menu flex'>
            <li onClick={toggleNavbar} className='listItem'>Home</li>
            <li onClick={toggleNavbar} className='listItem'>Services</li>
            <li onClick={toggleNavbar} className='listItem'>Help</li>
            <li onClick={toggleNavbar} className='listItem'>Resources</li>
            <li onClick={toggleNavbar} className='listItem'>About Us</li>
          </ul>
          <button onClick={toggleNavbar} className='btn flex btnOne'>
            Get Started
          </button>
          
        </div>
        <button className='btn flex btnTwo'>
          Get Started
        </button>
        <div onClick={toggleNavbar} className='toggleIcon'>
          <CgMenu className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default Header;
