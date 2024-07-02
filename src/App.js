// App.js

import React from 'react';
import { Switch, Route, Navigate } from 'react-router-dom'
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
    <Router>
    <div className="app">
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <div className="content">
        <header className="header">
          <div className="menu-icon" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          <span className="header-title">AI Chat</span>
       
        </header>
        <Switch>
          <Route exactpath="/" Component={<Dashboard />} />
          <Route path="/dashboard/profile" Component={<Profile />} />
          <Route path="/dashboard/settings" Component={<Settings />} />
          <Route path="/dashboard/about" Component={<About />} />
          <Route path="/dashboard/chat" Component={<Chat />} />
          <Route path="*" Component={<Navigate to="/" />} />
        </Switch>
      </div>
    </div>
  </Router>
  );
};

export default App;
