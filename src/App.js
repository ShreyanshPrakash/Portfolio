import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink } from 'react-router-dom';

import { rootRouteConfig } from './config/routes.config';
import './App.css';


// This will act as the module that will load all the component.
// since this portfolio app is small all, we will need only one module.
// The whole application will be made using react hooks.

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

    // const state = useSelector( state => console.log( state ) );
    // write a code such that, the api call is made before the navigation happens.

    // <Route
    //                 path="'/Movies/:id/'"
    //                 strict
    //                 sensitive
    //                 render={({ match }) => {
    //                     return match && <Movies match={match} />;
    //                 }}
    //             />
    // call a method from render prop that will decide the api call based on match
    // u can use await to async the call and wait the route.
    // once u have data, then return the component else dont.

    // use redux to cache all the static backend content response

    const [ navToggle, setNavToggle ] = useState('close');
    
    const openNav = useCallback( () => {
        setNavToggle( "open" );
        console.log( navToggle );
    } )

    const closeNav = useCallback( () => {
        setNavToggle( "close" );
        console.log( navToggle );
    } )

    return (
        <React.Fragment>
            <Router>
                {/* haeder will shift to its own component later */}
                <header className="header">
                    <h1 className="logo">
                        <Link to="/home">
                            S<sub>P</sub>
                        </Link>
                    </h1>
                    <div className="menu" onClick={ openNav }>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        {/* <span className={ menuStyle } ></span> */}
                    </div>
                    <div className="overlay" id={ navToggle } onClick={ closeNav }>
                        <a className="closebtn" >&times;</a>
                        <div className="overlay-content">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                            <NavLink to="/skills">Skills</NavLink>
                        </div>
                    </div>
                </header>

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