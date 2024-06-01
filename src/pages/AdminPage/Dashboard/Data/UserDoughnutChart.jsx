import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const UserDoughnutChart = ({ usersLength }) => {
  const data = {
    labels: ['Users'],
    datasets: [
      {
        data: [usersLength], // Assuming 100 as a total for demonstration
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default UserDoughnutChart;
