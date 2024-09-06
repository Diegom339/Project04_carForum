import React, { useState, useEffect } from 'react';
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar';
import Body from '../Dashboard/Components/Body Section/Body';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/dashboard', {
          headers: { 'x-access-token': token }
        });
        setData(response.data);
      } catch (error) {
        console.error('Dashboard Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar />
        <Body username={user ? user.username : 'Guest'} />
      </div>
    </div>
  );
}

export default Dashboard;
