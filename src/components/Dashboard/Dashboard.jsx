import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const Dashboard = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="dashboard">
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Welcome,</p>
              <p className="font-medium text-gray-800">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      
      <div className="dashboard-body p-6">
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
        </main>
      </div>
    </div>
  );
};

export default Dashboard;