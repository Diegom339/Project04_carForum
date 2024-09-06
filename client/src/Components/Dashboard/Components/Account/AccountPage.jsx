import React, { useEffect, useState } from 'react';
import './AccountPage.css';
import Sidebar from '../SideBar Section/Sidebar';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data and token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Optionally, redirect to the login page
    window.location.href = '/';
  };

  return (
    <div className="accountPage">
      <Sidebar />
      <div className="accountContent">
        <h1>My Account</h1>
        <div className="accountDetails">
          <h3>Account Information</h3>
          {user ? (
            <>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </>
          ) : (
            <p>Loading account details...</p>
          )}
        </div>
        <div className="accountActions">
          <h3>Account Actions</h3>
          <button className="btn">Change Password</button>
          <button className="btn">Update Email</button>
          <button className="btn logOutBtn" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;

