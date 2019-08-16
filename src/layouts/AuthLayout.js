import React from "react";
import { Route, Switch } from "react-router-dom";

import ErrorLayout from "./ErrorLayout";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Auth extends React.Component {
    componentDidMount() {}

    render() {
        return (
            <>
                <div className="row h-100" style={{ marginRight: "0px", marginLeft: "0px" }}>
                    <main className="main-content col">
                        <div className="main-content-container container-fluid px-4 my-auto h-100">
                            <div className="row no-gutters h-100">
                                <Switch>
                                    <Route path="/auth/login" component={ Login } />
                                    <Route path="/auth/signup" component={ Signup } />

                                    <Route exact path="/auth" component={ Login } />
                                    <Route render={ (props)=> <ErrorLayout errorCode={404} { ...props }/> }  />
                                </Switch>
                            </div>
                        </div>
                    </main>
                </div>
            </>
        );
    }
}

export default Auth;