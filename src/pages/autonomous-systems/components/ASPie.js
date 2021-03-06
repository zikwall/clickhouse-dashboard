import React from 'react';
import { Pie } from "react-chartjs-2";
import { Color } from "../../../utils";

const createDataset = (items) => {
    const labels = [];
    const data = [];

    for (let item of items) {
        labels.push(item.autonomous_system_organization);
        data.push(item.countIP);
    }

    return {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: Color.getRGB(data.length),
            hoverBackgroundColor: Color.getRGB(data.length)
        }],
    };
};

const ASPie = ({ data }) => {
    return (
        <Pie data={createDataset(data)} options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position:"left",
                display: true,
                labels: {
                    padding: 25, boxWidth: 20
                }
            },
            cutoutPercentage:0,
            tooltips: {
                custom: false, mode: "index", position: "nearest"
            }
        }}/>
    );
};

export default ASPie;