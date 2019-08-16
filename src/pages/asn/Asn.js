import React from 'react';
import {apiFetch} from "../../services/api/Api";
import AsnTable from "./AsnTable";
import AsnCountryPie from "./AsnCountryPie";

export default class extends React.Component {
    state = {
        data: [],
        loaded: false,
        loadedPie: false
    };

    componentDidMount() {
        apiFetch('/api/v1/asn2').then((asnResult) => {
            console.log(asnResult);

            this.setState({
                data: asnResult.data,
                loaded: true
            });

            this.loadPie().then((data) => {
                setTimeout(() => {
                    this.setState({
                        loadedPie: true
                    })
                }, 2000);
            });

        });
    }

    loadPie = async () => {
        const { data } = this.state;

        const newArray = [];

        for await (let item of data) {
            if (!data.hasOwnProperty(item)) {
                continue;
            }

            for await (let subItems of data[item]) {
                if (!data[item].hasOwnProperty('gr')) {
                    continue
                }

                let gr = data[item].gr;
                /**
                 * 0 - ip, 1 - asn 2 - ountry 3 - city
                 */
                if (typeof newArray[gr[2]] === 'undefined') {
                    newArray[gr[2]] = 0;
                }

                newArray[gr[2]]++;
            }
        }

        console.log(newArray);

        return true;
    };

    render () {
        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">ASN</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">AS Networks</h6>
                            </div>
                            <div className="card-body p-0 pb-3 text-center">
                                <AsnTable data={this.state.data} loaded={this.state.loaded} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">AS Networks Pie</h6>
                            </div>
                            <div className="card-body p-0 pb-3 text-center">
                                <AsnCountryPie data={this.state.data} loaded={this.state.loadedPie} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}