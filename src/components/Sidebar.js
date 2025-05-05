// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFlask, faLightbulb, faGavel, faUsers, faChartBar } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
      <ul>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-icon" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/research">
            <FontAwesomeIcon icon={faFlask} className="sidebar-icon" />
            Research Management
          </a>
        </li>
        <li>
          <a href="/innovation">
            <FontAwesomeIcon icon={faLightbulb} className="sidebar-icon" />
            Innovation Support
          </a>
        </li>
        <li>
          <a href="/ipr">
            <FontAwesomeIcon icon={faGavel} className="sidebar-icon" />
            Product and Services
          </a>
        </li>
        <li>
          <a href="/collaboration">
            <FontAwesomeIcon icon={faUsers} className="sidebar-icon" />
            Collaboration
          </a>
        </li>
        <li>
          <a href="/analytics">
            <FontAwesomeIcon icon={faChartBar} className="sidebar-icon" />
            AYUSH Knowledge
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
