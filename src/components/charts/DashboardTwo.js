import React from 'react';
import {Line} from "react-chartjs-2";

const DasboardTwo = () => {
    const sessionData = {
        labels:[
            "09:00 PM", "10:00 PM", "11:00 PM", "12:00 PM", "13:00 PM", "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM"
        ],
        datasets:[{
            label: "Today", fill: "start", data: [5, 5, 10, 30, 10, 42, 5, 15, 5],
            backgroundColor: 'rgba(0, 184, 216, 0.1)', borderColor: 'rgb(0, 184, 216)',
            pointBackgroundColor: '#ffffff', pointHoverBackgroundColor: 'rgba(0, 184, 216, 0.1)',
            borderWidth: 1.5
        }, {
            label: "Yesterday", fill: "start", data: ["", 23, 5, 10, 5, 5, 30, 2, 10],
            backgroundColor: 'rgba(23,198,113,0.1)', borderColor: 'rgba(23,198,113,0.1)',
            pointBackgroundColor: '#ffffff', pointHoverBackgroundColor: 'rgba(23,198,113,0.1)',
            borderDash: [5, 5], borderWidth: 1.5, pointRadius: 0, pointBorderColor: 'rgba(23,198,113,0.1)'
        }]
    };

    return (
        <Line data={sessionData} />
    );
};

export default DasboardTwo;

