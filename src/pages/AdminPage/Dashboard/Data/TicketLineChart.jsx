import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const TicketLineChart = ({ ticketData }) => {
  const data = {
    labels: ticketData.map((_, index) => `Day ${index + 1}`), // Assuming daily data points
    datasets: [
      {
        label: 'Tickets Booked',
        data: ticketData,
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: '#36A2EB',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#36A2EB',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default TicketLineChart;
