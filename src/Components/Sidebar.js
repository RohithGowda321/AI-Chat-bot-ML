import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Close icon
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ChatIcon from '@mui/icons-material/Chat'; // Example of adding a new icon
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css'; // Import your custom styles

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <div className="sidebar-header">
        <div className="header-left">
          <span className="header-title">AI-CHAT</span>
        </div>
        <div className="header-right">
          <CloseIcon className="close-icon" onClick={onClose} />
        </div>
      </div>
      <List className="sidebar-list">
        <ListItem button component={Link} to="/dashboard" onClick={onClose}>
          <ListItemIcon>
            <MenuIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="sidebar-text" />
        </ListItem>
        <ListItem button component={Link} to="/chat" onClick={onClose}>
          <ListItemIcon>
            <ChatIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Chat" className="sidebar-text" />
        </ListItem>
        <ListItem button component={Link} to="/profile" onClick={onClose}>
          <ListItemIcon>
            <AccountCircleIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Profile" className="sidebar-text" />
        </ListItem>
        <ListItem button component={Link} to="/settings" onClick={onClose}>
          <ListItemIcon>
            <SettingsIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="Settings" className="sidebar-text" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={onClose}>
          <ListItemIcon>
            <InfoIcon className="sidebar-icon" />
          </ListItemIcon>
          <ListItemText primary="About" className="sidebar-text" />
        </ListItem>
      </List>
      <div className="sidebar-footer">
        {/* Footer content */}
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </Drawer>
  );
};

export default Sidebar;
