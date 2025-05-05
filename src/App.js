// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ResearchManagement from './pages/ResearchManagement';
import InnovationSupport from './pages/InnovationSupport';
import ProdandServ from './pages/ProdandServ';
import Collaboration from './pages/Collaboration';
import AyushKnowledge from './pages/AyushKnowledge';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Pass isSidebarOpen state to Header component */}
      <Header isSidebarOpen={isSidebarOpen} />
        {/* Sidebar Toggle Button */}
        <button className="sidebar-toggle-button" onClick={toggleSidebar}>
          {isSidebarOpen ? 'X' : '☰'}
        </button>

        <div className={`content ${isSidebarOpen ? 'shifted' : ''}`}>

          {/* Pass the toggle state and function to the Sidebar component */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/research" element={<ResearchManagement />} />
              <Route path="/innovation" element={<InnovationSupport />} />
              <Route path="/pr" element={<ProdandServ />} />
              <Route path="/collaboration" element={<Collaboration />} />
              <Route path="/knowlwdgw" element={<AyushKnowledge />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
