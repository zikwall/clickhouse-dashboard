import React from 'react';
import {Doughnut} from "react-chartjs-2";
import Preloader from "../preloader/Preloader";

export default class DasboardThree extends React.Component {

    dongiutData = {
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

    state = {
        loaded: false
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            });
        }, 45000)
    }

    render () {
        if (this.state.loaded === false) {
            return <Preloader />
        }

        return (
            <>
                <div style={{ marginTop: "20px" }}>
                    <Doughnut data={this.dongiutData} options={{
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
            </>
        );
    }

};