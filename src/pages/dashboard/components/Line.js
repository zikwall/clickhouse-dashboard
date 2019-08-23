import React from 'react';
import {Line} from "react-chartjs-2";
import ContentLoader from "../../../components/content-loader/ContentLoader";

export default class extends React.Component {
    sessionData = {
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

    state = {
        loaded: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 2000)
    }

    render() {
        if (this.state.loaded === false) {
            return <ContentLoader big={true}/>
        }

        return (
            <>
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

                <Line data={this.sessionData} />
            </>
        );
    }
}

