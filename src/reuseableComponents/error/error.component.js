import React from 'react';


import './error.style.css';
import { useDispatch, useSelector } from 'react-redux';


function ErrorComponent( props ){

    const dispatch = useDispatch();
    const errorState = useSelector( state => state.error );

    console.log( errorState );

    return(
        <div className='errorWrapper'>
            <div className='errorIcon'>&#9888;</div>
            <div className='errorMessage'>
                Something went wrong. Please try again later.
            </div>
        </div>
    )

}

export{
    ErrorComponent,
}