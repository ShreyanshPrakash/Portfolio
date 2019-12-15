// This will act as the module that will load all the component.
// since this portfolio app is small all, we will need only one module.
// The whole application will be made using react hooks.

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';

import { apiEndpoints } from './../../config/api.endpoints';


function HomeComponent(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( GetPageContentAction( apiEndpoints.home ) );
    }, [dispatch])

    return (
        <React.Fragment>
            <h1>Hello from Home Component</h1>
        </React.Fragment>
    )
}



export {
    HomeComponent,
}
// const HomeComponent = React.memo()

