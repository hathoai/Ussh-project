import React from 'react';
import { Pie } from 'react-chartjs-2';

const MyPieChart = ({ data, options, ...props }) => {
  return (
    <div>
      <h2>My Pie Chart</h2>
      <Pie data={data} options={options} {...props} />
    </div>
  );
};

export default MyPieChart;
