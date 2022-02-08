import React from 'react';
import logo from './logo192.png';

export default function Header(){
    return(
      <header className='nav-bar-wrapper'>
        <nav className='nav-bar'>
            <div className='nav-bar-container'>
                <img className='nav-logo' src={logo} alt='react-icon' />
                <span className='nav-ReactFacts'>ReactFacts</span>
            </div>
            <span className='nav-heading'>React Course - Project 1</span>
        </nav>
      </header>
    )
}
