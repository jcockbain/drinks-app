import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = () => (
  <header className="App-header">
    <Link to="/">
      <img className="header-image mx-3" src="/drinks-icons/drinks-text.png" alt="drinks-text" />
    </Link>
  </header>
);

export default PageHeader;
