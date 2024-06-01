import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { userServ } from '../../../services/userServ';
import './Dashboard.scss';
import UserDoughnutChart from './Data/UserDoughnutChart';

const Dashboard = () => {
  const [usersLength, setUsersLength] = useState(0);

  useEffect(() => {
    userServ.getAllUsers().then((res) => {
      setUsersLength(res.data.data.length);
    });
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-header grid grid-cols-4 gap-5">
        <div className="dashboard-header-content ">
          <Card>
            <h2 className="font-bold text-lg flex justify-center items-center gap-1">
              <i className="fa-solid fa-user"></i>Number of Users:
              {usersLength}
            </h2>
            <UserDoughnutChart usersLength={usersLength} />
          </Card>
        </div>
        <div className="dashboard-header-content">
          <Card>Hello</Card>
        </div>
        <div className="dashboard-header-content">
          <Card>Hello</Card>
        </div>
        <div className="dashboard-header-content">
          <Card>Hello</Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
