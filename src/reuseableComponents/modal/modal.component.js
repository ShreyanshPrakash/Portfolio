import React from 'react';
import ReactDOM from 'react-dom';

function Modal( props ){

    console.log( props );

    return(
        <React.Fragment>
            <h1>Hello from Portal</h1>
        </React.Fragment>
    )

}

export function ModalPortal( props ){

    return ReactDOM.createPortal(
        <Modal { ...props }/>,
        document.getElementById('portal')
    )

} 

