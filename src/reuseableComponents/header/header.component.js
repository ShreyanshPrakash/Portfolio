import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import './header.style.css';

function HeaderComponent( props ){

    const [ navToggle, setNavToggle ] = useState('close');
    
    const openNav = useCallback( () => {
        setNavToggle( "open" );
        console.log( navToggle );
    }, [ navToggle ] )

    const closeNav = useCallback( () => {
        setNavToggle( "close" );
        console.log( navToggle );
    }, [ navToggle ] )

    return(
        <header className="header">
                    <h1 className="logo">
                        <NavLink to="/home">
                            S<sub>P</sub>
                        </NavLink>
                    </h1>
                    <div className="menu" onClick={ openNav }>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        {/* <span className={ menuStyle } ></span> */}
                    </div>
                    <div className="overlay" id={ navToggle } onClick={ closeNav }>
                        <button className="closebtn" >&times;</button>
                        <div className="overlay-content">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                            <NavLink to="/skills">Skills</NavLink>
                        </div>
                    </div>
                </header>
    )

}

export{
    HeaderComponent,
}