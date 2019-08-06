import React from  'react';
import { Bar } from 'react-chartjs-2';

const DashboardOne = () => {
    const data = {
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
        datasets:[{
            label: "Profit",
            fill: "start",
            data: [28922, 25317, 23182, 32119, 11291, 8199, 25182, 22120, 10219, 8771, 12992, 8221],
            backgroundColor: "#17c671",
            borderColor: "#17c671",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "#17c671",
            borderWidth: 1.5
        }, {
            label: "Shipping",
            fill: "start",
            data: [2892, 2531, 2318, 3211, 1129, 819, 2518, 2212, 1021, 8771, 1299, 820],
            backgroundColor: "rgba(72, 160, 255, 1)",
            borderColor: "rgba(72, 160, 255, 1)",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1.5
        }, {
            label: "Tax",
            fill: "start",
            data: [1400, 1250, 1150, 1600, 500, 400, 1250, 1100, 500, 4e3, 600, 500],
            backgroundColor: "rgba(153, 202, 255, 1)",
            borderColor: "rgba(153, 202, 255, 1)",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1.5
        }
        ]
    };

    return (
        <Bar data={data}/>
    );
};

export default DashboardOne;