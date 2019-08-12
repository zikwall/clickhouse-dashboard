import React from 'react';
import {Route, Switch} from "react-router";
import ErrorLayout from "../../layouts/ErrorLayout";
import Dashboard from "./Dashboard";
import { Clickhouse } from "./../clickhouse";

const ProfileSubLayout = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={ Dashboard } />
            <Route path={`${match.url}/clickhouse`} component={ Clickhouse } />

            <Route render={ ( props ) => <ErrorLayout errorCode={404} {...props}/> }  />
        </Switch>
    );
};

export default ProfileSubLayout;