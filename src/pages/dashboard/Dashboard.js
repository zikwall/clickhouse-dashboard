import React from 'react';
import { Requirement, guardFactory, CredentialProvider } from "../../containers/protected";
import {Bar, Line, Doughnut} from "./components";

import { Identity } from "../../services/auth";
import { withTitle } from "../../components/document-title";
import { Col, Row } from "../../components/ui/container";
import {CurrentOnline} from "../../containers/current-online";

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

class DasboardPage extends React.Component {
    render() {

        return (
            <>
                <CredentialProvider value={ Identity.getPermissions() }>
                    <div className="page-header row no-gutters py-4">

                        <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                            <span className="text-uppercase page-subtitle">Обзор</span>
                            <h3 className="page-title">Аналитика</h3>
                        </div>

                        <div className="col-12 col-sm-4 d-flex align-items-center">
                            <div className="btn-group btn-group-sm btn-group-toggle d-inline-flex mb-4 mb-sm-0 mx-auto"
                                 role="group" aria-label="Page actions">
                                <a href="?index" className="btn btn-white active"> Онлайн </a>
                                <a href="?online" className="btn btn-white"> Трафик </a>
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

                    <CanViewDashboard>
                        <Row>
                            <Col className="col col-lg-8 col-md-12 col-sm-12 mb-4">
                                <div className="card card-small h-100">
                                    <div className="card-header border-bottom">
                                        <h6 className="m-0">Current Total Online</h6>
                                    </div>
                                    <div className="card-body pt-0">
                                        <Line />
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                <CurrentOnline />
                            </Col>
                        </Row>
                    </CanViewDashboard>

                    <div className="row">
                        <div className="col col-lg-12 col-md-12 mb-4">
                            <div className="card card-small h-100">
                                <div className="card-header border-bottom">
                                    <h6 className="m-0">Online/Archive by months</h6>
                                </div>
                                <div className="card-body pt-0">
                                    <Bar />
                                </div>
                            </div>
                        </div>
                    </div>
                </CredentialProvider>
            </>
        );
    }
}

export default withTitle({component: DasboardPage, title: 'Dashboard'})