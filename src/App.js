import React, { useCallback, useEffect, useState } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Redirect
} from 'react-router-dom';

import { rootRouteConfig } from './config/routes.config';
import './App.css';
import { 
    ModalPortal,
    HeaderComponent,
    ErrorComponent,
} from './reuseableComponents';
import { useDispatch, useSelector } from 'react-redux';


function AppComponent(props) {

    const [ AddToHomeScreenState, setAddToHomeScreenState ] = useState( null );
    const [ installPromptEvent, setInstallPromptEvent ] = useState( null );

    const dispatch = useDispatch();
    const applicationState = useSelector( state => state );

    const handleServiceWorkerRegistration = () => {

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
    
    }

    useEffect( () => {
        window.addEventListener( 'beforeinstallprompt', handleBeforeInstallPropmt );
        handleServiceWorkerRegistration();

        return () => {
            window.removeEventListener( handleBeforeInstallPropmt );
        }
    }, [] )

    

    const handleBeforeInstallPropmt =  event => {
        event.preventDefault();
        setInstallPromptEvent( event );
        setAddToHomeScreenState( true );
    }

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
        installPromptEvent.prompt();
        setAddToHomeScreenState( null );
        setInstallPromptEvent( null );
    }, [installPromptEvent] )

    const closeModal = useCallback( ( event ) => {
        event.stopPropagation();
        setAddToHomeScreenState( null );
        setInstallPromptEvent( null );
    }, [] )

    return (
        <React.Fragment>
            <Router>
                <HeaderComponent />
                { applicationState.error.hasError ? <ErrorComponent /> : null }
                {  AddToHomeScreenState ? 
                    <ModalPortal 
                        handleModalClick={ handleModalClick }
                        closeModal={ closeModal } 
                    /> : 
                    null
                }
                <div className="loading">
                    <div className="spinner"></div>
                </div>
                {/* { applicationState.uiState.isPageLoading ?
                    <div className="loading">

                    </div>
                    : null
                } */}
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