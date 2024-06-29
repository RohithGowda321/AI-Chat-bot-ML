import React from 'react';
import 'chart.js/auto';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './styles.css'; // Import your custom styles

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data 1',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Data 2',
        backgroundColor: '#FFA726',
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
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">AI Dashboard</h1>

      <div className="p-grid p-nogutter dashboard-content">
        <div className="p-col-12 p-md-6 p-lg-4">
          <Card className="card">
            <h2>AI Analysis</h2>
            <Chart type="bar" data={data} options={options} style={{ height: '300px' }} />
          </Card>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <Card className="card">
            <h2>Recommendations</h2>
            <ul>
              <li>Recommendation A</li>
              <li>Recommendation B</li>
              <li>Recommendation C</li>
            </ul>
          </Card>
        </div>

        <div className="p-col-12 p-md-6 p-lg-4">
          <Card className="card">
            <h2>Performance Metrics</h2>
            <ul>
              <li>Metric 1</li>
              <li>Metric 2</li>
              <li>Metric 3</li>
            </ul>
            <Button label="View Details" className="p-button-secondary" />
          </Card>
        </div>

        <div className="p-col-12 p-md-6 p-lg-8">
          <Card className="card">
            <h2>User Feedback</h2>
            <p>User comments and ratings</p>
          </Card>
        </div>

        <div className="p-col-12 p-lg-4">
          <Card className="card">
            <h2>Trends Analysis</h2>
            <Chart type="line" data={data} options={options} style={{ height: '300px' }} />
          </Card>
        </div>

        <div className="p-col-12 p-lg-4">
          <Card className="card">
            <h2>Sentiment Analysis</h2>
            <Chart type="doughnut" data={doughnutData} style={{ height: '300px' }} />
          </Card>
        </div>

        <div className="p-col-12 p-lg-4">
          <Card className="card">
            <h2>Recent Activities</h2>
            <ul>
              <li>User X performed action Y</li>
              <li>User Z accessed feature A</li>
              <li>System updated to version 1.2.3</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
