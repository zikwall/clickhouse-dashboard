import React from 'react';
import { Route, Switch } from "react-router";
import ErrorLayout from "../../layouts/ErrorLayout";
import { Dashboard } from "../dashboard";
import { Clickhouse } from "../clickhouse";
import { AutonomousSystems } from "../autonomous-systems";
import Ads  from "../ads";
import Users from "../users";
import Channels from "../channels";
import StartApp from "../start-app";
import RegistrationRequests from "../registration-requests";
import UserChannels from "../user-channels";
import UserViews from "../user-views";
import ChannelsStartOnlineArchive from "../channels-start-online-archive";


const DashboardSubLayout = ({ match }) => {
    return (
        <Switch>
            <Route
                exact path={`${match.url}/`}
                component={ Dashboard }
            />

            <Route
                path={`${match.url}/analytics`}
                component={ Dashboard }
            />

            <Route
                path={`${match.url}/autonomous-systems/general`}
                component={ AutonomousSystems }
            />

            <Route
                path={`${match.url}/clickhouse`}
                component={ Clickhouse }
            />

            <Route
                path={`${match.url}/ads`}
                component={ Ads }
            />

            <Route
                path={`${match.url}/user-statistics`}
                component={ Users }
            />

            <Route
                path={`${match.url}/channels`}
                component={ Channels }
            />

            <Route
                path={`${match.url}/start-app`}
                component={ StartApp }
            />

            <Route 
                path={`${match.url}/registration-requests`}
                component={ RegistrationRequests }
            />

            <Route 
                path={`${match.url}/user-channels`}
                component={ UserChannels }
            />

            <Route 
                path={`${match.url}/user-views`}
                component={ UserViews }
            />

            <Route
                path={`${match.url}/channels-start-online-archive`}
                component={ ChannelsStartOnlineArchive }
            />

            <Route
                render={ ( props ) => <ErrorLayout errorCode={404} {...props}/> }
            />
        </Switch>
    );
};

export default DashboardSubLayout;