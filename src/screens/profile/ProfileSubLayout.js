import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import ErrorLayout from "../../layouts/ErrorLayout";
import Profile from "./Profile";
import ProfileEdit from "./ProfileEdit";

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