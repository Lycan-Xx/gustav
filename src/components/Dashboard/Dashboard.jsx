import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </aside>
        <main className="dashboard-main">
          <h2>Welcome to your Dashboard!</h2>
          <p>This is where you can manage your settings and view reports.</p>
          {/* Add more components or content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
