import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Dashboard = ({ userData, onLogout }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header userData={userData} />
      <h1 style={{ marginTop: '20px' }}>Dashboard</h1>
      <button 
        style={{ 
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}
        onClick={onLogout}
      >
        Logout
      </button>
      <Footer />
    </div>
  );
};

export default Dashboard;
