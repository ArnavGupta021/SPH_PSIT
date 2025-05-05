// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ isSidebarOpen }) => {
  return (
    <header className={`header ${isSidebarOpen ? 'shifted' : ''}`}>
      <h1 style={{ padding: '20px'}}>Unified AYUSH Startup Registration System (UASRS)</h1>
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/research">Research Management</a></li>
          <li><a href="/innovation">Innovation Support</a></li>
          <li><a href="/pr">Products and Services</a></li>
          <li><a href="/collaboration">Collaboration</a></li>
          <li><a href="/knowledge">AYUSH Knowledge</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
