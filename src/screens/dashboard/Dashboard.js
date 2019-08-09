import React from 'react';
import { Requirement, guardFactory, CredentialProvider } from "./../../components/rbac";
import {DasboardThree, DasboardTwo, DashboardOne} from "../../components/charts";
import { Identity } from "../../services/auth";


/**
 * Example simple RBAC, пока что сравнивается username пользователя,
 * а так думается передавать role или permissions array
 */
class CheckPermissions extends Requirement {
    constructor(credentials) {
        super();
        this.credentials = credentials;
    }

    isSatisfied(credentials) {
        if (Array.isArray(credentials)) {
            for (let i = 0; i <= credentials.length; i++) {
                if (Array.isArray(this.credentials)) {
                    if (this.credentials.includes(credentials[i])) {
                        return true;
                    }

                    continue;
                }

                if (this.credentials === credentials[i]) {
                    return true;
                }
            }
        }

        /**
         * Если переданный credentials - это одиночное значение
         */
        return Array.isArray(this.credentials) && this.credentials.includes(credentials);
    }
}

// в качестве требований передаются username-ы
const NeedViewDashboard = new CheckPermissions(['canViewDashboard']);
const CanViewDashboard = guardFactory(NeedViewDashboard);

export default class Dahboard extends React.Component {
    render() {
        return (
            <>
                {
                    /**
                     * Возможно CredentialProvider стоит вынести выше, например в Dashboard Layout, пока тут для примера
                     */
                }
                <CredentialProvider value={Identity.getUser().getPermissions()}>
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

                    {
                        /**
                         * Вот так вот легко использовать, просто обернуть
                         */
                    }
                    <CanViewDashboard>
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

                                        <DasboardTwo />
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
                                        <DasboardThree />
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
                    </CanViewDashboard>

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

                                    <DashboardOne />
                                </div>
                            </div>
                        </div>
                    </div>
                </CredentialProvider>
            </>
        );
    }
}