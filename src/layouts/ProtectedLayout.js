import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import withAuth from "../containers/protected/WithAuth";
import Header from "../components/header";
import ErrorLayout from "./ErrorLayout";

import { ProfileSubLayout, DashboardSubLayout } from '../pages/layouts';

class ProtectedLayout extends React.Component {
    componentDidUpdate (e) {}

    render() {

        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                            <Header { ...this.props }/>

                            <div className="main-content-container container">
                                <Switch>
                                    <Route exact path="/" component={DashboardSubLayout} />

                                    <Route path="/dashboard" component={ DashboardSubLayout } />
                                    <Route path="/profile" component={ ProfileSubLayout } />

                                    <Route render={ ( props ) => <ErrorLayout errorCode={404} {...props}/> }  />
                                </Switch>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

export default withAuth(ProtectedLayout);