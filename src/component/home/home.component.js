import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';

import { apiEndpoints } from './../../config/api.endpoints';


function HomeComponent(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( GetPageContentAction( apiEndpoints.home ) );
    }, [dispatch])

    const homeContent = useSelector( state => console.log( state.home ) );

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

