import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetPageContentAction } from '../../store/root.action';

import { apiEndpoints } from './../../config/api.endpoints';


function HomeComponent(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPageContentAction(apiEndpoints.home));
    }, [dispatch])

    const homeContent = useSelector(state => state.home);

    const getUITemplate = useCallback(() => {
        if (!homeContent) {
            return <p>Loading.....</p>
        }
        let { intro, about } = homeContent;
        let { greeting, nameHead, name, role, contacts } = intro;
        let { heading, content, buttons } = about;
        return (
            <div className='homeWrapper'>
                <div className='introWrapper'>
                    <h1>{greeting}</h1>
                    <p>{nameHead}</p>
                    <p>{name}</p>
                    <p>{role}</p>
                    <ul>
                        {contacts.map((contact, index) => {
                            return <li key={index}>{contact.viewText}</li>
                        })}
                    </ul>
                </div>
                <div className="aboutWrapper">
                    <h2>{heading}</h2>
                    <p>{content}</p>
                    {buttons.map(({ routeLink, buttonText }, index) => {
                        return <a key={index} href={ routeLink }>{buttonText}</a>
                    })}
                </div>
            </div>
        )
    })

    return (
        <React.Fragment>
            {getUITemplate()}
        </React.Fragment>
    )
}



export {
    HomeComponent,
}
// const HomeComponent = React.memo()

