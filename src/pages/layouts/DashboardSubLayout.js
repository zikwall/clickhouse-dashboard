import React from 'react';
import {Route, Switch} from "react-router";
import ErrorLayout from "../../layouts/ErrorLayout";
import Dashboard from "../dashboard/Dashboard";
import { Clickhouse } from "../clickhouse";
import { AutonomousSystems } from "../autonomous-systems";
import Ads from "../ads";

const ProfileSubLayout = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={ Dashboard } />
            <Route path={`${match.url}/analytics`} component={ Dashboard } />

            <Route path={`${match.url}/autonomous-systems/general`} component={ AutonomousSystems } />

            <Route path={`${match.url}/clickhouse`} component={ Clickhouse } />

            <Route path={`${match.url}/ads`} component={ Ads }/>

            <Route render={ ( props ) => <ErrorLayout errorCode={404} {...props}/> }  />
        </Switch>
    );
};

export default ProfileSubLayout;