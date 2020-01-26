import React from 'react';
import './error.style.css';


function ErrorComponent( props ){

    return(
        <div className='errorWrapper fadeIn'>
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