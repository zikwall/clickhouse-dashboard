import React from 'react';
import {apiFetch} from "../../services/api/Api";
import ASPie from "./components/ASPie";
import { ContentLoaderWrapper } from "../../components/content-loader";
import ASList from "./components/ASList";
import ASCountryPie from "./components/ASCountryPie";
import { ContentSwitch, ContentCase } from "../../containers/content-switch";

export default class extends React.Component {
    state = {
        data: [],
        countIp: 0,
        loaded: false,
        loadedPie: false,
        countryPieData: null
    };

    async componentDidMount() {
        let asnResult = await apiFetch('/api/v1/autonomous-system/general');
        let count = await this.calculateUniqueIp(asnResult.data);

        this.setState({
            data: asnResult.data.slice(0, 20),
            countIp: count,
            loaded: true
        });

        let countryPieData = await this.loadPie();
        this.setState({
            loadedPie: true,
            countryPieData: countryPieData
        });
    }

    calculateUniqueIp = async (data) => {
        let count = 0;

        //count = data.reduce((a, b) => parseInt(a.countIP) + parseInt(b.countIP));

        for await (let item of data) {
            count += parseInt(item.countIP);
        }

        return count;
    };

    loadPie = async () => {
        const { data } = this.state;
        const newArray = [];

        for await (let item of data) {
            let groups = item.gr;

            for (let sub in groups) {
                let gr = groups[sub];
                /**
                 * 0 - ip, 1 - autonomous-systems 2 - country 3 - city
                 */
                if (typeof newArray[gr[2]] === 'undefined') {
                    newArray[gr[2]] = 0;
                }

                newArray[gr[2]]++;
            }
        }

        return newArray;
    };

    render () {
        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">Autonomous Systems</h3>
                    </div>
                </div>

                <ContentSwitch>
                    <ContentCase sheetIndex="networks" sheetName="Networks">
                        <div className="col-md-12">
                            <div className="card card-small mb-4">
                                <div className="card-header border-bottom">
                                    <h6 className="m-0">AS Networks</h6>
                                </div>
                                <div className="card-body">
                                    <ContentLoaderWrapper loaded={this.state.loaded}>
                                        <ASList data={this.state.data} count={this.state.countIp}/>
                                    </ContentLoaderWrapper>
                                </div>
                            </div>
                        </div>
                    </ContentCase>
                    <ContentCase sheetIndex="networks-pie" sheetName="Networks Pie">
                        <div className="col-lg-12">
                            <div className="card card-small mb-4">
                                <div className="card-header border-bottom">
                                    <h6 className="m-0">AS Networks Pie</h6>
                                </div>
                                <div className="card-body p-0 pb-3 text-center" style={{height: '450px'}}>
                                    <ContentLoaderWrapper loaded={this.state.loadedPie} countPlaceholders={4}>
                                        <ASPie data={this.state.data} />
                                    </ContentLoaderWrapper>
                                </div>
                            </div>
                        </div>
                    </ContentCase>
                    <ContentCase sheetIndex="networks-country" sheetName="Country Pie">
                        <div className="col-lg-12">
                            <div className="card card-small mb-4">
                                <div className="card-header border-bottom">
                                    <h6 className="m-0">AS Country Pie</h6>
                                </div>
                                <div className="card-body p-0 pb-3 text-center" style={{height: '450px'}}>
                                    <ContentLoaderWrapper loaded={this.state.loadedPie} countPlaceholders={4}>
                                        <ASCountryPie data={this.state.countryPieData} />
                                    </ContentLoaderWrapper>
                                </div>
                            </div>
                        </div>
                    </ContentCase>
                </ContentSwitch>
            </>
        );
    }
}