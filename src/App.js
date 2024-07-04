// App.js

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import Sidebar from './Components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from './Screens/Dashboard/Dashboard';
import Profile from './Screens/Profile/Profile';
import Settings from './Screens/Settings/Settings';
import About from './Screens/About/About';
import Chat from './Screens/Chat/Chat';


const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <div className="content">
        <header className="header">
          <div className="menu-icon" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <span className="header-title">AI Chat</span>
       
        </header>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/about" element={<About />} />
            <Route path="/" element={<Chat />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
      </div>
    </div>
  );
};

export default App;
