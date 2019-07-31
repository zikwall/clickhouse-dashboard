import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

const data = {
    labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
    datasets:[{
        label: "Profit",
        fill: "start",
        data: [28922, 25317, 23182, 32119, 11291, 8199, 25182, 22120, 10219, 8771, 12992, 8221],
        backgroundColor: "rgba(0, 123, 255, 1)",
        borderColor: "rgba(0, 123, 255, 1)",
        pointBackgroundColor: "#FFFFFF",
        pointHoverBackgroundColor: "rgba(0, 123, 255, 1)",
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

const options = {
    legend:!1, tooltips: {
        enabled: !1, mode: "index", position: "nearest"
    },
    scales: {
        xAxes:[ {
            stacked: !0, gridLines: !1
        }],
        yAxes:[ {
            stacked:!0, ticks: {
                userCallback:function(o, a, e) {
                    return o>999?(o/1e3).toFixed(0)+"k": o
                }
            }
        }]
    }
};

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

const dongiutData = {
    labels:["Desktop", "Tablet", "Mobile"],
    datasets:[{
        data: [68.3, 24.2, 7.5],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};


export default class Dahboard extends React.Component {
    render() {
        return (
            <>
                <div className="page-header row no-gutters py-4">

                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">Аналитика</h3>
                    </div>

                    <div className="col-12 col-sm-4 d-flex align-items-center">
                        <div className="btn-group btn-group-sm btn-group-toggle d-inline-flex mb-4 mb-sm-0 mx-auto"
                             role="group" aria-label="Page actions">
                            <a href="?index" className="btn btn-white active"> Трафик </a>
                            <a href="?online" className="btn btn-white"> Онлайн </a>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4 d-flex align-items-center">
                        <div id="analytics-overview-date-range"
                             className="input-daterange input-group input-group-sm ml-auto">
                            <input type="text" className="input-sm form-control" name="start" placeholder="Start Date"
                                   id="analytics-overview-date-range-1"
                            />
                            <input type="text" className="input-sm form-control" name="end" placeholder="End Date"
                                   id="analytics-overview-date-range-2"
                            />

                            <span className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-sm-12 mb-4">
                        <div className="card card-small h-100">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Sessions</h6>
                                <div className="block-handle"></div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="row border-bottom py-2 bg-light">
                                    <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                                        <div
                                            className="btn-group btn-group-sm btn-group-toggle d-flex my-auto mx-auto mx-sm-0"
                                            data-toggle="buttons">
                                            <label className="btn btn-white active">
                                                <input type="radio" name="options" id="option1" autoComplete="off"/> Hour
                                            </label>
                                            <label className="btn btn-white">
                                                <input type="radio" name="options" id="option2" autoComplete="off"/> Day
                                            </label>
                                            <label className="btn btn-white">
                                                <input type="radio" name="options" id="option3" autoComplete="off"/> Week
                                            </label>
                                            <label className="btn btn-white">
                                                <input type="radio" name="options" id="option4"
                                                       autoComplete="off"
                                                />

                                                Month
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div id="sessions-overview-date-range"
                                             className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0">
                                            <input type="text" className="input-sm form-control" name="start"
                                                   placeholder="Start Date"
                                                   id="analytics-overview-sessions-date-range-1"
                                            />
                                            <input type="text" className="input-sm form-control" name="end"
                                                   placeholder="End Date"
                                                   id="analytics-overview-sessions-date-range-2"
                                            />
                                            <span className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="material-icons"></i>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Line data={sessionData} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="card ubd-stats card-small h-100">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Users by device</h6>
                                <div className="block-handle"></div>
                            </div>

                            <div className="card-body d-flex flex-column">
                                <div style={{ marginTop: "20px" }}>
                                    <Doughnut data={dongiutData} options={{
                                        cutoutPercentage: 80, tooltips: { mode: "index", position: "nearest"}
                                    }} />
                                </div>

                                <div className="ubd-stats__legend w-75 m-auto pb-4">
                                    <div className="ubd-stats__item">
                                        <i className="material-icons" style={{color: "rgba(1, 123 ,255, 0.9)"}}></i>
                                        <span className="ubd-stats__category">Desktop</span>
                                        <span className="ubd-stats__value">68.3%</span>
                                    </div>
                                    <div className="ubd-stats__item">
                                        <i className="material-icons" style={{color: "rgba(1, 123 ,255, 0.5)"}}></i>
                                        <span className="ubd-stats__category">Tablet</span>
                                        <span className="ubd-stats__value">24.2%</span>
                                    </div>
                                    <div className="ubd-stats__item">
                                        <i className="material-icons" style={{color: " rgba(1, 123, 255, 0.3)"}}></i>
                                        <span className="ubd-stats__category">Mobile</span>
                                        <span className="ubd-stats__value">7.5%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer border-top">
                                <div className="row">
                                    <div className="col">
                                        <select className="custom-select custom-select-sm">
                                            <option selected="">Last Week</option>
                                            <option value="1">Today</option>
                                            <option value="2">Last Month</option>
                                            <option value="3">Last Year</option>
                                        </select>
                                    </div>
                                    <div className="col text-right view-report">
                                        <a href="#">View full report →</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-lg-12 col-md-12 mb-4">
                        <div className="card card-small h-100">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Sales report</h6>
                                <div className="block-handle"></div>
                            </div>
                            <div className="card-body pt-0">

                                <div className="row border-bottom py-2 bg-light">
                                    <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                                        <div
                                            className="btn-group btn-group-sm btn-group-toggle d-flex my-auto mx-auto mx-sm-0"
                                            data-toggle="buttons">
                                            <label className="btn btn-white">
                                                <input type="radio" name="options" id="option1" autoComplete="off" /> Hour
                                            </label>
                                            <label className="btn btn-white">
                                                <input type="radio" name="options" id="option2" autoComplete="off" /> Day
                                            </label>
                                            <label className="btn btn-white">
                                                <input type="radio" name="options" id="option2" autoComplete="off" /> Week
                                            </label>
                                            <label className="btn btn-white active">
                                                <input type="radio" name="options" id="option2" autoComplete="off" />
                                                Month
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div id="sales-report-date-range" className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0">
                                            <input type="text" className="input-sm form-control" name="start"
                                                   placeholder="Start Date" id="analytics-overview-date-range-1"
                                            />
                                            <input type="text" className="input-sm form-control" name="end"
                                                   placeholder="End Date" id="analytics-overview-date-range-2"
                                            />
                                            <span className="input-group-text">
                                            <i className="material-icons"></i>
                                        </span>
                                        </div>
                                    </div>
                                </div>

                                <Bar data={data}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}