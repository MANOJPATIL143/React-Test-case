import React from 'react';

const Header = ({ userData }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '20px', textAlign: 'center' }}>
      <h2 style={{ color: '#333' }}>Welcome, {userData.firstName} {userData.lastName}</h2>
      {/* Display other user data like email, phone number if needed */}
    </div>
  );
};

export default Header;
