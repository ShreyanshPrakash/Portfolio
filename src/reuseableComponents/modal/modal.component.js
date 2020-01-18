import React from 'react';
import ReactDOM from 'react-dom';

import './modal.style.css';

function Modal(props) {


    return (
        <div className="modalWrapper" onClick={props.handleModalClick}>
            <span className="logo">
                S<sub>P</sub>
            </span>
            <span>Add Portfolio to Home Screen</span>
            <button className="closebtn" onClick={props.closeModal}>&times;</button>
        </div>
    )

}

export function ModalPortal(props) {

    return ReactDOM.createPortal(
        <Modal {...props} />,
        document.getElementById('portal')
    )

}

