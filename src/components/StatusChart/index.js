import React from 'react';
import { DateTime } from 'luxon';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Batttery Status',
    },
  },
};


const StatusChart = ({ chartData }) => {


  const labels = chartData.map((item) => DateTime.fromISO(item.timestamp).toFormat("yy LLL dd t"))
  const percentage = chartData.map((item) => item.stateOfCharge !== null ? item.stateOfCharge : 0)

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: 'Status',
        data: percentage,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  )
}

export default StatusChart;