import React from 'react';
import ASPie from "./components/ASPie";
import ASList from "./components/ASList";
import ASCountryPie from "./components/ASCountryPie";
import { apiFetch } from "../../services/api/Api";
import { ContentLoaderWrapper } from "../../components/content-loader";
import { ContentSwitch, ContentCase } from "../../containers/content-switch";
import { Toolbar } from "../../components/toolbar";
import { withTitle } from "../../components/document-title";
import { Card, CardBody, CardFooter, CardHeader } from "../../components/ui/card";
import { Col } from "../../components/ui/container";

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

            yesterday: this.pageInitByTime,
            lastWeek: this.pageInitByTime,
            lastMonth: this.pageInitByTime,
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
                        <Col className="col-md-12">
                            <Card className="card card-small mb-4">
                                <CardHeader className="card-header border-bottom">AS Networks</CardHeader>
                                <CardBody>
                                    <Toolbar filterButtons={this.getFilterButtons()} useRange={false}>
                                        <ContentLoaderWrapper loaded={this.state.loaded} countPlaceholders={5}>
                                            <ASList data={this.state.data} count={this.state.countIp} />
                                        </ContentLoaderWrapper>
                                    </Toolbar>
                                </CardBody>
                                <CardFooter />
                            </Card>
                        </Col>
                    </ContentCase>
                    <ContentCase sheetIndex="networks-pie" sheetName="Networks Pie">
                        <Col className="col-md-12">
                            <Card className="card card-small mb-4">
                                <CardHeader className="card-header border-bottom">
                                    <h6 className="m-0">AS Networks Pie</h6>
                                </CardHeader>
                                <CardBody style={{height: 450}}>
                                    <ContentLoaderWrapper loaded={this.state.chartsIsComposed} countPlaceholders={4}>
                                        <ASPie data={this.state.data} />
                                    </ContentLoaderWrapper>
                                </CardBody>
                                <CardFooter />
                            </Card>
                        </Col>
                    </ContentCase>
                    <ContentCase sheetIndex="networks-country" sheetName="Country Pie">
                        <Col className="col-md-12">
                            <Card className="card card-small mb-4">
                                <CardHeader className="card-header border-bottom">
                                    <h6 className="m-0">AS Country Pie</h6>
                                </CardHeader>
                                <CardBody style={{height: 450}}>
                                    <ContentLoaderWrapper loaded={this.state.chartsIsComposed} countPlaceholders={4}>
                                        <ASCountryPie data={this.state.countryPieData} />
                                    </ContentLoaderWrapper>
                                </CardBody>
                                <CardFooter />
                            </Card>
                        </Col>
                    </ContentCase>
                </ContentSwitch>
            </>
        );
    }
}

export default withTitle({ component: AutonomousSystemsPage, title: 'Autonomous Systems' });