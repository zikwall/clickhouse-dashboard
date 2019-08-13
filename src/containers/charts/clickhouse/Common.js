export const options = {
    maintainAspectRatio: true, responsive: true,
    legend: {
        display: false
    },
    tooltips: {
        enabled: false,
        custom: false
    },
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: .3
        }
    },
    scales: {
        xAxes:[{
            gridLines: false,
            scaleLabel: false,
            ticks: {
                display: false
            }
        }],
        yAxes:[{
            gridLines: false,
            scaleLabel: false,
            ticks: {
                display: false,
                suggestedMax: 1
            }
        }]
    }
};

export const merge = (suggestedMax) => {
    options.scales.yAxes[0].ticks.suggestedMax = Math.max.apply(Math, suggestedMax) + 1;
    return options;
};