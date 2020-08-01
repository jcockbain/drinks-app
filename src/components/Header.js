import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <Link to="/">
      <img className="header-image" src="/drinks-icons/drinks-text.png" alt="drinks-text" />
    </Link>
  </header>
);

export default Header;
