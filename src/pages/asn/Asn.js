import React from 'react';
import {apiFetch} from "../../services/api/Api";
import AsnTable from "./widgets/AsnTable";
import AsnCountryPie from "./widgets/AsnCountryPie";
import { ContentLoaderWrapper } from "../../components/content-loader";
import AsnList from "./widgets/AsnList";

export default class extends React.Component {
    state = {
        data: [],
        countIp: 0,
        loaded: false,
        loadedPie: false
    };

    async componentDidMount() {
        let asnResult = await apiFetch('/api/v1/asn2');
        let count = await this.calculateUniqueIp(asnResult.data);

        this.setState({
            data: asnResult.data.slice(0, 10),
            countIp: count,
            loaded: true
        });

        await this.loadPie();
        this.setState({
            loadedPie: true
        });
    }

    calculateUniqueIp = async (data) => {
        let count = 0;

        //count = data.reduce((a, b) => parseInt(a.countIP) + parseInt(b.countIP));

        for await (let item of data) {
            count += parseInt(item.countIP);
        }

        console.log(count);

        return count;
    };

    loadPie = async () => {
        const { data } = this.state;
        const newArray = [];
        let counter = 0;

        for await (let item of data) {
            //console.log(item);
            continue;

            for await (let subItems of data[item]) {

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
                    <div className="col-md-12">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">AS Networks</h6>
                            </div>
                            <div className="card-body">
                                <ContentLoaderWrapper loaded={this.state.loaded}>
                                    <AsnList data={this.state.data} count={this.state.countIp}/>
                                </ContentLoaderWrapper>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-6 mb-4">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">AS Networks Pie</h6>
                            </div>
                            <div className="card-body p-0 pb-3 text-center">
                                <ContentLoaderWrapper loaded={this.state.loadedPie} countPlaceholders={2}>
                                    <AsnCountryPie data={this.state.data} />
                                </ContentLoaderWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}