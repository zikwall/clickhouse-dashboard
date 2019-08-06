import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import withAuth from "../components/protected/WithAuth";
import Header from "../components/header";
import ErrorLayout from "./ErrorLayout";
import { Dashboard } from "../screens/dashboard";
import { ProfileSubLayout } from "../screens/profile";

class AdminLayout extends React.Component {
    componentDidUpdate (e) {}
    componentWillMount () {}


    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                            <Header { ...this.props }/>

                            <div className="main-content-container container">
                                <Switch>
                                    <Route path="/dashboard" component={ Dashboard } />
                                    <Route path="/profile" component={ ProfileSubLayout } />

                                    <Route exact path="/" render ={ () => ( <Redirect to="/dashboard" /> ) } />
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

export default withAuth(AdminLayout);