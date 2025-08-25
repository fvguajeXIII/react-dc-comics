
import React from 'react';
import dcLogo from '../assets/img/dc-logo.png';

function Header() {
  return (
    <header className="header-row">
      <div className='logo'>
        <img src={dcLogo} alt="logo dc"/>
      </div>
      <nav className='navbar'>
        <ul>
          <li><a href="#">Characters</a></li>
          <li><a href="#" className="active">Comics</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Collectibles</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Fans</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
