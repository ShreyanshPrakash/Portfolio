import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { rootRouteConfig } from './config/routes.config';
import './App.css';
import { ModalPortal } from './reuseableComponents/modal/modal.component';
import { HeaderComponent } from './reuseableComponents/header/header.component';


function AppComponent(props) {

    const configureRoutes = useCallback(() => rootRouteConfig.map(
        (route, index) => {
            if (route.exact)
                return <Route key={index} path={route.path} exact component={route.component} />
            if (route.redirect)
                return <Route key={index} render={() => <Redirect to={route.redirectTO} />} />

            return <Route key={index} path={route.path} exact component={route.component} />
        })
        , []
    )

    return (
        <React.Fragment>
            <Router>
                <HeaderComponent />
                <ModalPortal />
                <Switch>
                    {configureRoutes()}
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export {
    AppComponent,
}