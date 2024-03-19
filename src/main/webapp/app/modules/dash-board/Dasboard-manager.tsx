import {Box, Typography} from "@mui/material";
import React from "react";
import MyPieChart from "app/modules/chart/chart-pie";
import {Chart, ArcElement} from 'chart.js'
import {Doughnut, Line, Pie} from "react-chartjs-2";
Chart.register(ArcElement);
export const DashboardManager = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    // You can add options here, or keep it empty for default options
  };

  return (
    <Box maxWidth={330} sx={{bgcolor:"antiquewhite"}}>
      <Doughnut data={data} options={options}  height={40}
           width={60}/>


    </Box>
  );
};
