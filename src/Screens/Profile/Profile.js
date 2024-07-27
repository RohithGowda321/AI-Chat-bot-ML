import React, { useState } from 'react';
import { Card, CardContent, Typography, Avatar, IconButton, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { ExpandMore, ExpandLess, Settings, Notifications, AccountCircle, Timeline } from '@mui/icons-material';
import { Chart } from 'primereact/chart';
import './Styles.css'; // Import custom styles

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const profileData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Activity',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [120, 150, 180, 90, 200, 170, 210]
      }
    ]
  };

  const handleChangeTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <Avatar alt="User Name" src="/path/to/profile-pic.jpg" className="profile-avatar" />
        <div className="profile-info">
          <Typography variant="h4" className="profile-name">John Doe</Typography>
          <Typography variant="body1" className="profile-bio">AI Enthusiast. Data Scientist. Tech Lover.</Typography>
        </div>
      </div>

      <Card className="stats-card">
        <CardContent>
          <Typography variant="h5">Statistics Overview</Typography>
          <div className="chart-container">
            <Chart type="line" data={profileData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </CardContent>
      </Card>

      <Card className="tabs-card">
        <Tabs value={tabIndex} onChange={handleChangeTab} aria-label="profile tabs">
          <Tab label="Activity Feed" />
          <Tab label="Settings" />
          <Tab label="Notifications" />
          <Tab label="Connected Accounts" />
        </Tabs>

        {tabIndex === 0 && (
          <CardContent>
            <Typography variant="h6">Recent Activities</Typography>
            <List>
              <ListItem>
                <ListItemIcon><Timeline color="primary" /></ListItemIcon>
                <ListItemText primary="Completed Project X" secondary="2 hours ago" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Notifications color="secondary" /></ListItemIcon>
                <ListItemText primary="New message from Admin" secondary="4 hours ago" />
              </ListItem>
            </List>
          </CardContent>
        )}

        {tabIndex === 1 && (
          <CardContent>
            <Typography variant="h6">Profile Settings</Typography>
            <List>
              <ListItem>
                <ListItemIcon><Settings color="action" /></ListItemIcon>
                <ListItemText primary="Account Settings" />
              </ListItem>
              <ListItem>
                <ListItemIcon><AccountCircle color="action" /></ListItemIcon>
                <ListItemText primary="Personal Information" />
              </ListItem>
            </List>
          </CardContent>
        )}

        {tabIndex === 2 && (
          <CardContent>
            <Typography variant="h6">Recent Notifications</Typography>
            <List>
              <ListItem>
                <ListItemIcon><Notifications color="primary" /></ListItemIcon>
                <ListItemText primary="System update available" secondary="1 day ago" />
              </ListItem>
              <ListItem>
                <ListItemIcon><Notifications color="secondary" /></ListItemIcon>
                <ListItemText primary="New feature added" secondary="2 days ago" />
              </ListItem>
            </List>
          </CardContent>
        )}

        {tabIndex === 3 && (
          <CardContent>
            <Typography variant="h6">Connected Accounts</Typography>
            <List>
              <ListItem>
                <ListItemIcon><AccountCircle color="primary" /></ListItemIcon>
                <ListItemText primary="LinkedIn" secondary="Connected" />
              </ListItem>
              <ListItem>
                <ListItemIcon><AccountCircle color="secondary" /></ListItemIcon>
                <ListItemText primary="GitHub" secondary="Not connected" />
              </ListItem>
            </List>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Profile;
