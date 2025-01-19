import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PlatformApp from "./components/PlatformApp"
import Dashboard from "./components/Dashboard/Dashboard"
import "./index.css"

function App() {
  // You might want to implement proper auth state management here
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/dashboard/*" 
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        <Route 
          path="/*" 
          element={
            !isAuthenticated ? (
              <PlatformApp />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App