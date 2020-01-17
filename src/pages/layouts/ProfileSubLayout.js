import React from 'react';
import {Route, Switch} from "react-router";

import ErrorLayout from "../../layouts/ErrorLayout";

import Profile from "../profile/Profile";
import ProfileEdit from "../profile/ProfileEdit";

const ProfileSubLayout = ({ match }) => {
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={ Profile } />
            <Route path={`${match.url}/edit`} component={ ProfileEdit } />

            <Route render={ ( props ) => <ErrorLayout errorCode={404} {...props}/> }  />
        </Switch>
    );
};

export default ProfileSubLayout;