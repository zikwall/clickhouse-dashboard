import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router";
import ErrorLayout from "../../layouts/ErrorLayout";
import { Dashboard } from "../dashboard";
import NavigationRoutes from "../../routes/Routes";

const DashboardSubLayout = ({ match }) => {
    const [ routes, setRoutes ] = useState([]);

    useEffect(() => {
        const Routes = [];

        for (let routeKey in NavigationRoutes) {
            let route = NavigationRoutes[routeKey];

            if (route.component === null) {
                continue;
            }

            let isDropdown = false;

            if (route.hasOwnProperty('childs')) {
                isDropdown = true;
            }

            if (isDropdown) {
                for (let subRouteKey in route.childs) {
                    if (!route.childs.hasOwnProperty(subRouteKey)) {
                        continue;
                    }

                    let subRoute = route.childs[subRouteKey];

                    Routes.push({
                        url: route.url + subRoute.url,
                        component: subRoute.component
                    });
                }

                continue;
            }

            Routes.push({
                url: route.url,
                component: route.component
            });
        }

        setRoutes(Routes);

    }, []);

    return (
        <Switch>
            <Route
                exact path={`${match.url}/`}
                component={ Dashboard }
            />

            {
                routes.map((route, index) => {
                    return (
                        <Route
                            key={ index }
                            path={ route.url }
                            component={ route.component }
                        />
                    )
                })
            }

            <Route
                render={ ( props ) => <ErrorLayout errorCode={404} {...props}/> }
            />
        </Switch>
    );
};

export default DashboardSubLayout;
