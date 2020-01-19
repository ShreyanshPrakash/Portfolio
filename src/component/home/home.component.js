import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from './../../config/api.endpoints';
import './home.style.css';


function HomeComponent(props) {

    const dispatch = useDispatch();
    const homeContent = useSelector(state => state ? state.home : null);

    useEffect(() => {
        if( !homeContent )
            dispatch(GetPageContentAction(apiEndpoints.home));
    }, [dispatch, homeContent])


    const getUITemplate = useCallback( () => {
        if (!homeContent) {
            return <p>Loading.....</p>
        }
        let { intro, about } = homeContent;
        let { greeting, nameHead, name, role, contacts } = intro;
        let { heading, content, buttons } = about;
        return (
            <div className='homeWrapper'>
                <div className='introWrapper'>
                    <h2>{greeting}</h2>
                    <p>{nameHead}</p>
                    <h1>{name}</h1>
                    <h3>{role}</h3>
                    <ul className="contacts">
                        {contacts.map((contact, index) => {
                            return <li key={index}>
                                        <a href={ contact.href } target="_blank" rel="noopener noreferrer" 
                                            title={ contact.altText.split(' ')[0] }>
                                            <img src={ contact.iconPath } alt={ contact.altText } />
                                        </a>
                                    </li>
                        })}
                    </ul>
                </div>
                <div className="aboutWrapper">
                    <h2>{heading}</h2>
                    <p>{content}</p>
                    {buttons.map(({ routeLink, buttonText }, index) => {
                        return <Link key={index} to={routeLink} className={buttonText.toLowerCase()}>{buttonText}</Link>
                    })}
                </div>
            </div>
        )
    }, [ homeContent ] )

    return (
        <React.Fragment>
            {getUITemplate()}
        </React.Fragment>
    )
}



export {
    HomeComponent,
}

