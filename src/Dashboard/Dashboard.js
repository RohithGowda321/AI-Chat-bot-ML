import React, { useState } from 'react';
import 'chart.js/auto';
import { Chart } from 'primereact/chart';
import { Card, CardContent, Typography, IconButton, Collapse, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ExpandMore, ExpandLess, Person, ArrowUpward, ArrowDownward, Settings } from '@mui/icons-material';
import './styles.css'; // Import custom styles

const Dashboard = () => {
  const [openActivities, setOpenActivities] = useState(false);

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(74, 144, 226, 0.7)',
        borderColor: '#4A90E2',
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(80, 227, 194, 0.7)',
        borderColor: '#50E3C2',
        borderWidth: 1,
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  const doughnutData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#4CAF50', '#FFC107', '#FF5722']
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.raw;
          }
        }
      }
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">AI Dashboard</h1>

      <div className="top-cards">
        <Card className="small-card">
          <CardContent>
            <Typography variant="h6" component="div">New Users</Typography>
            <Typography variant="h4" component="div">123</Typography>
          </CardContent>
        </Card>
        <Card className="small-card">
          <CardContent>
            <Typography variant="h6" component="div">Active Sessions</Typography>
            <Typography variant="h4" component="div">456</Typography>
          </CardContent>
        </Card>
        <Card className="small-card">
          <CardContent>
            <Typography variant="h6" component="div">Server Status</Typography>
            <Typography variant="h4" component="div">Online</Typography>
          </CardContent>
        </Card>
        <Card className="small-card">
          <CardContent>
            <Typography variant="h6" component="div">Sales Today</Typography>
            <Typography variant="h4" component="div">$7890</Typography>
          </CardContent>
        </Card>
      </div>

      <div className="dashboard-content">
        <Card className="interactive-card">
          <CardContent>
            <Typography variant="h5" component="div">Sales Overview</Typography>
            <div className="chart-container">
              <Chart type="bar" data={barData} options={options} />
            </div>
          </CardContent>
        </Card>

        <Card className="interactive-card">
          <CardContent>
            <Typography variant="h5" component="div">User Feedback</Typography>
            <div className="chart-container">
              <Chart type="doughnut" data={doughnutData} options={options} />
            </div>
          </CardContent>
        </Card>

        <Card className="interactive-card">
          <CardContent>
            <Typography variant="h5" component="div">Recent Activities</Typography>
            <IconButton 
              onClick={() => setOpenActivities(!openActivities)}
              className="expand-icon"
            >
              {openActivities ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Collapse in={!openActivities}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Person color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User X performed Action Y"
                    secondary="2 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowUpward color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User Z accessed Feature A"
                    secondary="4 hours ago"
                  />
                </ListItem>
              </List>
            </Collapse>
            <Collapse in={openActivities}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Person color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User X performed Action Y"
                    secondary="2 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowUpward color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User Z accessed Feature A"
                    secondary="4 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Settings color="action" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="System updated to Version 1.2.3"
                    secondary="1 day ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowDownward color="warning" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="User A logged out"
                    secondary="1 hour ago"
                  />
                </ListItem>
              </List>
            </Collapse>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
