import React from 'react';
import {Doughnut} from "react-chartjs-2";
import Loader from 'react-loader-spinner'
import {Center} from "../utility";

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
        }, 5000)
    }

    render () {
        if (this.state.loaded === false) {

            // examples
            let types = [
                'Watch', 'None', 'Audio', 'Triangle', 'BallTriangle'
            ];
            let type = types[Math.floor(Math.random()*types.length)];

            return <Center>
                <Loader
                    type={type}
                    color="#00BFFF"
                    height="200"
                    width="200"
                />
            </Center>
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