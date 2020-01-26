import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPageContentAction } from '../../store/root.action';
import { apiEndpoints } from '../../config/api.endpoints';
import './work.style.css';

function WorkComponent(props) {

    const dispatch = useDispatch();

    const portFolioContent = useSelector(state => state.portfolio);

    useEffect(() => {
        if (!portFolioContent)
            dispatch(GetPageContentAction(apiEndpoints.portfolio))
    }, [dispatch, portFolioContent])

    return !portFolioContent ? null :

        <div className="fadeIn">
            <h1 className="title">Projects</h1>
            <div className="workWrapper">
                {portFolioContent.map((item, index) => {
                    return (
                        <div key={index} className="workItem">
                            <h2 className="projectTile">{item.title}</h2><hr></hr>
                            <p className="description">{item.description}</p>
                            <ul className="techStack">
                                {item.stack.map((stack, key) => {
                                    return <li key={key}>{stack.viewContent}</li>
                                })}
                            </ul>
                            <div className="linksWrapper">
                                {item.links && item.links.map((link, key) => {
                                    return <a key={key} href={link.href} target="_blank" rel="noopener noreferrer">{link.viewContent}</a>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
}



export {
    WorkComponent,
}