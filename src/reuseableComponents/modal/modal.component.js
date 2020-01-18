import React from 'react';
import ReactDOM from 'react-dom';

import './modal.style.css';

function Modal( props ){

    console.log( props );

    return(
        <div className="modalWrapper">
            <h1>Modal text here</h1>
        </div>
    )

}

export function ModalPortal( props ){

    return ReactDOM.createPortal(
        <Modal { ...props }/>,
        document.getElementById('portal')
    )

} 

