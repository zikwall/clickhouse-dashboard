import React from 'react';
import { Line } from "react-chartjs-2";
import { Total, Android, Ios, Smart } from "../../containers/charts/clickhouse";
import { ErrorBoundary} from "../../components/error-boundary";

export default class extends React.Component {

    render() {
        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <span className="text-uppercase page-subtitle">Обзор</span>
                        <h3 className="page-title">Clickhouse State</h3>
                    </div>

                    <div className="col-12 col-sm-4 d-flex align-items-center">
                        <div className="btn-group btn-group-sm btn-group-toggle d-inline-flex mb-4 mb-sm-0 mx-auto"
                             role="group" aria-label="Page actions">
                            <a href="?" className="btn btn-white active"> Основное </a>
                            <a href="?" className="btn btn-white"> Дополнительно </a>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <ErrorBoundary>
                            <Total {...this.props}/>
                        </ErrorBoundary>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">Android</span>
                                        <h6 className="stats-small__value count m-0">8,391</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--decrease">7.21%</span>
                                    </div>
                                </div>

                                <Android />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">iOS</span>
                                        <h6 className="stats-small__value count m-0">21,293</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--increase">3.71%</span>
                                    </div>
                                </div>

                               <Ios />

                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="stats-small card card-small">
                            <div className="card-body px-0 pb-0">
                                <div className="d-flex px-3">
                                    <div className="stats-small__data">
                                        <span className="stats-small__label mb-1 text-uppercase">Smart</span>
                                        <h6 className="stats-small__value count m-0">6.43</h6>
                                    </div>
                                    <div className="stats-small__data text-right align-items-center">
                                        <span
                                            className="stats-small__percentage stats-small__percentage--decrease">2,71%</span>
                                    </div>
                                </div>

                                <Smart />

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
