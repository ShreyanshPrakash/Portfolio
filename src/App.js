import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { rootRouteConfig } from './config/routes.config';
import './App.css';
import { ModalPortal } from './reuseableComponents/modal/modal.component';
import { HeaderComponent } from './reuseableComponents/header/header.component';
// import { initServiceWorkerConfig } from './serviceWorker.init';


function AppComponent(props) {

    const [ AddToHomeScreenState, setAddToHomeScreenState ] = useState( null );
    const [ installPromptEvent, setInstallPromptEvent ] = useState( null );

    useEffect( () => {
        window.addEventListener( 'beforeinstallprompt', handleBeforeInstallPropmt );
        handleServiceWorkerRegistration();

        return () => {
            window.removeEventListener( handleBeforeInstallPropmt );
        }
    }, [] )

    const handleServiceWorkerRegistration = useCallback( () => {

        if( 'serviceWorker' in navigator ){
            navigator.serviceWorker.getRegistrations()
                .then( reg => {
    
                    if( reg.length === 0 )
                        navigator.serviceWorker.register( `${process.env.PUBLIC_URL}/serviceWorker.js`)
                            .then( event => console.log( event) )
                            .catch( err => console.log( '[Error occured while registering service worker]::\n ', err ) )
                    else
                        console.log( "[Service worker is already registred]\n", reg );
    
                } )
                .catch( err => console.log( '[ Error occured while registering service worker ]::\n ', err ) );
    
        }else{
            console.log( "[The client doesn't support service worker]");
        }
    
    }, [])

    const handleBeforeInstallPropmt = useCallback( event => {
        event.preventDefault();
        setInstallPromptEvent( event );
        setAddToHomeScreenState( true );
    }, [setInstallPromptEvent,setAddToHomeScreenState] )

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

    const handleModalClick = useCallback( () => {
        setAddToHomeScreenState( null );
        installPromptEvent.prompt();
        setInstallPromptEvent( null );
    }, [installPromptEvent] )

    return (
        <React.Fragment>
            <Router>
                <HeaderComponent />
                {  AddToHomeScreenState ? <ModalPortal handleModalClick={ handleModalClick }/> : null }
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