import React from 'react';
import { apiFetch } from "../../services/api/Api";
import ASPie from "./components/ASPie";
import { ContentLoaderWrapper } from "../../components/content-loader";
import ASList from "./components/ASList";
import ASCountryPie from "./components/ASCountryPie";
import { ContentSwitch, ContentCase } from "../../containers/content-switch";
import { Panel } from "../../components/panel";
import { withTitle } from "../../components/document-title";

class AutonomousSystemsPage extends React.Component {
    state = {
        data: [],
        countIp: 0,
        loaded: false,
        chartsIsComposed: false,
        countryPieData: null
    };

    async componentDidMount() {
        let asResult = await apiFetch('/api/v1/autonomous-system/general');
        await this.initPage(asResult);
    }

    initPage = async (asResult) => {
        let count = await this.calculateUniqueIp(asResult.data);

        this.setState({
            data: asResult.data.slice(0, 20),
            countIp: count,
            loaded: true
        });

        let countryPieData = await this.chartDataComposition();
        this.setState({
            chartsIsComposed: true,
            countryPieData: countryPieData
        });
    };

    pageInitByTime = async (time = null) => {
        this.setPageUnloadState();
        let asResult = await apiFetch('/api/v1/autonomous-system/general?timeBy=' + time);
        await this.initPage(asResult);
    };

    setPageUnloadState = () => {
        this.setState({
            loaded: false,
            chartsIsComposed: false,
        });
    };

    calculateUniqueIp = async (data) => {
        let count = 0;
        for await (let item of data) {
            count += parseInt(item.countIP);
        }

        return count;
    };

    chartDataComposition = async () => {
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

    getFilterButtons = () => {
        return {
            day: this.pageInitByTime,
            week: this.pageInitByTime,
            month: this.pageInitByTime,
        };
    };

    render () {
        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Overview autonomous system total information</span>
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
                                    <Panel filterButtons={this.getFilterButtons()}>
                                        <ContentLoaderWrapper loaded={this.state.loaded} countPlaceholders={5}>
                                            <ASList data={this.state.data} count={this.state.countIp} />
                                        </ContentLoaderWrapper>
                                    </Panel>
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
                                    <ContentLoaderWrapper loaded={this.state.chartsIsComposed} countPlaceholders={4}>
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
                                    <ContentLoaderWrapper loaded={this.state.chartsIsComposed} countPlaceholders={4}>
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

export default withTitle({ component: AutonomousSystemsPage, title: 'Autonomous Systems' });