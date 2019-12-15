import React, { useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';

import { rootRouteConfig } from './config/routes.config';
import { useSelector } from 'react-redux';


function AppComponent( props ){
    
    const configureRoutes = useCallback( () => rootRouteConfig.map( 
                                ( route, index ) => {
                                    if( route.exact )
                                        return <Route key={ index } path={ route.path } exact component={ route.component } />
                                    if( route.redirect )
                                        return <Route key={ index } render={ () => <Redirect to={ route.redirectTO }/> }/>

                                    return <Route key={ index } path={ route.path } exact component={ route.component } />
                                })
                                , [] 
                    )

    const state = useSelector( state => console.log( state ) );
    
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    { configureRoutes() }
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export {
    AppComponent,
}